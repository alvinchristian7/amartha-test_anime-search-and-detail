'use client';

import { BackgroundImage, Image, createTheme, em } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
  primaryColor: 'orange',
  colors: {
    orange: [
      '#fff0e8',
      '#f8dfd7',
      '#eabeb1',
      '#dc9b87',
      '#d17c64',
      '#ca6a4d',
      '#c85f40',
      '#b14e32',
      '#9e442b',
      '#8c3921',
    ],
  },
  breakpoints: {
    mobile: em(480),
  },
  components: {
    Image: Image.extend({
      defaultProps: {},
    }),
    BackgroundImage: BackgroundImage.extend({
      defaultProps: {},
    }),
  },
});
