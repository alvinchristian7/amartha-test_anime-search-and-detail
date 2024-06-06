import axios from 'axios';

export const animeAxios = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
});
