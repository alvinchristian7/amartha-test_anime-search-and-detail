'use client';

import { Badge, Group, Paper, Skeleton, Stack, Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { getAnimeDetailOptions } from '@/api/anime';
import { AnimeDetailParams } from './layout';

export default function AnimeDetailPage({ params }: AnimeDetailParams) {
  const { data, isFetching } = useQuery(getAnimeDetailOptions(Number(params.id)));

  return (
    <Skeleton visible={isFetching} width="100%" mih={500}>
      {data && (
        <Paper shadow="md" p="md" radius="lg">
          <Stack>
            <Text fw={500} size="lg">
              {data.title} ({data.year})
            </Text>
            <Group>
              {data.genres.map((badge) => (
                <Badge color="orange" data-testid="card-anime-badge" key={badge.name}>
                  {badge.name}
                </Badge>
              ))}
            </Group>
            <a href={data.url} target="_blank" rel="noreferrer">
              View on MyAnimeList
            </a>
            <Text>{data.synopsis}</Text>
          </Stack>
        </Paper>
      )}
    </Skeleton>
  );
}
