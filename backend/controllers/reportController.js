const reportService = require('../services/reportService');

exports.getStudentReport = async (req, res) => {
  try {
    const studentId = req.params.id;

    const report = await reportService.getStudentReport(studentId);

    res.json({
      success: true,
      report
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};