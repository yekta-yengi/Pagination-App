/* eslint-disable prettier/prettier */
import {
  createClient,
} from 'pexels';

  const API_KEY = '563492ad6f917000010000018e798a9b75bf4449b197826150dd40ca';
  const client = createClient(API_KEY);
  const query = 'People';
  const orientation = 'portrait';
  const size = 'small';
  const per_page = 5;

export const getTopPhotosRequest = async (pageNum: number) => {
  const data = await client.photos.search({ query, per_page: per_page, orientation: orientation, size:size, page: pageNum }) as any;
  return data.photos;
};
