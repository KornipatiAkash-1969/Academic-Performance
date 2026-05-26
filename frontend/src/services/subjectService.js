import api from './api';


// ======================================
// GET SUBJECTS
// ======================================

export const getSubjects =
async () => {

  const response =
    await api.get('/subjects');

  return response.data;

};


// ======================================
// CREATE SUBJECT
// ======================================

export const createSubject =
async (data) => {

  const response =
    await api.post(
      '/subjects',
      data
    );

  return response.data;

};