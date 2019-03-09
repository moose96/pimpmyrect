-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 08 Mar 2019, 20:42
-- Wersja serwera: 5.7.14
-- Wersja PHP: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `pimpmyrect`
--
CREATE DATABASE IF NOT EXISTS `pimpmyrect` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `pimpmyrect`;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `rect`
--

CREATE TABLE `rect` (
  `ID` int(11) NOT NULL,
  `backgroundColor` char(7) NOT NULL,
  `width` smallint(6) NOT NULL,
  `height` smallint(6) NOT NULL,
  `borderRadius` smallint(6) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `rect`
--

INSERT INTO `rect` (`ID`, `backgroundColor`, `width`, `height`, `borderRadius`) VALUES
(1, '#ff0000', 100, 100, 10),
(2, '#ff80c0', 151, 152, 37),
(9, '#80ffff', 165, 166, 10),
(6, '#ffff80', 191, 167, 3),
(8, '#ff00ff', 100, 100, 24),
(13, '#ff0000', 100, 100, 39),
(15, '#ff0000', 400, 400, 10),
(16, '#000000', 151, 100, 10);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `rect`
--
ALTER TABLE `rect`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `rect`
--
ALTER TABLE `rect`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
