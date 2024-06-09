import { Text, Image, Group, Stack, Button, StackProps } from '@mantine/core';

export type GeneralErrorProps = StackProps & {
  refetch: () => void;
};

export function GeneralError({ refetch, ...props }: GeneralErrorProps) {
  return (
    <Stack p="md" align="center" {...props}>
      <Image w={160} h={160} src="/assets/icons/refresh-page.png" alt="Refresh Page" />

      <Text fw={500} size="lg" mt="md">
        Connection Timeout
      </Text>

      <Text c="dimmed" size="sm">
        We&apos;re having trouble connecting to our servers. Please check your internet connection
        and try again.
      </Text>

      <Group gap={4}>
        <Button onClick={refetch} title="Retry" aria-label="Retry">Retry</Button>
        <Button variant="outline" title="Contact Support" aria-label="Contact Support">Contact Support</Button>
      </Group>
    </Stack>
  );
}
