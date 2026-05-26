const db =
require('../database/db');


// CREATE NOTE
const createNote =
(req, res) => {

  const {
    title,
    message
  } = req.body;

  const created_by =
    req.user.id;

  db.run(

    `
    INSERT INTO notes
    (
      title,
      message,
      created_by
    )
    VALUES (?, ?, ?)
    `,

    [
      title,
      message,
      created_by
    ],

    function(err) {

      if (err) {

        console.log(err);

        return res.status(500).json({
          message: err.message
        });

      }

      res.status(201).json({

        success: true,

        message:
        'Note Created Successfully'

      });

    }

  );

};


// GET NOTES
const getNotes =
(req, res) => {

  db.all(

    `
    SELECT * FROM notes
    ORDER BY created_at DESC
    `,

    [],

    (err, notes) => {

      if (err) {

        console.log(err);

        return res.status(500).json({
          message: err.message
        });

      }

      res.status(200).json(notes);

    }

  );

};


module.exports = {

  createNote,
  getNotes

};