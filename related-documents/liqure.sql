-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 01, 2018 at 04:51 AM
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
-- Table structure for table `liqure`
--

CREATE TABLE `liqure` (
  `li_id` int(11) NOT NULL,
  `li_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `li_type` enum('Beer','Wine','Brandy','Whisky','Vodka','Arrack','Gin','Rum') COLLATE utf8_unicode_ci NOT NULL,
  `li_volume` float NOT NULL,
  `li_brand` enum('Local','Foreign') COLLATE utf8_unicode_ci NOT NULL,
  `li_year` varchar(4) COLLATE utf8_unicode_ci NOT NULL,
  `li_company` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `li_country` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `li_likes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `liqure`
--

INSERT INTO `liqure` (`li_id`, `li_name`, `li_type`, `li_volume`, `li_brand`, `li_year`, `li_company`, `li_country`, `li_likes`) VALUES
(1, 'Lion Lager', 'Beer', 4.8, 'Local', '1881', 'Lion Brewery', 'Sri Lanka', 3),
(2, 'Lion Strong', 'Beer', 8.8, 'Local', '1881', 'Lion Brewery', 'Sri Lanka', 12),
(3, 'Mendis Old Arrack', 'Arrack', 33.5, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(4, 'Mendis Premium Gold Label', 'Arrack', 33.5, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(5, 'Mendis Aged 18 Years', 'Arrack', 40, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(6, 'Mendis Deluxe Tripple Distilled', 'Arrack', 40, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(7, 'Mendis Empire Arrack (Mango)', 'Arrack', 33.5, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(8, 'Mendis Special Arrak', 'Arrack', 34.2, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(9, 'Mendis Original Arrack', 'Arrack', 33.5, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(10, 'Mendis Empire Arrack (Orange)', 'Arrack', 33.5, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(11, 'Mendis Empire Arrack (Strawberry)', 'Arrack', 33.5, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(12, 'Mendis Founder\'s Reserve', 'Arrack', 34, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(13, 'Mendis Deluxe White', 'Arrack', 33.5, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(14, 'Mendis Empire Batta', 'Arrack', 27, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(15, 'Mendis Red Label', 'Arrack', 30, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(16, 'Mendis Original White', 'Arrack', 33.5, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(17, 'Mendis Extra Special', 'Arrack', 0, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(18, 'Mendis Twenty 20', 'Arrack', 20, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(19, 'Mendis Barons Napolian', 'Brandy', 37.7, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(20, 'Mendis London Spice Dry Gin', 'Gin', 38, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(21, 'Mendis London Spice Lemon Gin', 'Gin', 38, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(22, 'Mendis Bacardi Carta Blance', 'Rum', 40, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(23, 'Mendis Eristoff Vodka', 'Vodka', 40, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(24, 'Mendis Blender\'s Choice Whisky', 'Whisky', 38, 'Local', '1947', 'Mendis', 'Sri Lanka', 0),
(25, 'Lion Stout', 'Beer', 8.8, 'Local', '1881', 'Lion Brewery', 'Sri Lanka', 0),
(26, 'Carlsberg', 'Beer', 4.8, 'Local', '1881', 'Lion Brewery', 'Sri Lanka', 0),
(27, 'Carlsberg Special Brew', 'Beer', 8.8, 'Local', '1881', 'Lion Brewery', 'Sri Lanka', 0),
(28, 'Ryders', 'Beer', 8.8, 'Local', '1881', 'Lion Brewery', 'Sri Lanka', 0),
(29, 'Grand Blonde (GB)', 'Beer', 8.8, 'Local', '1881', 'Lion Brewery', 'Sri Lanka', 0),
(30, 'Three Coins Lager', 'Beer', 4.8, 'Local', '1881', 'Lion Brewery', 'Sri Lanka', 0),
(31, 'Sando Power', 'Beer', 8.8, 'Local', '1881', 'Lion Brewery', 'Sri Lanka', 0),
(32, 'Sando Stout', 'Beer', 8.8, 'Local', '1881', 'Lion Brewery', 'Sri Lanka', 0),
(33, 'Anchor Strong', 'Beer', 8.8, 'Local', '1998', 'Heineken Lanka', 'Sri Lanka', 0),
(34, 'Anchor Smooth', 'Beer', 4, 'Local', '1998', 'Heineken Lanka', 'Sri Lanka', 0),
(35, 'ABC Stout', 'Beer', 7, 'Local', '1998', 'Heineken Lanka', 'Sri Lanka', 0),
(36, 'Barons Strong Brew', 'Beer', 8.8, 'Local', '1998', 'Heineken Lanka', 'Sri Lanka', 0),
(37, 'Barons Lager', 'Beer', 4.9, 'Local', '1998', 'Heineken Lanka', 'Sri Lanka', 0),
(38, 'Bison Super Strong', 'Beer', 8.8, 'Local', '1998', 'Heineken Lanka', 'Sri Lanka', 0),
(39, 'Tiger Black', 'Beer', 8.8, 'Local', '1998', 'Heineken Lanka', 'Sri Lanka', 0),
(40, 'Tiger Original', 'Beer', 5, 'Local', '1998', 'Heineken Lanka', 'Sri Lanka', 0),
(41, 'Heineken', 'Beer', 5, 'Local', '1998', 'Heineken Lanka', 'Sri Lanka', 0),
(42, 'IDL Old Arrack - with Carton', 'Arrack', 33.5, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(43, 'IDL OLD Reserve Arrack', 'Arrack', 34, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(44, 'IDL White Diamond Arrack', 'Arrack', 33.5, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(45, 'IDL White Diamond Green Apple', 'Arrack', 33.5, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(46, 'IDL White Diamond Lemon Arrack', 'Arrack', 33.5, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(47, 'IDL White Label Arrack', 'Arrack', 34, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(48, 'IDL Gold Label Premium Arrack', 'Arrack', 34, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(49, 'IDL Green Label Spiced Arrack', 'Arrack', 30, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(50, 'IDL Blue Sapphire with Carton', 'Arrack', 33.5, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(51, 'IDL Black Label Arrack', 'Arrack', 33.5, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(52, 'IDL Club 7', 'Arrack', 28, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(53, 'Ritz Brandy', 'Brandy', 37.7, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(54, 'Ritz Cherry Brandy', 'Brandy', 34, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(55, 'Royal Ascot Dry Gin', 'Gin', 39, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(56, 'Royal Ascot Lemon Gin', 'Gin', 39, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(57, 'Royal Ascot Orange Gin', 'Gin', 39, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(58, 'Calypso Gold Red Rum', 'Rum', 40, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(59, 'Calypso White Rum', 'Rum', 40, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(60, 'IDL Celebration Vodka', 'Vodka', 40, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(61, 'IDL V&A Whisky - with Carton', 'Whisky', 40, 'Local', '1980', 'International Distillers Limited (IDL)', 'Sri Lanka', 0),
(62, 'DCSL Extra Special', 'Arrack', 33.5, 'Local', '1913', 'Distilleries Company of Sri Lanka (PLC)', 'Sri Lanka', 0),
(63, 'DCSL Old Arrack', 'Arrack', 33.5, 'Local', '1913', 'Distilleries Company of Sri Lanka (PLC)', 'Sri Lanka', 0),
(64, 'DCSL White Label Arrack', 'Arrack', 34, 'Local', '1913', 'Distilleries Company of Sri Lanka (PLC)', 'Sri Lanka', 0),
(65, 'DCSL Double Distilled Arrack', 'Arrack', 36.8, 'Local', '1913', 'Distilleries Company of Sri Lanka (PLC)', 'Sri Lanka', 0),
(66, 'DCSL V.S.O.A. Premium', 'Arrack', 36.8, 'Local', '1913', 'Distilleries Company of Sri Lanka (PLC)', 'Sri Lanka', 0),
(67, 'DCSL Blue Label Arrack', 'Arrack', 0, 'Local', '1913', 'Distilleries Company of Sri Lanka (PLC)', 'Sri Lanka', 0),
(68, 'DCSL Black Opel', 'Arrack', 0, 'Local', '1913', 'Distilleries Company of Sri Lanka (PLC)', 'Sri Lanka', 0),
(69, 'Galerie Brandy', 'Brandy', 0, 'Local', '1913', 'Distilleries Company of Sri Lanka (PLC)', 'Sri Lanka', 0),
(70, 'Franklin Brandy', 'Brandy', 38, 'Local', '1913', 'Distilleries Company of Sri Lanka (PLC)', 'Sri Lanka', 0),
(71, 'Tillsider Whisky', 'Whisky', 0, 'Local', '1913', 'Distilleries Company of Sri Lanka (PLC)', 'Sri Lanka', 0),
(72, 'DCSL Sri Lanka Arrack', 'Arrack', 0, 'Local', '1913', 'Distilleries Company of Sri Lanka (PLC)', 'Sri Lanka', 0),
(73, 'DCSL Narikela Arrack', 'Arrack', 0, 'Local', '1913', 'Distilleries Company of Sri Lanka (PLC)', 'Sri Lanka', 0),
(74, 'DCSL Periceyl Apple Arrack', 'Arrack', 0, 'Local', '1913', 'Distilleries Company of Sri Lanka (PLC)', 'Sri Lanka', 0),
(75, 'DCSL Periceyl Mango Arrack', 'Arrack', 0, 'Local', '1913', 'Distilleries Company of Sri Lanka (PLC)', 'Sri Lanka', 0),
(76, 'Galerie Premium Brandy', 'Brandy', 40, 'Local', '1913', 'Distilleries Company of Sri Lanka (PLC)', 'Sri Lanka', 0),
(77, 'House of Tilbury Whisky', 'Whisky', 0, 'Local', '1913', 'Distilleries Company of Sri Lanka (PLC)', 'Sri Lanka', 0),
(78, 'Petroff Vodka', 'Vodka', 0, 'Local', '1913', 'Distilleries Company of Sri Lanka (PLC)', 'Sri Lanka', 0),
(79, 'Balmora Dark Rum', 'Rum', 0, 'Local', '1913', 'Distilleries Company of Sri Lanka (PLC)', 'Sri Lanka', 0),
(80, 'Balmora White Rum', 'Rum', 0, 'Local', '1913', 'Distilleries Company of Sri Lanka (PLC)', 'Sri Lanka', 0),
(81, 'ROK 3 Star Arrack', 'Arrack', 0, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(82, 'ROK 3 Star Black Label Arrack', 'Arrack', 0, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(83, 'ROK 3 Star Blue Arrack', 'Arrack', 0, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(84, 'ROK Ceylon Special Arrack', 'Arrack', 0, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(85, 'ROK Coconut Arrack', 'Arrack', 40, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(86, 'ROK Double Distilled Arrack', 'Arrack', 0, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(87, 'ROK Govenors Choice', 'Arrack', 33.9, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(88, 'ROK Halmilla Old Arrack', 'Arrack', 33.5, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(89, 'ROK King Edward', 'Arrack', 0, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(90, 'ROK Navy Seal', 'Arrack', 0, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(91, 'ROK Old Arrack Extra Special', 'Arrack', 34, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(92, 'ROK Old Arrack', 'Arrack', 29, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(93, 'ROK English Apple Arrack', 'Arrack', 0, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(94, 'ROK Premium Grape Arrack', 'Arrack', 33.5, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(95, 'ROK Tropical Mango Arrack', 'Arrack', 0, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(96, 'ROK Vat 9 Special Reserve', 'Arrack', 34, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(97, 'ROK VX Arrack (Vintage Xtra)', 'Arrack', 34.2, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(98, 'ROK Hanappier Brandy', 'Brandy', 38, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(99, 'ROK Dry Gin', 'Gin', 38, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(100, 'ROK Lemon Gin', 'Gin', 38.5, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(101, 'ROK White Rum', 'Rum', 38, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(102, 'ROK Dark Red Rum', 'Rum', 38, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(103, 'ROK Keruv Vodka', 'Vodka', 40, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(104, 'ROK Old Keg Whisky', 'Whisky', 38, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(105, 'ROK Old Keg Whisky Double Blend', 'Whisky', 0, 'Local', '1924', 'Rockland Distilleries (Pvt) Ltd', 'Sri Lanka', 0),
(106, 'Dewars Special Reserve (12 Years)', 'Whisky', 40, 'Foreign', '1846', 'Bacardi', 'Scotland', 0),
(107, 'Johnnie Walker Red Label', 'Whisky', 40, 'Foreign', '1820', 'Diageo', 'Scotland', 0),
(108, 'Johnnie Walker Black Label', 'Whisky', 40, 'Foreign', '1820', 'Diageo', 'Scotland', 0),
(109, 'Johnnie Walker Double Black Label', 'Whisky', 40, 'Foreign', '1820', 'Diageo', 'Scotland', 0),
(110, 'Vat 69 Whisky', 'Whisky', 0, 'Foreign', '1882', 'William Sanderson & Son Limited', 'Scotland', 0),
(111, 'E&J Brandy', 'Brandy', 0, 'Foreign', '1933', 'E & J Gallo Winery', 'USA', 0),
(112, 'Glenfiddich 18 Yrs', 'Whisky', 40, 'Foreign', '1887', 'The Glenfiddich Distillery', 'Scotland', 0),
(113, 'Paul Masson Chablis', 'Wine', 12, 'Foreign', '1905', 'Paul Masson Winery', 'USA', 0),
(114, 'Paul Masson Burgundy', 'Wine', 12, 'Foreign', '1905', 'Paul Masson Winery', 'USA', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `liqure`
--
ALTER TABLE `liqure`
  ADD PRIMARY KEY (`li_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `liqure`
--
ALTER TABLE `liqure`
  MODIFY `li_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
