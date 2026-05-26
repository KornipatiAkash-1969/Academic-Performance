import api from './api';

export const getStudentMarks =
async () => {

  const response =
    await api.get(
      '/marks/student'
    );

  return response.data;

};