import './index.css';

import {
  Link
} from 'react-router-dom';

import TeacherHeader
from '../../components/common/TeacherHeader';

import NotesList
from '../../components/common/NotesList';

function TeacherDashboard() {

  const userString =
    localStorage.getItem('user');

  let user = {};

  try {

    user = userString
      ? JSON.parse(userString)
      : {};

  } catch (error) {

    console.log(error);

  }

  return (

    <div className="teacher-dashboard">

      {/* HEADER */}

      <TeacherHeader />


      {/* CONTENT */}

      <div className="teacher-content">

        {/* PAGE TOP */}

        <div className="dashboard-top">

          <div>

            <h1>
              Teacher Dashboard
            </h1>

            <p>
              Manage students, subjects and marks
            </p>

          </div>

        </div>


        {/* PROFILE CARD */}

        <div className="teacher-card">

          {/* AVATAR */}

          <div className="teacher-avatar">

            {

              user.name
              ? user.name.charAt(0)
              : 'T'

            }

          </div>


          {/* DETAILS */}

          <div className="teacher-details">

            <h2>

              Welcome,
              {' '}

              {user.name || 'Teacher'}

            </h2>


            {/* INFO GRID */}

            <div className="teacher-info-grid">

              {/* TEACHER ID */}

              <div className="info-box">

                <span>
                  Teacher ID
                </span>

                <h3>

                  {

                    user.student_id
                    ? user.student_id
                    : `TEACHER-${user.id}`

                  }

                </h3>

              </div>


              {/* EMAIL */}

              <div className="info-box">

                <span>
                  Email
                </span>

                <h3>

                  {user.email || 'N/A'}

                </h3>

              </div>


              {/* ROLE */}

              <div className="info-box">

                <span>
                  Role
                </span>

                <h3>

                  {user.role || 'teacher'}

                </h3>

              </div>

            </div>

          </div>

        </div>


        {/* DASHBOARD GRID */}

        <div className="dashboard-grid">

          {/* SUBJECTS */}

          <Link
            to="/subjects"
            className="dashboard-box"
          >

            <div className="box-icon">

              📘

            </div>

            <h3>
              Subjects
            </h3>

            <p>
              Create and manage subjects
            </p>

          </Link>


          {/* STUDENTS */}

          <Link
            to="/add-student"
            className="dashboard-box"
          >

            <div className="box-icon">

              👨‍🎓

            </div>

            <h3>
              Students
            </h3>

            <p>
              Add and manage students
            </p>

          </Link>


          {/* MARKS */}

          <Link
            to="/add-marks"
            className="dashboard-box"
          >

            <div className="box-icon">

              📝

            </div>

            <h3>
              Marks
            </h3>

            <p>
              Add student marks
            </p>

          </Link>

        </div>


        {/* NOTES SECTION */}

        <div className="notes-section">

          <div className="notes-header">

            <h2>
              Coordinator Notes
            </h2>

          </div>

          <NotesList />

        </div>

      </div>

    </div>

  );

}

export default TeacherDashboard;