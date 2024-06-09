'use client';

import '@mantine/core/styles.css';
import { useEffect, useState } from 'react';
import { AppShell, CloseButton, Input, Paper } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback, useDidUpdate, useWindowScroll } from '@mantine/hooks';
import { useMediaQueryFromBreakpoints } from '@/hooks/useMediaQueryFromBreakpoints';

export default function WithSearchBarLayout({ children }: { children: any }) {
  const isMobile = useMediaQueryFromBreakpoints();
  const router = useRouter();
  const pathname = usePathname();
  const isOnLandingPage = pathname === '/';
  const searchParams = useSearchParams();
  const activePage = searchParams.has('page') ? Number(searchParams.get('page')) : 1;
  const searchTextFromQuery = searchParams.get('q') ?? '';
  const [searchText, setSearchText] = useState(searchTextFromQuery);
  const [, scrollTo] = useWindowScroll();

  useEffect(() => {
    scrollTo({ y: 0 });
  }, [activePage, searchTextFromQuery]);

  useDidUpdate(() => {
    setSearchText(searchTextFromQuery);
  }, [searchTextFromQuery]);

  const submitFormSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }

    router.push(`/?${params.toString()}`, {
      scroll: true,
    });
  };

  const replaceQueryString = useDebouncedCallback(submitFormSearch, 300);

  const handleSearchByText = (term: string) => {
    setSearchText(term);
    if (isOnLandingPage) replaceQueryString(term);
  };

  const renderResponsive = isMobile
    ? {
        pSearchBarContainer: 'sm',
      }
    : {
        pSearchBarContainer: 20,
      };

  return (
    <AppShell header={{ height: { base: 75, sm: 90 } }}>
      <AppShell.Header>
        <Paper shadow="xs" p={renderResponsive.pSearchBarContainer} radius={0}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (!isOnLandingPage) submitFormSearch(searchText);
            }}
          >
            <Input
              size="lg"
              value={searchText}
              onChange={(event) => handleSearchByText(event.target.value)}
              placeholder="Search anime by title"
              leftSection={<IconSearch size={16} />}
              rightSectionPointerEvents="all"
              rightSection={
                <CloseButton
                  aria-label="Clear input"
                  onClick={() => handleSearchByText('')}
                  style={{ display: searchText ? undefined : 'none' }}
                />
              }
            />
            <input type="submit" hidden />
          </form>
        </Paper>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
