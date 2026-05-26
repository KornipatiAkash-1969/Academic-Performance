import api from './api';


// ======================================
// GET NOTES
// ======================================

export const getNotes =
async () => {

  const response =
    await api.get('/notes');

  return response.data;

};


// ======================================
// CREATE NOTE
// ======================================

export const createNote =
async (data) => {

  const response =
    await api.post(
      '/notes',
      data
    );

  return response.data;

};