import './index.css';

import {
  useEffect,
  useState
} from 'react';

import api
from '../../../services/api';

function NotesList() {

  const [notes, setNotes] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    loadNotes();

  }, []);

  // LOAD NOTES

  const loadNotes =
    async () => {

    try {

      const response =
        await api.get('/notes');

      setNotes(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="notes-list-container">

      {

        loading
        ? (

          <div className="notes-loading">

            Loading Notes...

          </div>

        )
        : (

          <>

            {

              notes.length > 0
              ? (

                <div className="notes-grid">

                  {

                    notes.map((note) => (

                      <div
                        key={note.id}
                        className="note-card"
                      >

                        <h3>
                          {note.title}
                        </h3>

                        <p>
                          {note.message}
                        </p>

                      </div>

                    ))

                  }

                </div>

              )
              : (

                <div className="empty-notes">

                  No Notes Available

                </div>

              )

            }

          </>

        )

      }

    </div>

  );

}

export default NotesList;