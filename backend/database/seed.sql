-- ======================================
-- ASSESSMENTS
-- ======================================

INSERT INTO assessments
(
  assessment_id,
  title,
  total_marks
)
VALUES

(
  'INT-1',
  'Internal Exam',
  100
),

(
  'MID-1',
  'Mid-Term Exam',
  100
),

(
  'FIN-1',
  'Final Exam',
  100
);


-- ======================================
-- GRADES TABLE
-- ======================================

CREATE TABLE IF NOT EXISTS grades (

  id INTEGER PRIMARY KEY AUTOINCREMENT,

  min_percentage INTEGER,

  max_percentage INTEGER,

  grade TEXT

);


-- ======================================
-- INSERT GRADES
-- ======================================

INSERT INTO grades
(
  min_percentage,
  max_percentage,
  grade
)
VALUES

(90,100,'A+'),

(80,89,'A'),

(70,79,'B'),

(60,69,'C'),

(50,59,'D'),

(0,49,'F');