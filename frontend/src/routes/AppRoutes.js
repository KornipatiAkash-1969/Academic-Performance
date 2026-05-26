import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


import CreateTeacher
from '../pages/CreateTeacher';

import LoginPage
from '../pages/LoginPage';

import TeacherDashboard
from '../pages/TeacherDashboard';

import StudentDashboard
from '../pages/StudentDashboard';

import CoordinatorDashboard
from '../pages/CoordinatorDashboard';

import SubjectManagementPage
from '../pages/SubjectManagementPage';

import StudentSubjects
from '../pages/StudentSubjects';


import AddStudentPage
from '../pages/AddStudentPage';

import AddMarksPage
from '../pages/AddMarksPage';

import StudentMarks
from '../pages/StudentMarks';

import CoordinatorNotes
from '../pages/CoordinatorNotes';

import TeacherStudents
from '../pages/TeacherStudents';


function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LoginPage />}
        />

        <Route
          path="/teacher-dashboard"
          element={
            <TeacherDashboard />
          }
        />

        <Route
          path="/teacher-students"
          element={
            <TeacherStudents />
          }
        />

        <Route
          path="/subjects"
          element={
            <SubjectManagementPage />
          }
        />

        <Route
          path="/add-student"
          element={
            <AddStudentPage />
          }
        />

        <Route
          path="/add-marks"
          element={
            <AddMarksPage />
          }
        />

        <Route
          path="/student-dashboard"
          element={
            <StudentDashboard />
          }
        />

        <Route
          path="/student-subjects"
          element={
            <StudentSubjects />
          }
        />

        <Route
          path="/student-marks"
          element={
            <StudentMarks />
          }
        />

        <Route
          path="/create-teacher"
          element={<CreateTeacher />}
        />

        <Route
          path="/coordinator-dashboard"
          element={
            <CoordinatorDashboard />
          }
        />

        <Route
          path="/coordinator-notes"
          element={
            <CoordinatorNotes />
          }
        />


      </Routes>

    </BrowserRouter>

  );

}

export default AppRoutes;