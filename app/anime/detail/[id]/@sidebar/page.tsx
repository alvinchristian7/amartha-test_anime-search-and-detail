'use client';

import { Paper, Skeleton, Stack, Table } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { getAnimeDetailOptions } from '@/api/anime';
import { AnimeDetailParams } from '../layout';
import { ImageFill } from '@/components/ImageFill/ImageFill';

export default function SidebarSection({ params }: AnimeDetailParams) {
  const { data, isFetching } = useQuery(
    getAnimeDetailOptions(Number(params.id))
  );

  return (
    <Skeleton visible={isFetching} width="100%" mih={500}>
      {data && (
        <Paper shadow="md" p="md" radius="lg">
          <Stack>
            <ImageFill src={data.images.webp.image_url} alt={data.title} boxProps={{ h: 240 }} />
            <Table striped withTableBorder>
              <Table.Tbody>
                {[
                  { key: 'Title', value: data.title },
                  { key: 'Title (Japanese)', value: data.title_japanese },
                  { key: 'Rating', value: data.rating },
                  { key: 'Type', value: data.type },
                  { key: 'Status', value: data.status },
                  { key: 'Year', value: data.year },
                  { key: 'Season', value: data.season },
                  { key: 'Score', value: data.score },
                  { key: 'Scored By', value: data.scored_by },
                  { key: 'Rank', value: data.rank },
                ].map(({ key, value }) => (
                  <Table.Tr key={key}>
                    <Table.Td bg="orange">{key}</Table.Td>
                    <Table.Td>{value}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Stack>
        </Paper>
      )}
    </Skeleton>
  );
}
