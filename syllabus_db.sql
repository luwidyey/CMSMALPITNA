-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 22, 2025 at 02:30 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `syllabus_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `syllabus`
--

CREATE TABLE `syllabus` (
  `id` int(11) NOT NULL,
  `program` enum('Bachelor of Science in Computer Science','Bachelor of Science in Information Technology') NOT NULL,
  `semester` enum('First','Second') NOT NULL,
  `academic_year` varchar(9) NOT NULL,
  `credit_units` int(11) NOT NULL,
  `course_code` varchar(10) NOT NULL,
  `course_title` varchar(100) NOT NULL,
  `course_description` text NOT NULL,
  `pre_requisites` varchar(100) DEFAULT NULL,
  `section` varchar(50) NOT NULL,
  `schedule` varchar(100) NOT NULL,
  `policies` text DEFAULT NULL,
  `references` text DEFAULT NULL,
  `revision_number` int(11) DEFAULT NULL,
  `revision_date` date DEFAULT NULL,
  `implementation_date` date DEFAULT NULL,
  `revision_highlights` text DEFAULT NULL,
  `core_values` text DEFAULT NULL,
  `goals` text DEFAULT NULL,
  `objectives_dept` text DEFAULT NULL,
  `program_objective` text DEFAULT NULL,
  `text_1` text DEFAULT NULL,
  `text_2` text DEFAULT NULL,
  `text_3` text DEFAULT NULL,
  `text_4` text DEFAULT NULL,
  `text_5` text DEFAULT NULL,
  `text_6` text DEFAULT NULL,
  `option1_1` tinyint(1) DEFAULT 0,
  `option2_1` tinyint(1) DEFAULT 0,
  `option3_1` tinyint(1) DEFAULT 0,
  `option4_1` tinyint(1) DEFAULT 0,
  `option5_1` tinyint(1) DEFAULT 0,
  `option1_2` tinyint(1) DEFAULT 0,
  `option2_2` tinyint(1) DEFAULT 0,
  `option3_2` tinyint(1) DEFAULT 0,
  `option4_2` tinyint(1) DEFAULT 0,
  `option5_2` tinyint(1) DEFAULT 0,
  `option1_3` tinyint(1) DEFAULT 0,
  `option2_3` tinyint(1) DEFAULT 0,
  `option3_3` tinyint(1) DEFAULT 0,
  `option4_3` tinyint(1) DEFAULT 0,
  `option5_3` tinyint(1) DEFAULT 0,
  `option1_4` tinyint(1) DEFAULT 0,
  `option2_4` tinyint(1) DEFAULT 0,
  `option3_4` tinyint(1) DEFAULT 0,
  `option4_4` tinyint(1) DEFAULT 0,
  `option5_4` tinyint(1) DEFAULT 0,
  `option1_5` tinyint(1) DEFAULT 0,
  `option2_5` tinyint(1) DEFAULT 0,
  `option3_5` tinyint(1) DEFAULT 0,
  `option4_5` tinyint(1) DEFAULT 0,
  `option5_5` tinyint(1) DEFAULT 0,
  `option1_6` tinyint(1) DEFAULT 0,
  `option2_6` tinyint(1) DEFAULT 0,
  `option3_6` tinyint(1) DEFAULT 0,
  `option4_6` tinyint(1) DEFAULT 0,
  `option5_6` tinyint(1) DEFAULT 0,
  `week_no` int(11) NOT NULL,
  `ilo` text NOT NULL,
  `topic` text NOT NULL,
  `tla` text NOT NULL,
  `delivery_mode` text NOT NULL,
  `resources_needed` text NOT NULL,
  `oba` text NOT NULL,
  `due_date` date DEFAULT NULL,
  `course_requirements` text DEFAULT NULL,
  `grading_system` text DEFAULT NULL,
  `date_prepared` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `syllabus`
--

INSERT INTO `syllabus` (`id`, `program`, `semester`, `academic_year`, `credit_units`, `course_code`, `course_title`, `course_description`, `pre_requisites`, `section`, `schedule`, `policies`, `references`, `revision_number`, `revision_date`, `implementation_date`, `revision_highlights`, `core_values`, `goals`, `objectives_dept`, `program_objective`, `text_1`, `text_2`, `text_3`, `text_4`, `text_5`, `text_6`, `option1_1`, `option2_1`, `option3_1`, `option4_1`, `option5_1`, `option1_2`, `option2_2`, `option3_2`, `option4_2`, `option5_2`, `option1_3`, `option2_3`, `option3_3`, `option4_3`, `option5_3`, `option1_4`, `option2_4`, `option3_4`, `option4_4`, `option5_4`, `option1_5`, `option2_5`, `option3_5`, `option4_5`, `option5_5`, `option1_6`, `option2_6`, `option3_6`, `option4_6`, `option5_6`, `week_no`, `ilo`, `topic`, `tla`, `delivery_mode`, `resources_needed`, `oba`, `due_date`, `course_requirements`, `grading_system`, `date_prepared`) VALUES
(16, 'Bachelor of Science in Computer Science', 'First', '2025-2026', 3, 'COSC 75', 'Software Engineering II', 'Students', 'Software Engineering I', 'asdas', 'asdasd', 'asdas', 'asdas', 1, '0000-00-00', '2311-12-31', 'asdasdasdsa', 'asd', 'asd', 'zz', 'zz', 'zz', 'zzz', 'z', 'z', 'z', 'z', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 5, 'asdas', 'asdas', 'asdsa', 'asdas', 'asda', 'sda', '2222-02-22', 'asd', 'asdsa', NULL),
(24, 'Bachelor of Science in Computer Science', 'First', '2024-2025', 3, 'DCIT21', 'Introduction to Computing', 'The student will be given the general idea of what is involved in developing an organization to achieve its vision and mission, its\r\nphilosophies and culture to ensure its competitiveness in a globalized economy.\r\nThe scope will cover such topics as principles and theories of organization development, organization design and structuring, training\r\nand development, performance management, culture and change management. It focuses on the management of organizational\r\nchange/interventions from a system perspective.\r\nThe students will gain sufficient knowledge to appreciate the overall impact of these activities for the success of an organization.', 'None', '1-1', 'Lecture: Tue 5:00–7:00 pm / Thu 6:00–8:00pm Laboratory: Sat 7:00am –10:00am / 10:00am–1:00pm', 'A. Attendance\r\nStudents are not allowed to have 20% or more unexcused absences of the total face-to-face class hours; otherwise, they will be graded as\r\n“DROPPED”.\r\nB. Classroom Decorum\r\nStudents are required to:\r\n1. wear identification cards at all times;\r\n2. wear face mask at all times\r\n3. observe physical/social distancing at all times\r\n4. clean the classroom before and after classes;\r\n5. avoid unnecessary noise that might disturb other classes;\r\n6. practice good manners and right conduct at all times;\r\n7. practice gender sensitivity and awareness inside the classroom; and\r\n8. come to class on time.\r\nC. Examination/ Evaluation\r\n1. Quizzes may be announced or unannounced.\r\n2. Mid-term and Final Examinations are scheduled.\r\n3. Cheating is strictly prohibited. A student who is caught cheating will be given a score of ”0” for the first offense. For the second offense, the\r\nstudent will be automatically given a failing grade in the subject.\r\n4. Students who will miss a mid-term or final examination, a laboratory exercise or a class project may be excused and allowed to take a special\r\nexam, conduct a laboratory exercise or pass a class project for any of the following reasons:\r\na. participation in a University/College-approved field trip or activity;\r\nb. due to illness or death in the family; and\r\nc. due to force majeure or natural calamities.', 'A. Reference Books\r\nKatherine T. Pinard and Robin M. Romer. (2014). CMPTR, 2nd Edition. Cengage Learning.\r\n\r\nNancy Long, Long and Long Associates (2005). Computers 12th Ed\r\nLong, L. and Long, N. (2003). Computers 10th Ed. Upper Saddle River, New Jersey.: Prentice Hall B. Previous Syllabus / Module\r\nJeffrey A. Diaz, MIT. (2018-2020) Steffanie M. Maglasang, MIT. (2021) Maria Frances Eleanor P. Caloobanan, MPA. (2021)\r\n\r\nWeb References:\r\nhttp://people.bu.edu/baws/computer%20fundamental.html\r\nhttps://www.slideshare.net/mrsmileyjames/basic-computer-fundamentals\r\nhttp://ecomputernotes.com/fundamental/introduction-to-computer', 1, '2017-01-09', '2017-07-15', 'Inclusions of PEO and Relationship to University Mission\r\nStudent Outcomes and Relationship to PEO\r\nCourse Outcomes and Relationship to Student Outcomes\r\nInclusions of the Campus \r\nGoals and Objectives of the Department', 'Students are expected to live by and stand for the following University tenets:\r\nTRUTH is demonstrated by the student’s objectivity and honesty during examinations, class activities and in the development of projects.\r\nEXCELLENCE is exhibited by the students’ self-confidence, punctuality, diligence and commitment in the assigned tasks, class\r\nperformance and other course requirements.\r\nSERVICE is manifested by the students’ respect, rapport, fairness and cooperation in dealing with their peers and members of the\r\ncommunity.\r\nIn addition, they should exhibit love and respect for nature and support for the cause of humanity.', 'In support to the Vision and Mission of the University, CvSU – Bacoor City Campus shall:\r\n1. Provide quality and affordable education which promotes intellectual growth, academic excellence and moral integrity;\r\n2. Prepare students to meet the demands of the global market and respond to the society’s needs;\r\n3. Develop innovative and scholarly researchers who have the ability to create new understanding in quest for GAD related quality\r\nresearch through inquiry, analysis and problem solving; and\r\n4. Produce globally competitive graduates with full competence in their fields of study.', 'The department shall endeavor to:\r\n1. Provide in-depth knowledge across fundamental areas of Information Technology and Computer Science and be successful\r\nprofessionals in diverse career paths;\r\n2. Deliver skilled graduates in designing and developing hardware and software systems of varying complexity;\r\n3. Inculcate teaching principles in the field of technological information and application that become key factors in personal, social, and\r\neconomic growth of every student;\r\n4. Develop technological researches applying the mathematical foundations, algorithmic principles, and theories, which contribute to the\r\napplication of technical standards and interoperability;\r\n5. Strengthen IT linkages with government and non-government organizations.', 'To attain the objectives of the department, the program aims to produce graduates who can:\r\n1. Acquire skills and disciplines required for designing, writing, and modifying software components, modules and applications that comprise software\r\nsolutions;\r\n2. Analyze complex problems and ethically demonstrate critical and logical problem solving skills to develop computer-based solutions in a collaborative\r\nenvironment;\r\n3. Design algorithmic software and develop new and effective algorithms for solving computing problems;\r\n4. Utilize modern computing tools in legal, social, ethical and professional manner and engage in life-long learning endeavors; and\r\n5. Conduct relevant technological researches in the field of Computer Science with effective communication, reports, and design documentation.', 'Apply knowledge of computing fundamentals, computing specialization, mathematics,\r\nscience and domain knowledge appropriate for the computing specialization to the\r\ndevelopment of computing models from defined problems and requirements;', 'Communicate effectively both oral and written form and act in recognition of\r\nprofessional, social and ethical responsibility;', 'Identify, analyze, formulate, conduct research, and solve computing problems and\r\nrequirements reaching validated conclusions using fundamental principles of\r\nmathematics, computing sciences and relevant domain disciplines;', 'Design and develop computing solutions using a system-level perspective;', 'Create and use existing and modern computing tools and appropriate techniques to\r\ncomplex activities and;', 'Recognize the need, and have the ability to engage in an independent learning for\r\ncontinual development as a computing professional.', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 'After the completion of the chapter, students should be able to: \r\n1. Attain the university VMGO, as well as the campus and department objectives;', 'I. Orientation\r\nA. Vision, Mission, Goals and Objectives of the university, campus and department;\r\nB. Subject guidelines and policies', 'Class Discussion\r\nBackground Knowledge Probe', 'Face to Face Classes', 'Guide Questions\r\nPowerPoint', 'Recitation\r\n\r\nComparing and contrasting', '2024-08-25', 'Lecture Requirements:\r\n1. Recitation\r\n2. Quizzes / Activities\r\n3. Mid-Term Examination\r\n4. Final Examination\r\n5. Project (Individual)\r\n*All exams must follow a Table of Specifications (TOS) and Rubrics for evaluation of student’ performance or projects.', 'STANDARD TRANSMUTATION TABLE FOR ALL COURSES\r\n96.7 – 100.0 1.00\r\n93.4 – 96.6 1.25\r\n90.1 - 93.30 1.50\r\n86.7 – 90.0 1.75\r\n83.4 – 86.6 2.00\r\n80.1 – 83.3 2.25\r\n76.7 – 80.0 2.50\r\n73.4 – 76.6 2.75\r\n70.00 – 73.3 3.00\r\n50.0-69.9 4.00\r\nBelow 50 5.00\r\nINC Passed the course but lack some requirements.\r\nDropped If unexcused absence is at least 20% of the Total Class Hours.\r\nTotal Class Hours/Semester: (3 unit Lec – 54 hrs; 2 unit Lec – 36 hrs)\r\n(1 unit Lab – 54 hrs; 2 units Lab – 108 hrs; 3 units Lab – 162 hrs)\r\n\r\nThe grading system that will be used is:\r\nGrade Distribution for Lecture only (3 units)\r\n\r\nMidterm Exam 20%\r\nFinal Exam 20%\r\nAttendance 10%\r\nOutputs/ Portfolio 25%\r\nQuizzes/ Long Exams 15%\r\nClass Participation 10%\r\nTOTAL 100%\r\n\r\nGrade Distribution for Lecture (2 units) and Laboratory (1 unit)\r\n\r\nLecture 60%\r\nMidterm Exam 20%\r\nFinal Exam 20%\r\nAttendance 10%\r\nOutputs/ Portfolio 25%\r\nQuizzes/ Long Exams 15%\r\nClass Participation 10%\r\nTOTAL 100%\r\n\r\nLaboratory 40%\r\nLaboratory Reports 50%\r\nExam(Practical/Written) 30%\r\nAttendance/Class Participation 20%\r\nTOTAL 100%\r\nGrade Distribution for Lecture (1 unit) and Laboratory (2 units)\r\n\r\nLecture 40%\r\nMidterm Exam 20%\r\nFinal Exam 20%\r\nAttendance 10%\r\nOutputs/ Portfolio 25%\r\nQuizzes/ Long Exams 15%\r\nClass Participation 10%\r\nTOTAL 100%\r\n\r\nLaboratory 60%\r\nLaboratory Reports 50%\r\nExam(Practical/Written) 30%\r\nAttendance/Class Participation 20%\r\nTOTAL 100%\r\n\r\nThe passing score is 70% and that is equivalent to 3.0.', NULL),
(25, 'Bachelor of Science in Computer Science', 'First', 'ads', 0, 'ad', 'ads', 'asd', 'ads', 'ads', 'asdsad', 'zxc', 'zxc', 6, '1321-12-22', '1221-03-12', 'zxczxczxczx', 'zx', 'zxz', 'xxd', 'xx', 'zx', 'zx', 'zx', 'zx', 'zx', 'zx', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 'zxc', 'zxc', 'zxc', 'zxc', 'zxc', 'zxc', '2211-12-22', 'asd', 'zxc', NULL),
(26, 'Bachelor of Science in Information Technology', 'First', '2024-2025', 3, 'DCIT21', 'Introduction to Computing', 'The student will be given the general idea of what is involved in developing an organization to achieve its vision and mission, its\r\nphilosophies and culture to ensure its competitiveness in a globalized economy.\r\nThe scope will cover such topics as principles and theories of organization development, organization design and structuring, training\r\nand development, performance management, culture and change management. It focuses on the management of organizational\r\nchange/interventions from a system perspective.\r\nThe students will gain sufficient knowledge to appreciate the overall impact of these activities for the success of an organization.', 'None', '1-1', 'Lecture: Tue 5:00–7:00 pm / Thu 6:00–8:00pm Laboratory: Sat 7:00am –10:00am / 10:00am–1:00pm', 'Attendance\r\nStudents are not allowed to have 20% or more unexcused absences of the total face-to-face class hours; otherwise, they will be graded as\r\n“DROPPED”.\r\nB. Classroom Decorum\r\nStudents are required to:\r\n1. wear identification cards at all times;\r\n2. wear face mask at all times\r\n3. observe physical/social distancing at all times\r\n4. clean the classroom before and after classes;\r\n5. avoid unnecessary noise that might disturb other classes;\r\n6. practice good manners and right conduct at all times;\r\n7. practice gender sensitivity and awareness inside the classroom; and\r\n8. come to class on time.\r\nC. Examination/ Evaluation\r\n1. Quizzes may be announced or unannounced.\r\n2. Mid-term and Final Examinations are scheduled.\r\n3. Cheating is strictly prohibited. A student who is caught cheating will be given a score of ”0” for the first offense. For the second offense, the\r\nstudent will be automatically given a failing grade in the subject.\r\n4. Students who will miss a mid-term or final examination, a laboratory exercise or a class project may be excused and allowed to take a special\r\nexam, conduct a laboratory exercise or pass a class project for any of the following reasons:\r\na. participation in a University/College-approved field trip or activity;\r\nb. due to illness or death in the family; and\r\nc. due to force majeure or natural calamities.', 'References:\r\nA. Reference Books\r\nKatherine T. Pinard and Robin M. Romer. (2014). CMPTR, 2\r\n\r\nnd Edition. Cengage Learning.\r\n\r\nNancy Long, Long and Long Associates (2005). Computers 12\r\nth Ed\r\n\r\nLong, L. and Long, N. (2003). Computers 10\r\n\r\nth Ed. Upper Saddle River, New Jersey.: Prentice Hall\r\n\r\nV02-2020-07-01\r\n\r\nB. Previous Syllabus / Module\r\nJeffrey A. Diaz, MIT. (2018-2020)\r\nSteffanie M. Maglasang, MIT. (2021)\r\nMaria Frances Eleanor P. Caloobanan, MPA. (2021)\r\nWeb References:\r\nhttp://people.bu.edu/baws/computer%20fundamental.html\r\nhttps://www.slideshare.net/mrsmileyjames/basic-computer-fundamentals\r\nhttp://ecomputernotes.com/fundamental/introduction-to-computer', 1, '2017-01-09', '2020-10-10', 'Inclusions of PEO and\r\nRelationship to University Mission\r\nStudent Outcomes and\r\nRelationship to PEO\r\nCourse Outcomes and\r\nRelationship to Student Outcomes\r\nInclusions of the Campus\r\nGoals and Objectives of the\r\nDepartment', 'Students are expected to live by and stand for the following University tenets:\r\nTRUTH is demonstrated by the student’s objectivity and honesty during examinations, class activities and in the development of projects.\r\nEXCELLENCE is exhibited by the students’ self-confidence, punctuality, diligence and commitment in the assigned tasks, class\r\nperformance and other course requirements.\r\nSERVICE is manifested by the students’ respect, rapport, fairness and cooperation in dealing with their peers and members of the\r\ncommunity.\r\nIn addition, they should exhibit love and respect for nature and support for the cause of humanity.', 'In support to the Vision and Mission of the University, CvSU – Bacoor City Campus shall:\r\n1. Provide quality and affordable education which promotes intellectual growth, academic excellence and moral integrity;\r\n2. Prepare students to meet the demands of the global market and respond to the society’s needs;\r\n3. Develop innovative and scholarly researchers who have the ability to create new understanding in quest for GAD related quality\r\nresearch through inquiry, analysis and problem solving; and\r\n4. Produce globally competitive graduates with full competence in their fields of study.', 'The department shall endeavor to:\r\n1. Provide in-depth knowledge across fundamental areas of Information Technology and Computer Science and be successful\r\nprofessionals in diverse career paths;\r\n2. Deliver skilled graduates in designing and developing hardware and software systems of varying complexity;\r\n3. Inculcate teaching principles in the field of technological information and application that become key factors in personal, social, and\r\neconomic growth of every student;\r\n4. Develop technological researches applying the mathematical foundations, algorithmic principles, and theories, which contribute to the\r\napplication of technical standards and interoperability;\r\n5. Strengthen IT linkages with government and non-government organizations.\r\n', 'To attain the objectives of the department, the program aims to produce graduates who can:\r\n1. Acquire skills and disciplines required for designing, writing, and modifying software components, modules and applications that comprise software\r\nsolutions;\r\n2. Apply computing and other knowledge domains to develop computer-based solutions in a collaborative environment that will address various user\r\nneeds;\r\n3. Utilize both hardware and software technologies involving planning, installing, customizing, operating and maintaining IT infrastructure that provides\r\ncomputing solutions to address the needs of an organization;\r\n4. Utilize modern computing tools in legal, social, ethical and professional manner and engage in life-long learning endeavors; and\r\n5. Conduct relevant technological researches in the field of Information Technology with effective communication, reports, and design documentation.', 'Analyze user needs and take them into account in the selection, creation, evaluation\r\nand administration of computer-based systems;', 'Communicate effectively both oral and written form and act in recognition of\r\nprofessional, social and ethical responsibility;', 'Design, implement, and evaluate computer-based systems, processes, components,\r\nor programs to meet desired needs and requirements under various constraints within\r\na collaborative environment;', 'Understand professional, ethical, legal, security and social issues and responsibilities\r\nin the utilization of information technology;', 'Apply knowledge of computing, science, and mathematics through the use of current\r\ntechniques, skills, tools and practices necessary for IT profession; and', 'Engage in an independent and lifelong learning and improve performance as a\r\nfoundation for continuing professional development.', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 'After the\r\ncompletion of the\r\nchapter, students\r\nshould\r\nbe able to:\r\n1. Attain the\r\nuniversity VMGO, as\r\nwell as the campus\r\nand department\r\nobjectives;', 'I. Orientation\r\nA. Vision, Mission,\r\nGoals and Objectives\r\nof the university,\r\ncampus and\r\ndepartment;\r\nB. Subject guidelines\r\nand policies', 'Class Discussion\r\nBackground\r\nKnowledge Probe', 'Face to Face\r\nClasses', 'Guide Questions\r\nPowerPoint', 'Recitation\r\n\r\nComparing and\r\ncontrasting', '2024-02-20', 'Lecture Requirements:\r\n1. Recitation\r\n2. Quizzes / Activities\r\n3. Mid-Term Examination\r\n4. Final Examination\r\n5. Project (Individual)\r\n*All exams must follow a Table of Specifications (TOS) and Rubrics for evaluation of student’ performance or projects.', 'STANDARD TRANSMUTATION TABLE FOR ALL COURSES 96.7 – 100.0 1.00 93.4 – 96.6 1.25 90.1 - 93.30 1.50 86.7 – 90.0 1.75 83.4 – 86.6 2.00 80.1 – 83.3 2.25 76.7 – 80.0 2.50 73.4 – 76.6 2.75 70.00 – 73.3 3.00 50.0-69.9 4.00 Below 50 5.00 INC Passed the course but lack some requirements. Dropped If unexcused absence is at least 20% of the Total Class Hours. Total Class Hours/Semester: (3 unit Lec – 54 hrs; 2 unit Lec – 36 hrs) (1 unit Lab – 54 hrs; 2 units Lab – 108 hrs; 3 units Lab – 162 hrs) The grading system that will be used is: Grade Distribution for Lecture only (3 units) Midterm Exam 20% Final Exam 20% Attendance 10% Outputs/ Portfolio 25% Quizzes/ Long Exams 15% Class Participation 10% TOTAL 100% Grade Distribution for Lecture (2 units) and Laboratory (1 unit) Lecture 60% Midterm Exam 20% Final Exam 20% Attendance 10% Outputs/ Portfolio 25% Quizzes/ Long Exams 15% Class Participation 10% TOTAL 100% Laboratory 40% Laboratory Reports 50% Exam(Practical/Written) 30% Attendance/Class Participation 20% TOTAL 100% Grade Distribution for Lecture (1 unit) and Laboratory (2 units) Lecture 40% Midterm Exam 20% Final Exam 20% Attendance 10% Outputs/ Portfolio 25% Quizzes/ Long Exams 15% Class Participation 10% TOTAL 100% Laboratory 60% Laboratory Reports 50% Exam(Practical/Written) 30% Attendance/Class Participation 20% TOTAL 100% The passing score is 70% and that is equivalent to 3.0.\r\n', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `syllabus`
--
ALTER TABLE `syllabus`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `syllabus`
--
ALTER TABLE `syllabus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
