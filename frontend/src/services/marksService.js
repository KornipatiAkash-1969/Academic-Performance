import axios
from 'axios';

const API =
'http://localhost:5000/api/marks';


// ======================================
// ADD MARKS
// ======================================

export const addMarks =
async (formData) => {

  const token =
    localStorage.getItem('token');

  const response =
    await axios.post(

      API,

      formData,

      {

        headers: {

          Authorization:
          `Bearer ${token}`

        }

      }

    );

  return response.data;

};


// ======================================
// GET ALL MARKS
// ======================================

export const getMarks =
async () => {

  const token =
    localStorage.getItem('token');

  const response =
    await axios.get(

      API,

      {

        headers: {

          Authorization:
          `Bearer ${token}`

        }

      }

    );

  return response.data;

};


// ======================================
// GET STUDENT MARKS
// ======================================

export const getStudentMarks =
async () => {

  const token =
    localStorage.getItem('token');

  const response =
    await axios.get(

      `${API}/student`,

      {

        headers: {

          Authorization:
          `Bearer ${token}`

        }

      }

    );

  return response.data;

};