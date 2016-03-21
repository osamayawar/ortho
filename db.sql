-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Mar 21, 2016 at 05:12 PM
-- Server version: 5.5.38
-- PHP Version: 5.5.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `dentist`
--

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
`id` int(11) NOT NULL,
  `registration_number` varchar(255) NOT NULL,
  `initials` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `dob` varchar(255) NOT NULL,
  `marital_status` varchar(255) NOT NULL,
  `cell` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `occupation` varchar(255) NOT NULL,
  `reason_of_visit` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `registration_number`, `initials`, `first_name`, `last_name`, `gender`, `dob`, `marital_status`, `cell`, `phone`, `email`, `address`, `occupation`, `reason_of_visit`) VALUES
(1, '1458530604', 'Mr', 'Osama', 'Yawar', 'Male', '1988-05-10T03:23:24.751Z', 'Single', '4389950401', '43899550401', 'Business', '1950, Lincoln Avenue', 'Business', 'Cleansing'),
(2, '1458530888', 'Mr', 'Osama', 'asas', 'Male', '2016-03-21T03:28:08.108Z', 'Single', '1212', '1212', 'Business', 'aasa', 'Business', 'asas'),
(3, '1458530888', 'Mr', 'Osama', 'asas', 'Male', '2016-03-21T03:28:08.108Z', 'Single', '1212', '1212', 'Business', 'aasa', 'Business', 'asas'),
(4, '1458530888', 'Mr', 'Osama', 'asas', 'Male', '2016-03-21T03:28:08.108Z', 'Single', '1212', '1212', 'Business', 'aasa', 'Business', 'asas'),
(5, '1458531237', 'Mr', 'asas', 'asas', 'Male', '2016-03-21T03:33:57.168Z', 'Single', '1212', '12', 'Business', 'asas', 'Business', 'asas'),
(6, '1458531414', 'Mr', 'asas', 'asas', 'Male', '2016-03-21T03:36:54.488Z', 'Single', '1212', '1212', 'Business', 'asas', 'Business', 'asas'),
(7, '1458531512', 'Mr', 'asas', 'asas', 'Male', '2016-03-21T03:38:32.165Z', 'Single', '1212', '1212a', 'Business', 'asas', 'Business', 'asasas');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;