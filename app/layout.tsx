import '@mantine/core/styles.css';
import { Suspense } from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { theme } from '../theme';
import WithSearchBarLayout from './WithSearchBarLayout';
import Providers from './providers';

const APP_NAME = 'Ultimate Anime Collection App';
const APP_DEFAULT_TITLE = 'Ultimate Anime Collection';
const APP_TITLE_TEMPLATE = '%s - PWA App';
const APP_DESCRIPTION = 'Full of animes, and some of them are yours!';

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export const runtime = 'edge';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=yes"
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
