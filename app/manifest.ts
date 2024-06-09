import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ultimate Anime Collection',
    short_name: 'UAC',
    description: 'Full of animes, and some of them are yours!',
    id: '/',
    start_url: '/',
    scope: '/',
    orientation: 'portrait',
    display: 'fullscreen',
    display_override: ['standalone', 'minimal-ui'],
    background_color: '#2803fc',
    theme_color: '#dfa290',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/maskable_icon.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'View Naruto Detail',
        short_name: 'Naruto Detail',
        description: 'Everything about naruto',
        url: '/anime/detail/20',
        icons: [{ src: '/assets/icons/refresh-page.png', sizes: '512x512', type: 'image/png' }],
      },
    ],
    screenshots: [
      {
        src: '/screenshots/landing page.png',
        type: 'image/png',
        sizes: '2538x1278',
        // @ts-ignore
        form_factor: 'wide',
      },
      {
        src: '/screenshots/anime detail page.png',
        type: 'image/png',
        sizes: '2552x1286',
        // @ts-ignore
        form_factor: 'narrow',
      },
    ],
  };
}
