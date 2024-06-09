import '@mantine/core/styles.css';
import { Suspense } from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { theme } from '../theme';
import WithSearchBarLayout from './WithSearchBarLayout';
import Providers from './providers';

export const runtime = 'edge';

export const metadata = {
  title: 'Ultimate Anime Collection',
  description: 'Full of animes, and some of them are yours!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Suspense>
          <Providers>
            <ReactQueryDevtools initialIsOpen={false} />
            <MantineProvider theme={theme}>
              <WithSearchBarLayout>{children}</WithSearchBarLayout>
            </MantineProvider>
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
