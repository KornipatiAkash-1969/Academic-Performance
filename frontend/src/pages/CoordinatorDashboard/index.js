import './index.css';

import {
  Link
} from 'react-router-dom';

import CoordinatorHeader
from '../../components/common/CoordinatorHeader';

function CoordinatorDashboard() {

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

    <div className="coordinator-dashboard">

      {/* HEADER */}

      <CoordinatorHeader />


      {/* CONTENT */}

      <div className="dashboard-content">

        {/* TOP */}

        <div className="dashboard-top">

          <h1>
            Coordinator Dashboard
          </h1>

          <p>
            Manage academic coordination and notes
          </p>

        </div>


        {/* PROFILE CARD */}

        <div className="coordinator-card">

          {/* AVATAR */}

          <div className="coordinator-avatar">

            {

              user.name
              ? user.name.charAt(0)
              : 'C'

            }

          </div>


          {/* DETAILS */}

          <div className="coordinator-details">

            <h2>

              Welcome,
              {' '}

              {user.name || 'Coordinator'}

            </h2>

            <div className="coordinator-info-grid">

              <div className="info-box">

                <span>
                  Email
                </span>

                <h3>
                  {user.email}
                </h3>

              </div>

              <div className="info-box">

                <span>
                  Role
                </span>

                <h3>
                  {user.role}
                </h3>

              </div>

            </div>

          </div>

        </div>


        {/* DASHBOARD GRID */}

        <div className="dashboard-grid">

          {/* NOTES */}

          <Link
            to="/coordinator-notes"
            className="dashboard-box"
          >

            <div className="box-icon">

              📝

            </div>

            <h3>
              Notes
            </h3>

            <p>
              Send notes to students and teachers
            </p>

          </Link>


          {/* CREATE TEACHER */}

          <Link
            to="/create-teacher"
            className="dashboard-box"
          >

            <div className="box-icon">

              👨‍🏫

            </div>

            <h3>
              Create Teacher
            </h3>

            <p>
              Create and manage teacher accounts
            </p>

          </Link>

        </div>

      </div>

    </div>

  );

}

export default CoordinatorDashboard;