import './index.css';

import {
  useState
} from 'react';

import TeacherHeader
from '../../components/common/TeacherHeader';

import {
  addMarks
} from '../../services/marksService';

function AddMarksPage() {

  // ======================================
  // STATES
  // ======================================

  const [formData, setFormData] =
    useState({

      student_id: '',
      subject_id: '',
      assessment_id: '',
      marks_obtained: ''

    });

  const [loading, setLoading] =
    useState(false);

  // ======================================
  // HANDLE INPUT
  // ======================================

  const handleChange =
    (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });

  };

  // ======================================
  // SUBMIT FORM
  // ======================================

  const handleSubmit =
    async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response =
        await addMarks(formData);

      console.log(response);

      alert(
        'Marks Added Successfully'
      );

      // RESET FORM

      setFormData({

        student_id: '',
        subject_id: '',
        assessment_id: '',
        marks_obtained: ''

      });

    } catch (error) {

      console.log(error);

      alert(

        error.response?.data?.message ||

        'Failed To Add Marks'

      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="marks-page">

      {/* HEADER */}

      <TeacherHeader />


      {/* CONTENT */}

      <div className="marks-content">

        {/* TOP */}

        <div className="marks-top">

          <h1>
            Add Student Marks
          </h1>

          <p>
            Enter student academic marks
          </p>

        </div>


        {/* FORM */}

        <form
          className="marks-form"
          onSubmit={handleSubmit}
        >

          {/* STUDENT ID */}

          <div className="input-group">

            <label>
              Student ID
            </label>

            <input
              type="text"
              name="student_id"
              placeholder="Example: STU58293124"
              value={formData.student_id}
              onChange={handleChange}
              required
            />

            <small>
              Enter Student Text ID
            </small>

          </div>


          {/* SUBJECT ID */}

          <div className="input-group">

            <label>
              Subject ID
            </label>

            <input
              type="text"
              name="subject_id"
              placeholder="Example: MAT101"
              value={formData.subject_id}
              onChange={handleChange}
              required
            />

            <small>
              Enter Subject Text ID
            </small>

          </div>


          {/* ASSESSMENT ID */}

          <div className="input-group">

            <label>
              Assessment ID
            </label>

            <input
              type="text"
              name="assessment_id"
              placeholder="Example: ASM101"
              value={formData.assessment_id}
              onChange={handleChange}
              required
            />

            <small>
              Enter Assessment Text ID
            </small>

          </div>


          {/* MARKS */}

          <div className="input-group">

            <label>
              Marks Obtained
            </label>

            <input
              type="number"
              name="marks_obtained"
              placeholder="Enter Marks"
              value={formData.marks_obtained}
              onChange={handleChange}
              required
              min="0"
              max="100"
            />

          </div>


          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
          >

            {

              loading
              ? 'Adding Marks...'
              : 'Add Marks'

            }

          </button>

        </form>

      </div>

    </div>

  );

}

export default AddMarksPage;