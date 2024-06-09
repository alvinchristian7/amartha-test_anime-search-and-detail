import { Text, Card, Image, Badge, Group } from '@mantine/core';
import NextLink from 'next/link';

export type BackgroundImageAnimeProps = {
  id: number;
  title: string;
  year: number;
  desc: string;
  srcImg: string;
  badges: string[];
};

export function CardAnime(props: BackgroundImageAnimeProps) {
  return (
    <Card shadow="sm" padding="xl" h="100%" component={NextLink} href={`/anime/detail/${props.id}`}>
      <Card.Section>
        <Image src={props.srcImg} h={200} alt={props.title} data-testid="card-anime-image" />
      </Card.Section>

      <Text fw={500} size="lg" mt="md" lineClamp={1} data-testid="card-anime-title">
        {props.title} ({props.year})
      </Text>

      <Text mt="xs" c="dimmed" size="sm" lineClamp={3} data-testid="card-anime-desc">
        {props.desc}
      </Text>
      <Group mt="xs" gap={4}>
        {props.badges.map((badge) => (
          <Badge color="orange" data-testid="card-anime-badge" key={badge}>
            {badge}
          </Badge>
        ))}
      </Group>
    </Card>
  );
}
