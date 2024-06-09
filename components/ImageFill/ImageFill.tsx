import { Image, Box, ImageProps as MantineImageProps, BoxProps } from '@mantine/core';
import NextImage from 'next/image';
import type { ImageProps } from 'next/image';

export type ImageFillProps = MantineImageProps &
  ImageProps & {
    boxProps?: BoxProps;
  };

export function ImageFill({ boxProps, ...props }: ImageFillProps) {
  return (
    <Box pos="relative" {...boxProps}>
      <Image component={NextImage} fill {...props} />
    </Box>
  );
}
