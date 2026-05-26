import api
from './api';


// ======================================
// GET ALL STUDENTS
// ======================================

export const getStudents =
async () => {

  const response =
    await api.get(
      '/students'
    );

  return response.data;

};


// ======================================
// CREATE STUDENT
// ======================================

export const createStudent =
async (data) => {

  const response =
    await api.post(

      '/auth/register',

      data

    );

  return response.data;

};