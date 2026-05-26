import api from './api';

export const getNotes =
async () => {

  const response =
    await api.get('/notes');

  return response.data;

};

export const createNote =
async (data) => {

  const response =
    await api.post(
      '/notes',
      data
    );

  return response.data;

};