-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 28, 2013 at 10:41 AM
-- Server version: 5.5.24-log
-- PHP Version: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `reputationkahuna`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_company`
--

CREATE TABLE IF NOT EXISTS `tbl_company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `location` varchar(50) NOT NULL,
  `collected` varchar(50) NOT NULL,
  `posted` varchar(50) NOT NULL,
  `lastposted` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=101 ;

--
-- Dumping data for table `tbl_company`
--

INSERT INTO `tbl_company` (`id`, `name`, `location`, `collected`, `posted`, `lastposted`) VALUES
(1, 'Et Netus Industries', 'Tiel', '60', '96', '25/04/12'),
(2, 'Vestibulum Inc.', 'Gols', '41', '15', '12/04/11'),
(3, 'Proin Corporation', 'Millport', '56', '27', '25/12/12'),
(4, 'Mauris Magna Duis Corp.', 'Quispamsis', '55', '50', '12/11/10'),
(5, 'Pede Incorporated', 'Koblenz', '75', '15', '24/11/13'),
(6, 'Egestas Ltd', 'Gander', '98', '15', '22/04/12'),
(7, 'Ligula Aliquam Ltd', 'Friedberg', '87', '79', '19/12/11'),
(8, 'Nec Enim Nunc Industries', 'Vieux-Genappe', '6', '66', '10/07/11'),
(9, 'Pretium Aliquet Metus Foundation', 'Ville-en-Hesbaye', '9', '17', '19/02/12'),
(10, 'Mauris Vel LLC', 'Saint-Denis', '87', '95', '03/02/13'),
(11, 'Non Sollicitudin Corp.', 'Leernes', '2', '100', '21/06/11'),
(12, 'Suspendisse Tristique PC', 'Blumenau', '96', '52', '17/04/14'),
(13, 'Vestibulum Neque Ltd', 'Beert', '45', '49', '25/10/12'),
(14, 'Arcu Curabitur Institute', 'Tampa', '27', '53', '20/11/10'),
(15, 'Orci Phasellus Corp.', 'Ramsel', '85', '92', '27/08/12'),
(16, 'Dictum Eleifend Corp.', 'Oud-Turnhout', '47', '45', '10/12/13'),
(17, 'Nunc Quisque Ornare Foundation', 'Montbliart', '31', '87', '01/05/12'),
(18, 'Adipiscing Non Luctus Foundation', 'Buken', '19', '90', '11/12/13'),
(19, 'Magna PC', 'Rebecq', '9', '74', '13/11/11'),
(20, 'Augue Corporation', 'Corroy-le-Grand', '14', '5', '28/09/13'),
(21, 'Laoreet Limited', 'Huelva', '30', '90', '29/07/13'),
(22, 'Et Magna Industries', 'Huntley', '11', '89', '06/04/11'),
(23, 'Id Ante Inc.', 'Waver', '3', '77', '08/07/12'),
(24, 'Nisi Limited', 'Heist-aan-Zee', '79', '18', '10/09/10'),
(25, 'Dictum Eu Eleifend Ltd', 'Versailles', '10', '32', '23/07/11'),
(26, 'Dis Consulting', 'Bloxham', '73', '82', '06/10/12'),
(27, 'Mauris Elit Dictum LLP', 'Sint-Amandsberg', '60', '29', '03/12/13'),
(28, 'Donec Consectetuer Industries', 'Flensburg', '57', '66', '29/12/12'),
(29, 'Quam Pellentesque Institute', 'Kansas City', '23', '64', '16/08/11'),
(30, 'Nec Eleifend Corp.', 'Mission', '3', '64', '08/12/11'),
(31, 'Porta Elit Consulting', 'Troon', '52', '56', '07/07/11'),
(32, 'Litora Torquent Consulting', 'Les Bons Villers', '82', '87', '08/11/13'),
(33, 'Nec Associates', 'Thurso', '7', '79', '05/10/13'),
(34, 'Non Luctus Sit LLC', 'Donosti', '50', '68', '11/11/12'),
(35, 'Turpis Aliquam Limited', 'Poulseur', '56', '23', '25/09/12'),
(36, 'Eget Venenatis A Company', 'Lanester', '95', '30', '05/06/14'),
(37, 'Magna Nec Quam Associates', 'Buren', '67', '49', '06/04/13'),
(38, 'Dolor Tempus Non Industries', 'Kerkrade', '77', '70', '13/05/13'),
(39, 'Risus Corporation', 'Stroud', '65', '94', '12/12/10'),
(40, 'Vitae Erat Company', 'Liberchies', '19', '93', '04/06/11'),
(41, 'Tortor At Company', 'Snellegem', '38', '87', '12/06/14'),
(42, 'Pretium Et Rutrum Consulting', 'Cornwall', '76', '25', '24/06/11'),
(43, 'Donec Est Corp.', 'Neath', '36', '90', '06/01/11'),
(44, 'Elit Inc.', 'Hann', '19', '84', '27/07/13'),
(45, 'Amet Limited', 'Arviat', '2', '67', '02/08/13'),
(46, 'Tincidunt LLC', 'Bierc', '27', '41', '17/08/13'),
(47, 'Eu Odio Associates', 'Herenthout', '58', '10', '09/06/12'),
(48, 'Sed Inc.', 'Grand-Rosi', '17', '90', '12/08/11'),
(49, 'Nunc Sollicitudin Commodo Incorporated', 'Mont-Saint-Guibert', '23', '13', '26/06/11'),
(50, 'Ante Vivamus PC', 'Amberloup', '96', '15', '11/07/11'),
(51, 'Eu Turpis Incorporated', 'Rekem', '82', '67', '04/08/11'),
(52, 'At Company', 'Herne', '90', '82', '22/11/12'),
(53, 'Duis Volutpat Nunc Foundation', 'Bourges', '19', '4', '10/12/13'),
(54, 'Urna Ltd', 'Neustadt am R', '59', '24', '25/05/11'),
(55, 'Sapien Cras Dolor Institute', 'Kincardine', '32', '59', '06/01/12'),
(56, 'Lacus Ut Incorporated', 'Clarksville', '89', '83', '15/11/11'),
(57, 'Lectus Pede Inc.', 'Feldkirch', '64', '79', '25/10/12'),
(58, 'Nulla Vulputate Dui Industries', 'Des Moines', '45', '94', '29/03/13'),
(59, 'Arcu Consulting', 'Burdinne', '53', '82', '16/02/13'),
(60, 'Dis Associates', 'Calmar', '93', '84', '07/09/12'),
(61, 'Cras Vehicula Aliquet LLP', 'Bouffioulx', '14', '31', '23/07/12'),
(62, 'Euismod Corp.', 'Lochranza', '31', '53', '21/06/11'),
(63, 'Arcu Iaculis PC', 'Montluçon', '24', '74', '30/06/12'),
(64, 'Consequat Associates', 'Bensheim', '12', '27', '10/09/10'),
(65, 'Lectus Corporation', 'Kenosha', '11', '35', '10/11/10'),
(66, 'Ante Dictum LLC', 'Nijmegen', '92', '32', '04/10/12'),
(67, 'Justo Limited', 'Perwez', '27', '72', '14/03/12'),
(68, 'Orci LLP', 'Pepingen', '83', '29', '27/01/13'),
(69, 'Purus Duis Industries', 'Nieuwenrode', '22', '58', '02/01/14'),
(70, 'Duis Volutpat Nunc Limited', 'Olathe', '98', '98', '26/05/13'),
(71, 'Egestas Hendrerit Neque Corp.', 'Alert Bay', '35', '41', '12/10/10'),
(72, 'Libero Associates', 'Salon-de-Provence', '62', '82', '06/07/12'),
(73, 'Nec Euismod In Limited', 'Warwick', '14', '81', '05/02/11'),
(74, 'Ligula LLC', 'Anchorage', '17', '43', '29/08/13'),
(75, 'Nostra Institute', 'Holyhead', '92', '25', '28/11/10'),
(76, 'Auctor Mauris Vel Inc.', 'Bottrop', '97', '55', '10/02/12'),
(77, 'Magna Nam Corporation', 'Whyalla', '22', '20', '23/11/10'),
(78, 'Risus Nunc Ac Consulting', 'Wimborne Minster', '36', '5', '17/04/14'),
(79, 'Sollicitudin Company', 'North Vancouver', '58', '49', '16/11/13'),
(80, 'Nonummy Ultricies Foundation', 'Columbia', '28', '72', '22/06/14'),
(81, 'Vestibulum Corporation', 'Kerkrade', '29', '53', '17/02/12'),
(82, 'Nunc Quisque Ornare Incorporated', 'Burin', '14', '14', '03/06/11'),
(83, 'Curabitur LLC', '100 Mile House', '15', '26', '14/09/11'),
(84, 'Nec Luctus Felis Institute', 'Jamioulx', '96', '8', '08/02/13'),
(85, 'Arcu Vestibulum Company', 'Waiuku', '11', '85', '22/11/10'),
(86, 'Integer Incorporated', 'Machynlleth', '21', '17', '05/11/13'),
(87, 'Vivamus Sit Amet Institute', 'Warminster', '17', '23', '19/02/14'),
(88, 'Aliquam Erat Institute', 'Waidhofen an der Ybbs', '1', '53', '21/04/14'),
(89, 'Enim Nec Limited', 'Hamburg', '18', '43', '04/08/13'),
(90, 'Varius Ultrices Corporation', 'Kalgoorlie-Boulder', '44', '93', '03/05/13'),
(91, 'Dolor Industries', 'Westmeerbeek', '50', '19', '16/05/14'),
(92, 'Enim Non Corporation', 'Barrhead', '9', '26', '30/11/11'),
(93, 'Tincidunt Nibh Phasellus Institute', 'Oostkamp', '77', '89', '01/08/13'),
(94, 'A Auctor Non Institute', 'Temploux', '35', '49', '21/04/13'),
(95, 'Adipiscing Enim Mi Company', 'Missoula', '15', '32', '21/03/12'),
(96, 'Dolor Consulting', 'Mont-Saint-Guibert', '8', '100', '04/06/12'),
(97, 'Arcu Inc.', 'Sachs Harbour', '32', '43', '18/10/12'),
(98, 'Lacus Nulla Tincidunt LLC', 'Couillet', '49', '17', '24/05/14'),
(99, 'Mauris Ut Mi Ltd', 'Port Lincoln', '56', '32', '21/02/12'),
(100, 'Ac Arcu Nunc Industries', 'Onoz', '77', '43', '02/10/10');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
