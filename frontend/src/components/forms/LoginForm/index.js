import './index.css';

import {
  useState
} from 'react';

import {
  useNavigate
} from 'react-router-dom';

import {
  loginUser
} from '../../../services/authService';

function LoginForm() {

  const navigate =
    useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: '',
      password: ''
    });

  const handleChange =
    (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });

  };

  const handleSubmit =
    async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response =
        await loginUser(formData);

      console.log(response);

      // Save Token
      localStorage.setItem(
        'token',
        response.token
      );

      // Save User
      localStorage.setItem(

        'user',

        JSON.stringify(
          response.user
        )

      );

      // Teacher
      if (
        response.user.role ===
        'teacher'
      ) {

        navigate(
          '/teacher-dashboard'
        );

      }

      // Student
      else if (
        response.user.role ===
        'student'
      ) {

        navigate(
          '/student-dashboard'
        );

      }

      // Coordinator
      else if (
        response.user.role ===
        'coordinator'
      ) {

        navigate(
          '/coordinator-dashboard'
        );

      }

    } catch (error) {

      console.log(error);

      alert(

        error.response?.data?.message ||

        'Login Failed'

      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="login-container">

      <form
        className="login-form"
        onSubmit={handleSubmit}
      >

        <h2>
          Student Academic
          Performance System
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">

          {
            loading
            ? 'Loading...'
            : 'Login'
          }

        </button>

        <div className="demo-users">

          <h4>
            Demo Users
          </h4>

          <p>
            Teacher:
            teacher@example.com
          </p>

          <p>
            Student:
            student@example.com
          </p>

          <p>
            Coordinator:
            coordinator@example.com
          </p>

          <p>
            Password: 123456
          </p>

        </div>

      </form>

    </div>

  );

}

export default LoginForm;