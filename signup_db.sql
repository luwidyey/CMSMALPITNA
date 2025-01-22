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
-- Database: `signup_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `msg_id` int(11) NOT NULL,
  `incoming_msg_id` int(255) NOT NULL,
  `outgoing_msg_id` int(255) NOT NULL,
  `msg` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`msg_id`, `incoming_msg_id`, `outgoing_msg_id`, `msg`) VALUES
(1, 1238856301, 368896300, '1'),
(2, 368896300, 1238856301, '2'),
(3, 1238856301, 368896300, '3'),
(4, 368896300, 1238856301, '4'),
(5, 1238856301, 368896300, '5'),
(6, 368896300, 1238856301, '6'),
(7, 1238856301, 368896300, '7'),
(8, 368896300, 1238856301, '8'),
(9, 1238856301, 941350510, 'wassup ninja saga'),
(10, 136671744, 619410676, 'hoy'),
(11, 136671744, 619410676, 'magpasa ka na'),
(12, 368896300, 619410676, 'asdasd'),
(13, 368896300, 619410676, 'asdasdas'),
(14, 619410676, 368896300, 'asdasdasdsa'),
(15, 145971776, 1161066860, 'kupal'),
(16, 619410676, 1161066860, 'kupal'),
(17, 1161066860, 619410676, 'kupal'),
(18, 368896300, 186890223, 'tanina mo');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('student','teacher') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `profile_picture` varchar(255) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `contact` varchar(11) NOT NULL,
  `civil_status` enum('single','married','separated','widowed') NOT NULL,
  `unique_id` int(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `first_name`, `last_name`, `email`, `password`, `role`, `created_at`, `profile_picture`, `birth_date`, `contact`, `civil_status`, `unique_id`, `status`) VALUES
(9, 'raizel', 'ken', 'pogi', 'kendiniay@gmail.com', '$2y$10$WXlJsA31T8NiSPsWRwpnn.Cm3DS3i47OZwQxkTYC.QZfvS/oLuhXu', 'student', '2025-01-20 01:41:50', 'uploads/raizel_1737337328.jpg', '2025-01-20', '09159421213', 'single', 368896300, 'Active now'),
(11, 'ez', 'prof', 'ken', 'profken@gmail.com', '$2y$10$tFM1Hhx5HmEVO.rroJo.nuxp865LW8BOGCKAfW1GfcxOetv81Fev6', 'teacher', '2025-01-20 04:30:06', 'uploads/ez_1737385671.png', '2025-01-20', '09159421214', 'single', 186890223, 'Offline now'),
(13, 'tank', 'asdasd', 'asdas', 'louie.jay024@gmail.com', '$2y$10$VLw3WVjaR5/cfOjYXTPU9Osoz.cDsTd0bhdc4HFxO4diI7DfJRFeK', 'student', '2025-01-20 11:07:25', NULL, '2000-02-20', '09545645645', 'single', 100570100, NULL),
(15, 'qwerty', 'louie', 'lasdasdas', 'afsajdas@gmail.com', '$2y$10$VU8rvqC6l2jqbIKHV2tdP.YStZgLoTG94POy7P5ENesz8tixFUk.i', 'student', '2025-01-21 13:52:26', 'uploads/qwerty_1737467564.png', '2022-02-20', '09159421214', 'single', 619410676, 'Offline now'),
(16, 'qwerty1', 'xxxxxxxxxxx', 'zzzzzzzzzzz', 'ey@gmail.com', '$2y$10$RaLMOVZ1sFHiYkrGm5LdPuxyT1ZND7UznITzU6Q7wlY5W0LmnR8G.', 'student', '2025-01-21 14:21:29', 'uploads/qwerty1_1737469344.png', '2312-12-22', '23213213213', 'single', 1161066860, 'Offline now'),
(17, 'qwerty2', 'zzzzzzzzz', 'xddddddddddddddddddas', 'asdsdsa@gmail.com', '$2y$10$5K0Ur9oog/PntxxQsE1DvOpjHe1K38Ot6hGEOrBiOMcE8WmUkdFl2', 'teacher', '2025-01-21 14:21:53', 'uploads/qwerty2_1737469443.png', '1232-03-22', '09542121312', 'married', 145971776, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`msg_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `msg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
