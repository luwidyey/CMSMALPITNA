-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2025 at 05:22 AM
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
  `grading_system` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `syllabus`
--

INSERT INTO `syllabus` (`id`, `program`, `semester`, `academic_year`, `credit_units`, `course_code`, `course_title`, `course_description`, `pre_requisites`, `section`, `schedule`, `policies`, `references`, `revision_number`, `revision_date`, `implementation_date`, `revision_highlights`, `core_values`, `goals`, `objectives_dept`, `program_objective`, `text_1`, `text_2`, `text_3`, `text_4`, `text_5`, `text_6`, `option1_1`, `option2_1`, `option3_1`, `option4_1`, `option5_1`, `option1_2`, `option2_2`, `option3_2`, `option4_2`, `option5_2`, `option1_3`, `option2_3`, `option3_3`, `option4_3`, `option5_3`, `option1_4`, `option2_4`, `option3_4`, `option4_4`, `option5_4`, `option1_5`, `option2_5`, `option3_5`, `option4_5`, `option5_5`, `option1_6`, `option2_6`, `option3_6`, `option4_6`, `option5_6`, `week_no`, `ilo`, `topic`, `tla`, `delivery_mode`, `resources_needed`, `oba`, `due_date`, `course_requirements`, `grading_system`) VALUES
(16, 'Bachelor of Science in Computer Science', 'First', '2025-2026', 3, 'COSC 75', 'Software Engineering II', 'Students', 'Software Engineering I', 'asdas', 'asdasd', 'asdas', 'asdas', 1, '0000-00-00', '2311-12-31', 'asdasdasdsa', 'asd', 'asd', 'zz', 'zz', 'zz', 'zzz', 'z', 'z', 'z', 'z', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 5, 'asdas', 'asdas', 'asdsa', 'asdas', 'asda', 'sda', '2222-02-22', 'asd', 'asdsa');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
