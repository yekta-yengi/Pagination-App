/* eslint-disable prettier/prettier */
import {
  createClient,
} from 'pexels';

  const API_KEY = 'Your API KEY';
  const client = createClient(API_KEY);
  const query = 'People';
  const orientation = 'portrait';
  const size = 'small';
  const per_page = 5;

export const getTopPhotosRequest = async (pageNum: number) => {
  const data = await client.photos.search({ query, per_page: per_page, orientation: orientation, size:size, page: pageNum }) as any;
  return data.photos;
};
