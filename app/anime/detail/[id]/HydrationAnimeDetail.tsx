import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getAnimeDetailOptions } from '@/api/anime';

export default async function HydrationAnimeDetail({
  children,
  id,
}: {
  children: any;
  id: number;
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getAnimeDetailOptions(id));

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
  );
}
