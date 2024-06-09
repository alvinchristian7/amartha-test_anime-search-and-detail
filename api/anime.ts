import { keepPreviousData, queryOptions } from '@tanstack/react-query';
import { animeAxios } from '@/config/axios';
import { AnimeDetailResponseSuccess, AnimeListResponseSuccess, Datum } from '@/types/anime';
import { animeDetailMock, animeListMock } from '@/mocks/anime';

// export const getAnime = async () => {
//   const [error, result] = useTryAsync(() =>
//     axios({
//       method: 'GET',
//       url: 'https://api.jikan.moe/v4/anime',
//     })
//   );
// };

export const getAnimeListOptions = (page: number, searchText: string) =>
  queryOptions({
    queryKey: ['anime', 'list', searchText, page],
    queryFn: (): Promise<AnimeListResponseSuccess> =>
      animeAxios('/anime', {
        params: {
          page,
          limit: 9,
          q: searchText,
        },
      }).then((response) => response.data),
    placeholderData: (previousData) =>
      previousData ? { ...previousData, data: animeListMock } : keepPreviousData(previousData),
  });

export const getAnimeDetailOptions = (id: number) =>
  queryOptions({
    queryKey: ['anime', 'detail', id],
    queryFn: (): Promise<AnimeDetailResponseSuccess['data']> =>
      animeAxios(`/anime/${id}`).then((response) => response.data.data),
    placeholderData: animeDetailMock as Datum,
  });
