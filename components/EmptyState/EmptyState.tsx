import { Text, Image, Stack, StackProps } from '@mantine/core';

export type EmptyStateProps = StackProps & {
  searchText: string;
};

export function EmptyState({ searchText, ...props }: EmptyStateProps) {
  return (
    <Stack p="md" align="center" {...props}>
      <Image w={160} h={160} src="/assets/icons/empty-trash.svg" alt="Empty Data" />

      <Text fw={500} size="lg" mt="md">
        Search for &quot;{searchText}&quot; was not found
      </Text>

      <Text c="dimmed" size="sm">
        Please try again with different title.
      </Text>
    </Stack>
  );
}
