import { queryOptions } from '@tanstack/react-query';
import { animeAxios } from '@/config/axios';

// export const getAnime = async () => {
//   const [error, result] = useTryAsync(() =>
//     axios({
//       method: 'GET',
//       url: 'https://api.jikan.moe/v4/anime',
//     })
//   );
// };

export const getAnimeOptions = (page: number) =>
  queryOptions({
    queryKey: ['anime', 'list', page],
    queryFn: () => animeAxios('/anime', {
      params: {
        page,
        limit: 10,
      },
    }),
  });
