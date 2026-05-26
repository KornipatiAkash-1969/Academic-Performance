const PDFDocument = require('pdfkit');
const fs = require('fs');

const generatePDF = (student, reportData, outputPath) => {
  const doc = new PDFDocument();

  doc.pipe(fs.createWriteStream(outputPath));

  doc.fontSize(22).text(
    'Student Performance Report',
    {
      align: 'center'
    }
  );

  doc.moveDown();

  doc.fontSize(14).text(`Student Name: ${student.name}`);
  doc.text(`Email: ${student.email}`);

  doc.moveDown();

  reportData.forEach((item) => {
    doc.text(
      `${item.subject_name} - ${item.marks_obtained} - ${item.grade}`
    );
  });

  doc.end();
};

module.exports = generatePDF;