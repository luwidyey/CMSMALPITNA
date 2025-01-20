-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2025 at 05:36 AM
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
(8, 368896300, 1238856301, '8');

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
(9, 'raizel', 'ken', 'pogi', 'kendiniay@gmail.com', '$2y$10$WXlJsA31T8NiSPsWRwpnn.Cm3DS3i47OZwQxkTYC.QZfvS/oLuhXu', 'student', '2025-01-20 01:41:50', 'uploads/raizel_1737337328.jpg', '2025-01-20', '09159421213', 'single', 368896300, 'Offline now'),
(10, 'frank', 'poncan', 'pogi', 'kendiniay21@gmail.com', '$2y$10$XKK/HVCcYhgAqIWU8y11ju1gJ.dmzZus.zmWt08Kg6YLSVPjI18Dy', 'student', '2025-01-20 01:44:35', 'uploads/frank_1737337529.jpg', '2025-01-20', '09159421214', 'single', 1238856301, 'Offline now'),
(11, 'ez', 'prof', 'ken', 'profken@gmail.com', '$2y$10$tFM1Hhx5HmEVO.rroJo.nuxp865LW8BOGCKAfW1GfcxOetv81Fev6', 'teacher', '2025-01-20 04:30:06', NULL, '2025-01-20', '09159421214', 'single', 186890223, NULL);

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
  MODIFY `msg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
