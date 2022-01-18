/* eslint-disable prettier/prettier */
export const topPhotosRequest = (page) => ({
  type: 'API_REQUEST',
  payload: {
    page: page,
  },
});
