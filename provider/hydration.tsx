import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
import React from 'react';
import { getAnimeOptions } from '@/api/anime';

export default async function Hydration({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // this sets the cache time to 5 minutes
      },
    },
  });
  await Promise.all([
    queryClient.prefetchQuery(getAnimeOptions(1)),
    queryClient.prefetchQuery(getAnimeOptions(1)),
  ]);
  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
