'use client';

import { Center, Container, Loader, Pagination, SimpleGrid, Skeleton, Stack } from '@mantine/core';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { usePathname, useSearchParams } from 'next/navigation';
import NextLink from 'next/link';
import { getAnimeListOptions } from '@/api/anime';
import { CardAnime } from '@/components/CardAnime/CardAnime';
import { useMediaQueryFromBreakpoints } from '@/hooks/useMediaQueryFromBreakpoints';
import { GeneralError } from '@/components/GeneralError/GeneralError';
import { EmptyState } from '@/components/EmptyState/EmptyState';

export default function HomePage() {
  const isMobile = useMediaQueryFromBreakpoints();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTextFromQuery = searchParams.get('q') ?? '';
  const activePage = searchParams.has('page') ? Number(searchParams.get('page')) : 1;

  const queryClient = useQueryClient();
  const { isPending, isError, data, isFetching, refetch } = useQuery(
    getAnimeListOptions(activePage, searchTextFromQuery)
  );

  const renderResponsive = isMobile
    ? {
        simpleGridProps: {
          cols: 1,
          spacing: 'md',
        },
        paginationProps: {
          size: 'sm',
        },
      }
    : {
        simpleGridProps: {
          cols: 3,
          spacing: 'lg',
        },
      };

  return (
    <Container py="md" size="lg">
      {isPending ? (
        <Center>
          <Loader pt={75} color="orange" />
        </Center>
      ) : isError ? (
        <GeneralError refetch={refetch} pt={75} />
      ) : data.data.length === 0 ? (
        <EmptyState searchText={searchTextFromQuery} />
      ) : (
        <Stack>
          <SimpleGrid {...renderResponsive.simpleGridProps}>
            {data.data.map((anime) => (
              <Skeleton visible={isFetching} key={anime.mal_id}>
                <CardAnime
                  id={anime.mal_id}
                  srcImg={anime.images.webp.image_url}
                  title={anime.title}
                  year={anime.year}
                  desc={anime.synopsis}
                  badges={anime.genres.map((genre) => genre.name)}
                />
              </Skeleton>
            ))}
          </SimpleGrid>
          {data.pagination.last_visible_page > 1 && (
            <Skeleton visible={isPending} width="auto" style={{ alignSelf: 'center' }}>
              <Pagination
                value={activePage}
                total={data.pagination.last_visible_page}
                getItemProps={(page) => {
                  const params = new URLSearchParams(searchParams);
                  params.set('page', String(page));
                  const prefetchNextList = () =>
                    queryClient.prefetchQuery(getAnimeListOptions(page, searchTextFromQuery));

                  return {
                    component: NextLink,
                    scroll: true,
                    href: `${pathname}?${params.toString()}`,
                    onMouseEnter: prefetchNextList,
                    onTouchStart: prefetchNextList,
                  };
                }}
                getControlProps={(control) => {
                  const params = new URLSearchParams(searchParams);
                  const currentPage = Number(params.get('page')) || 1;
                  let futurePage: number | undefined;
                  if (currentPage < data.pagination.last_visible_page && control === 'next') {
                    futurePage = currentPage + 1;
                  }
                  if (currentPage > 1 && control === 'previous') {
                    futurePage = currentPage - 1;
                  }
                  if (futurePage != null) {
                    params.set('page', String(futurePage));
                    const prefetchNextList = () =>
                      queryClient.prefetchQuery(
                        getAnimeListOptions(futurePage, searchTextFromQuery)
                      );

                    return {
                      component: NextLink,
                      scroll: true,
                      href: `${pathname}?${params.toString()}`,
                      onMouseEnter: prefetchNextList,
                      onTouchStart: prefetchNextList,
                    };
                  }

                  return {};
                }}
                {...renderResponsive.paginationProps}
              />
            </Skeleton>
          )}
        </Stack>
      )}
    </Container>
  );
}
