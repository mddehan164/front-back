-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2025 at 02:28 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `practise_auth`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `mobile`, `password`, `created_at`) VALUES
(1, 'Dehan', 'dehan@gmail.com', '01711111111', '$2b$10$nM6MYHAQHea8UWU2CDjI5OalTBHXB.VOW6p/x7W3FWXWlpMVfdkfC', '2025-07-16 10:47:16'),
(2, 'Ayesha', 'ayesha@gmail.com', '01722222222', '$2b$10$7bv9GdkPQAd/bJ455lPwqO3WFVzsMRWdYWkmi5O4n39UrZJbX6Qd6', '2025-07-16 10:47:16'),
(3, 'Rahim', 'rahim@gmail.com', '01733333333', '$2b$10$U61earBc3DTn0HrPdrrRmuvyBfsFBC4VMqdDKfpiDDf7heVXD5XjO', '2025-07-16 10:47:16'),
(4, 'Sadia', 'sadia@example.com', '01744444444', '$2b$10$C9b8SRPafK5NMj.5arHoQO3w3lRLSs/2ihuEhegS7qC0039FAp6Fu', '2025-07-16 10:47:16'),
(5, 'Tarek', 'tarek@example.com', '01755555555', '$2b$10$glYOu49a8erqevKAQGAhe.1ju4TnyxVq61x2ju7dIIVBMM7hCjyE6', '2025-07-16 10:47:16'),
(6, 'Mim', 'mim@example.com', '01766666666', '$2b$10$Gyqt3lXHKTck3FTckO9LlurZVqa/6vvwRUzoKIhRHPuAHILM0a41q', '2025-07-16 10:47:17'),
(7, 'Hasan', 'hasan@example.com', '01777777777', '$2b$10$doABfDMMs9VyUnEemqV2judqP/4Quk8MwL33J9A6HoqfWtVlHJ7Jy', '2025-07-16 10:47:17'),
(8, 'Nadia', 'nadia@example.com', '01788888888', '$2b$10$x3osGx8cpNTwVPjAYs0cDuq/yC6wVY9ywYdaKj4AKj3twtX16wdd6', '2025-07-16 10:47:17'),
(9, 'Rakib', 'rakib@example.com', '01799999999', '$2b$10$6tCFIwPCt85PbeZleJegy.X1tgrdMU.cXucxtXmxDGouLA/9JsVoG', '2025-07-16 10:47:17'),
(10, 'Jannat', 'jannat@example.com', '01800000000', '$2b$10$kSw28Mp4qiAgS7672aeIOecrWBbJdQtdbi7uJJLxFt5BeP.SuhRgu', '2025-07-16 10:47:17'),
(11, 'Ovi', 'ovi@example.com', '01811111111', '$2b$10$k3NkH4LJhuHAKzEOTp4oOOv2beHj5oZ2ZIl5X1w4aBT6cQv2gBJSa', '2025-07-16 10:47:17'),
(12, 'Mithila', 'mithila@example.com', '01822222222', '$2b$10$En/wsEMpPL2CLDUCDZ9pGung8nSPRMFlrWV7wx3WF/gsS4LXdq2qG', '2025-07-16 10:47:17'),
(13, 'Shuvo', 'shuvo@example.com', '01833333333', '$2b$10$XRy8LV9ic.MC3QlWUvXgVOm5mnO5TyptVwaYkvftp.AMJi2Edya1S', '2025-07-16 10:47:17'),
(14, 'md dehan', 'mddehan164@gmail.com', '01714368055', '$2b$10$ziugopq4Dhn7DtTChfaDp..DnoRiHxzjXoMdOuJL9Jt7VvZYVNy/e', '2025-07-16 10:47:18'),
(15, 'dehan', 'abc@gmail.com', '01714368056', '$2b$10$ssPSiCBUhbufrKh0DfZ9/eS4Oe44/74pRxpkMzXXTbSQGt3mRnG2q', '2025-07-16 10:40:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `mobile` (`mobile`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
