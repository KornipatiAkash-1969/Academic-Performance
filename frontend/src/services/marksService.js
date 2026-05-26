import axios
from 'axios';

const API =
'https://academic-performance-1.onrender.com/api/marks';

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