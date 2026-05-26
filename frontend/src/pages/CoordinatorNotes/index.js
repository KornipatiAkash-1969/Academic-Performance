import './index.css';

import {
  useState
} from 'react';

import CoordinatorHeader
from '../../components/common/CoordinatorHeader';

import {
  createNote
} from '../../services/noteService';

function CoordinatorNotes() {

  // ======================================
  // STATES
  // ======================================

  const [formData, setFormData] =
    useState({

      title: '',
      message: ''

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

      await createNote(formData);

      alert(
        'Note Sent Successfully'
      );

      // RESET FORM

      setFormData({

        title: '',
        message: ''

      });

    } catch (error) {

      console.log(error);

      alert(

        error.response?.data?.message ||

        'Failed To Send Note'

      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="notes-page">

      {/* HEADER */}

      <CoordinatorHeader />


      {/* CONTENT */}

      <div className="notes-content">

        {/* TOP */}

        <div className="notes-top">

          <h1>
            Coordinator Notes
          </h1>

          <p>
            Send important academic notes
            to students and teachers
          </p>

        </div>


        {/* FORM */}

        <form
          className="notes-form"
          onSubmit={handleSubmit}
        >

          {/* TITLE */}

          <div className="input-group">

            <label>
              Note Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter Note Title"
              value={formData.title}
              onChange={handleChange}
              required
            />

          </div>


          {/* MESSAGE */}

          <div className="input-group">

            <label>
              Note Message
            </label>

            <textarea
              name="message"
              placeholder="Enter Note Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

          </div>


          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
          >

            {

              loading
              ? 'Sending Note...'
              : 'Send Note'

            }

          </button>

        </form>

      </div>

    </div>

  );

}

export default CoordinatorNotes;