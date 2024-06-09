import { Box, Container, Flex, rem } from '@mantine/core';
import HydrationAnimeDetail from './HydrationAnimeDetail';

export const metadata = {
  title: 'Ultimate Anime Collection',
  description: 'Full of animes, and some of them are yours!',
};

export type AnimeDetailParams = { params: { id: string } };
type LayoutProps = AnimeDetailParams & {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

export default function Layout({ children, sidebar, params }: LayoutProps) {
  return (
    <HydrationAnimeDetail id={Number(params.id)}>
      <Container py="md" size="lg">
        <Flex wrap="wrap-reverse" gap={32}>
          <Box flex={`4 1 ${rem(500)}`}>{children}</Box>
          <Box flex={`1 1 ${rem(250)}`}>{sidebar}</Box>
        </Flex>
      </Container>
    </HydrationAnimeDetail>
  );
}
