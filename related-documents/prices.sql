-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 01, 2018 at 04:52 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id3940083_moneymaker`
--

-- --------------------------------------------------------

--
-- Table structure for table `prices`
--

CREATE TABLE `prices` (
  `index_no` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `quentity` int(11) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `prices`
--

INSERT INTO `prices` (`index_no`, `id`, `quentity`, `price`) VALUES
(1, 2, 330, 170),
(2, 2, 500, 280),
(3, 2, 625, 280),
(4, 3, 180, 400),
(5, 3, 375, 800),
(6, 3, 750, 1450),
(7, 4, 180, 420),
(8, 4, 375, 850),
(9, 4, 750, 1500),
(10, 5, 700, 8000),
(11, 6, 750, 2500),
(12, 7, 750, 1700),
(13, 8, 375, 850),
(14, 8, 750, 1650),
(15, 9, 180, 360),
(16, 9, 375, 750),
(17, 9, 750, 1450),
(18, 10, 750, 1400),
(19, 11, 750, 1700),
(20, 12, 375, 1000),
(21, 12, 750, 2000),
(22, 13, 750, 1550),
(23, 14, 180, 300),
(26, 15, 180, 320),
(27, 15, 375, 650),
(28, 15, 750, 1420),
(29, 16, 180, 380),
(30, 16, 375, 800),
(31, 16, 750, 1600),
(32, 17, 180, 350),
(33, 18, 180, 250),
(34, 19, 180, 550),
(35, 19, 375, 1050),
(36, 19, 750, 2000),
(37, 20, 750, 2300),
(38, 21, 375, 1200),
(39, 21, 750, 2300),
(40, 22, 750, 2900),
(41, 23, 750, 2400),
(42, 24, 375, 1200),
(43, 24, 750, 2300),
(44, 1, 330, 100),
(45, 1, 500, 160),
(46, 1, 625, 160),
(47, 25, 330, 190),
(48, 25, 500, 300),
(49, 25, 625, 300),
(50, 26, 330, 120),
(51, 26, 500, 190),
(52, 26, 640, 190),
(53, 27, 500, 320),
(54, 27, 640, 320),
(55, 28, 330, 220),
(56, 28, 500, 300),
(57, 29, 500, 280),
(58, 29, 625, 280),
(59, 30, 625, 160),
(60, 31, 330, 150),
(61, 31, 500, 250),
(62, 31, 625, 250),
(63, 32, 330, 120),
(64, 32, 625, 320),
(65, 33, 330, 170),
(66, 33, 500, 280),
(67, 33, 625, 280),
(68, 34, 330, 100),
(69, 34, 500, 160),
(70, 34, 625, 160),
(71, 35, 500, 300),
(72, 35, 625, 300),
(73, 36, 500, 300),
(74, 36, 625, 300),
(75, 38, 330, 170),
(76, 38, 500, 280),
(77, 38, 625, 280),
(78, 39, 500, 320),
(79, 39, 640, 320),
(80, 40, 330, 120),
(81, 40, 500, 190),
(82, 40, 640, 200),
(83, 41, 330, 550),
(84, 42, 180, 460),
(85, 42, 375, 870),
(86, 42, 750, 1650),
(87, 43, 375, 1070),
(88, 43, 750, 2040),
(89, 44, 375, 990),
(90, 44, 750, 1730),
(91, 45, 180, 550),
(92, 45, 375, 1000),
(93, 45, 750, 1770),
(94, 46, 375, 1000),
(95, 46, 750, 1770),
(96, 47, 180, 410),
(97, 47, 375, 800),
(98, 47, 750, 1530),
(99, 48, 375, 1020),
(100, 48, 750, 1900),
(101, 49, 180, 340),
(102, 49, 375, 690),
(103, 49, 750, 1330),
(104, 50, 180, 460),
(105, 50, 375, 890),
(106, 50, 750, 1700),
(107, 51, 180, 390),
(108, 51, 375, 820),
(109, 51, 750, 1550),
(110, 52, 180, 300),
(111, 52, 375, 650),
(112, 52, 750, 1230),
(113, 53, 180, 600),
(114, 53, 375, 1100),
(115, 53, 750, 2050),
(116, 54, 375, 1270),
(117, 54, 750, 2250),
(118, 55, 180, 700),
(119, 55, 375, 1280),
(120, 55, 750, 2330),
(121, 56, 180, 700),
(122, 56, 375, 1280),
(123, 56, 750, 2330),
(124, 57, 375, 1150),
(125, 57, 750, 2170),
(126, 58, 180, 700),
(127, 58, 375, 1250),
(128, 58, 750, 2400),
(129, 59, 375, 1250),
(130, 59, 750, 2400),
(131, 60, 180, 620),
(132, 60, 375, 1330),
(133, 60, 750, 2450),
(134, 61, 180, 620),
(135, 61, 375, 1320),
(136, 61, 750, 2320),
(137, 62, 180, 400),
(138, 62, 375, 800),
(139, 62, 750, 1570),
(140, 63, 375, 920),
(141, 63, 750, 1730),
(142, 64, 180, 430),
(143, 64, 375, 840),
(144, 64, 750, 1610),
(145, 65, 375, 990),
(146, 65, 750, 1890),
(147, 66, 375, 990),
(148, 66, 750, 1890),
(149, 67, 375, 820),
(150, 67, 750, 1580),
(151, 68, 180, 470),
(152, 68, 375, 890),
(153, 68, 750, 1710),
(154, 69, 375, 1280),
(155, 69, 750, 2420),
(156, 70, 375, 1100),
(157, 70, 750, 2050),
(158, 71, 375, 1180),
(159, 71, 750, 2180),
(160, 72, 750, 2090),
(161, 73, 750, 1730),
(162, 74, 375, 860),
(163, 74, 750, 1630),
(164, 75, 375, 860),
(165, 75, 750, 1630),
(166, 76, 750, 2890),
(167, 77, 750, 2480),
(168, 78, 375, 1080),
(169, 78, 750, 2110),
(170, 79, 750, 2100),
(171, 80, 750, 2100),
(172, 81, 180, 390),
(173, 81, 375, 780),
(174, 81, 750, 1500),
(175, 82, 180, 390),
(176, 82, 375, 820),
(177, 82, 750, 1550),
(178, 83, 180, 300),
(179, 83, 375, 630),
(180, 84, 700, 7120),
(181, 85, 375, 780),
(182, 85, 750, 1550),
(183, 86, 375, 980),
(184, 86, 750, 1860),
(185, 87, 375, 900),
(186, 87, 750, 1720),
(187, 88, 375, 900),
(188, 88, 750, 1700),
(189, 89, 375, 750),
(190, 89, 750, 1490),
(191, 90, 375, 800),
(192, 90, 750, 1540),
(193, 91, 375, 900),
(194, 91, 750, 1720),
(195, 92, 375, 890),
(196, 92, 750, 1680),
(197, 93, 375, 930),
(198, 93, 750, 1720),
(199, 94, 375, 930),
(200, 94, 750, 1720),
(201, 95, 375, 930),
(202, 95, 750, 1720),
(203, 96, 750, 2160),
(204, 97, 375, 990),
(205, 97, 750, 1900),
(206, 98, 180, 560),
(207, 98, 375, 1080),
(208, 98, 750, 2170),
(209, 99, 375, 1340),
(210, 99, 750, 2460),
(211, 100, 375, 1340),
(212, 100, 750, 2460),
(213, 101, 180, 770),
(214, 101, 375, 1350),
(215, 101, 750, 2600),
(216, 102, 180, 770),
(217, 102, 375, 1350),
(218, 102, 750, 2600),
(219, 103, 375, 1480),
(220, 103, 750, 2860),
(221, 104, 180, 620),
(222, 104, 375, 1320),
(223, 104, 750, 2300),
(224, 105, 375, 1350),
(225, 105, 750, 2380),
(226, 106, 750, 9015),
(227, 107, 750, 7590),
(228, 108, 750, 11510),
(229, 109, 750, 13310),
(230, 110, 750, 5880),
(231, 111, 750, 4200),
(232, 112, 700, 23880),
(233, 113, 1000, 1860),
(234, 114, 1000, 1860);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`index_no`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `prices`
--
ALTER TABLE `prices`
  MODIFY `index_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=235;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `prices`
--
ALTER TABLE `prices`
  ADD CONSTRAINT `prices_ibfk_1` FOREIGN KEY (`id`) REFERENCES `liqure` (`li_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
