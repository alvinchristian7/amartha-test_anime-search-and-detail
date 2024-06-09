import { Center, Loader } from '@mantine/core';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Center mt={150}>
      <Loader color="blue" size={100} />
    </Center>
  );
}
