-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 01, 2018 at 05:33 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agular_application`
--

-- --------------------------------------------------------

--
-- Table structure for table `cms_product_categories`
--

CREATE TABLE `cms_product_categories` (
  `id` bigint(11) UNSIGNED NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `pid` bigint(20) DEFAULT NULL,
  `cat_image` varchar(200) NOT NULL,
  `lft` int(11) NOT NULL,
  `rgt` int(11) NOT NULL,
  `alias` varchar(200) NOT NULL,
  `category_title` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cms_product_categories`
--

INSERT INTO `cms_product_categories` (`id`, `category_name`, `pid`, `cat_image`, `lft`, `rgt`, `alias`, `category_title`) VALUES
(66, 'Fresh', 56, '', 0, 0, 'fresh', ''),
(54, 'Leafy Vegetables ', 48, '', 0, 0, 'leafy-vegetables', ''),
(46, 'Women Shoes', 45, '', 0, 0, 'women-shoes', 'Women Shoes'),
(47, 'Men Shoes', 45, '', 0, 0, 'men-shoes', 'Men Shoes'),
(63, 'Fruit Drinks & Juices', 59, '', 0, 0, 'fruit-drinks-and-juices', ''),
(56, 'Meat ', 0, '', 0, 0, 'meat', ''),
(57, 'Bakery', 0, '', 0, 0, 'bakery', ''),
(58, 'Grocery', 0, '', 0, 0, 'grocery', ''),
(59, 'Beverages', 0, '', 0, 0, 'beverages', ''),
(60, 'Desserts', 0, '', 0, 0, 'desserts', ''),
(61, 'Packed foods', 0, '', 0, 0, 'packed-foods', ''),
(62, 'foods', 61, '', 0, 0, 'foods', ''),
(64, 'Soft drink', 59, '', 0, 0, 'soft-drink', ''),
(53, 'Organic F&V', 48, '', 0, 0, 'organic-fandv', ''),
(48, 'Fruits and Vegetables', 0, '', 0, 0, 'fruits-and-vegetables', ''),
(49, 'Cut Fruits & Vegetables', 48, '', 0, 0, 'cut-fruits-and-vegetables', ''),
(50, 'F&V Combo', 48, '', 0, 0, 'fandv-combo', ''),
(51, 'Fruits ', 48, '', 0, 0, 'fruits', ''),
(52, 'Green House Vegetables', 48, '', 0, 0, 'green-house-vegetables', ''),
(45, 'Shoes', 0, '', 0, 0, 'shoes', 'Shoes'),
(67, 'Frozen', 56, '', 0, 0, 'frozen', ''),
(70, 'Dry fuits', 49, '', 0, 0, 'dryfruits', 'Dry Fruits'),
(71, 'test123', 70, '', 0, 0, 'test123', 'test123'),
(72, 'Raw Meat', 0, '', 0, 0, 'raw-meat', 'Raw Meat'),
(73, 'Chicken', 72, '', 0, 0, 'chicken', 'Chicken'),
(74, 'Mutton', 72, '', 0, 0, 'mutton', 'Mutton'),
(75, 'Fish', 72, '', 0, 0, 'fish', 'Fish'),
(76, 'Pork', 72, '', 0, 0, 'pork', 'Pork'),
(77, 'Beaf', 72, '', 0, 0, 'beaf', 'Beaf'),
(78, 'chic1', 73, '', 0, 0, 'chic1', 'chic1'),
(79, 'chic2', 73, '', 0, 0, 'chic2', 'chic2'),
(80, 'chic3', 73, '', 0, 0, 'chic3', 'chic3'),
(81, 'chic4', 80, '', 0, 0, 'chic4', 'chic4'),
(82, 'tuna', 75, '', 0, 0, 'tuna', 'tuna'),
(83, 'salmon', 75, '', 0, 0, 'salmon', 'salmon'),
(84, 'Peretta', 75, '', 0, 0, 'peretta', 'Peretta'),
(85, 'Shark', 75, '', 0, 0, 'shark', 'Shark'),
(86, 'beef1', 77, '', 0, 0, 'beef1', 'beef1'),
(87, 'beef32', 77, '', 0, 0, 'beef32', 'beef32'),
(88, 'pork1', 76, '', 0, 0, 'pork1', 'pork1'),
(89, 'mutton1', 74, '', 0, 0, 'mutton1', 'mutton1');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `category` int(11) NOT NULL,
  `status` varchar(10) NOT NULL,
  `userID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `category`, `status`, `userID`) VALUES
(12, 'Postnidea is programming blog on which you can browse tutorial on PHP, Msql, Ajax, Css, HTML as well as performance related.', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).11112222', 47, 'publish', 5),
(14, 'I have facing  flicker and flashing  in screen recorded video  with ubuntu 16.4 dell laptop 11', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 47, 'publish', 5);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(80) NOT NULL,
  `username` varchar(80) NOT NULL,
  `email` varchar(80) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `username`, `email`, `password`) VALUES
(1, 'Rakesh Kumar', 'rakesh', 'rakesh@mailinator.com', 'e10adc3949ba59abbe56e057f20f883e'),
(5, 'Mohan Kumar', 'mohan', 'mohan@mailinator.com', 'cf1e8c14e54505f60aa10ceb8d5d8ab3'),
(6, 'Rakesh Kumarr', 'rakesh123', 'rakesh123@mailinator.com', 'cf1e8c14e54505f60aa10ceb8d5d8ab3'),
(7, 'Raj Kumar', 'raj', 'raj@mailinator.com', 'cf1e8c14e54505f60aa10ceb8d5d8ab3'),
(8, 'test123', 'test123', 'test123@mailinator.com', 'cf1e8c14e54505f60aa10ceb8d5d8ab3'),
(9, 'test124', 'test124', 'test124@mailinator.com', 'cf1e8c14e54505f60aa10ceb8d5d8ab3'),
(10, 'test668', 'test668', 'test668@mailinator.com', 'cf1e8c14e54505f60aa10ceb8d5d8ab3'),
(11, 'Ganesh', 'ganesh', 'ganesh@mailinator.com', 'cf1e8c14e54505f60aa10ceb8d5d8ab3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cms_product_categories`
--
ALTER TABLE `cms_product_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cms_product_categories`
--
ALTER TABLE `cms_product_categories`
  MODIFY `id` bigint(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
