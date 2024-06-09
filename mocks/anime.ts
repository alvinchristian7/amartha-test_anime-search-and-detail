import { generateArray } from '@/lib/generateVar';

export const animeDetailMock = {
  images: { webp: { image_url: 'https://cdn.myanimelist.net/' } },
  title: 'Test title',
  year: 1994,
  synopsis:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
  genres: [{ name: 'Action' }, { name: 'Drama' }],
};

export const animeListMock = generateArray(9, (index: number) => ({
  mal_id: `a${index + 1}`,
  ...animeDetailMock,
}));
