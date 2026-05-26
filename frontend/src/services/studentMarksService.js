import api from './api';


// ======================================
// GET STUDENT MARKS
// ======================================

export const getStudentMarks =
async () => {

  const response =
    await api.get(
      '/marks/student'
    );

  return response.data;

};