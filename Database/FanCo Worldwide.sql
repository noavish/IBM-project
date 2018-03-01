CREATE DATABASE  IF NOT EXISTS `fanco` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `fanco`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fanco
-- ------------------------------------------------------
-- Server version	5.7.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `channels`
--

DROP TABLE IF EXISTS `channels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `channels` (
  `channel_id` int(11) NOT NULL AUTO_INCREMENT,
  `Channel` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`channel_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `channels`
--

LOCK TABLES `channels` WRITE;
/*!40000 ALTER TABLE `channels` DISABLE KEYS */;
INSERT INTO `channels` VALUES (1,'Direct Sales'),(2,'Retail');
/*!40000 ALTER TABLE `channels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pricing`
--

DROP TABLE IF EXISTS `pricing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pricing` (
  `item_id` int(11) NOT NULL,
  `Product_id` int(11) NOT NULL,
  `SKU_id` int(11) NOT NULL,
  `Channel_id` int(11) NOT NULL,
  `item_revenue` decimal(12,2) DEFAULT NULL,
  PRIMARY KEY (`item_id`),
  KEY `Product_id_index` (`Product_id`),
  KEY `SKU_id_index` (`SKU_id`),
  KEY `Channel_id_index` (`Channel_id`),
  CONSTRAINT `channel_id` FOREIGN KEY (`Channel_id`) REFERENCES `channels` (`channel_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `product_id` FOREIGN KEY (`Product_id`) REFERENCES `products` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `sku_id` FOREIGN KEY (`SKU_id`) REFERENCES `sku` (`sku_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pricing`
--

LOCK TABLES `pricing` WRITE;
/*!40000 ALTER TABLE `pricing` DISABLE KEYS */;
INSERT INTO `pricing` VALUES (1,1,1,1,14.99),(2,1,1,2,8.94),(3,1,2,1,11.99),(4,1,2,2,6.59),(5,1,3,1,11.99),(6,1,3,2,6.59);
/*!40000 ALTER TABLE `pricing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `Product_name` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'FanCo. Classic');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sales` (
  `day_sales_id` varchar(45) NOT NULL,
  `date` date DEFAULT NULL,
  `time_zone` varchar(45) DEFAULT NULL,
  `time` time(6) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `sales_count` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`day_sales_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES ('01b2c340-5267-4de9-a65b-2736d7b7c0cf','2017-04-27','Europe/Paris','16:34:25.000000','France','Carcassonne','92033'),('02a86700-69e5-4104-915e-a5590d90fee2','2017-02-25','Europe/Lisbon','16:26:23.000000','Portugal','Senhor da Serra','49682'),('046ca40e-60b4-477c-93a8-4d1c7538fad4','2016-04-22','America/Bahia','15:00:54.000000','Brazil','Jaguaquara','4607'),('0c7c53cc-573e-4471-b906-0d04e872d9ef','2017-06-25','America/Lima','16:33:10.000000','Peru','Punta Hermosa','53113'),('12e80485-68ef-4e79-9226-5e9196d007c7','2017-03-20','Africa/Kampala','12:38:15.000000','Uganda','Entebbe','84213'),('17e42de9-348e-438c-a109-8d2a7bdc62a1','2017-07-24','Pacific/Honolulu','10:21:10.000000','United States','Honolulu','20977'),('18eb5d40-10c2-4030-92dd-5f55febce7f7','2017-06-05','Europe/Uzhgorod','00:15:57.000000','Ukraine','Belz','5802'),('1a4bc429-3152-498e-a9c2-6d13bc42c1c8','2016-07-24','Asia/Manila','11:46:43.000000','Philippines','Maloco','98671'),('1d49b336-a8ed-4642-a58f-15ca91f707fb','2017-08-06','Asia/Chongqing','03:30:07.000000','China','Ganping','96557'),('1fbb5127-c4e4-44ad-9982-978ad1fcd37d','2017-06-22','Europe/Paris','14:30:02.000000','France','Levallois-Perret','65137'),('203b943f-5991-4164-baa4-5954c9e495f6','2016-09-21','Europe/Moscow','13:42:43.000000','Russia','Donskoye','28128'),('2054960c-ec58-426b-8dbb-64a9633c7eaa','2017-09-13','Europe/Amsterdam','22:26:31.000000','Netherlands','Leidschendam','76412'),('2293ad9f-910c-42a7-be92-6e34237f15f1','2016-08-28','Africa/Lagos','02:36:54.000000','Nigeria','Yenagoa','88328'),('230bc8c5-3668-4d83-818f-96b72eefa4d5','2017-04-02','Europe/London','20:35:44.000000','United Kingdom','Glasgow','43621'),('25813820-e3d9-4138-804b-1c9d2d41364c','2016-06-13','Europe/Moscow','13:26:38.000000','Russia','Imeni Babushkina','30057'),('26eb7304-ba2d-47f1-8fe1-929d77a2bff4','2016-06-06','Europe/Stockholm','08:19:27.000000','Sweden','Visby','82798'),('2a299e8c-0f73-489a-9369-b2d46bc78744','2016-07-10','America/Montreal','01:06:57.000000','Canada','Val-d\'Or','61631'),('2c68ef58-d185-4279-b5a0-418eddd12a8e','2017-02-27','Asia/Jakarta','17:54:12.000000','Indonesia','Gadon','53271'),('2c80662c-7a02-43f2-bc1a-92b67bf0f566','2017-01-28','America/Montevideo','12:39:23.000000','Uruguay','San Ramón','193'),('31e5b168-d761-4efe-af4e-445f4e5d9108','2016-01-23','Europe/Oslo','17:28:02.000000','Norway','Oslo','27617'),('357c88ae-ff6b-406a-9be0-292ed9edae25','2016-12-08','Asia/Chongqing','07:10:33.000000','China','Shuangmiaojie','90107'),('36464e1e-fa57-4e8e-9652-2c74f751d2e8','2016-05-29','Europe/Stockholm','10:31:19.000000','Sweden','Stockholm','85841'),('3754d999-e5e9-475a-bf11-2c4ce9b8921f','2017-07-20','Europe/Prague','08:42:46.000000','Czech Republic','Zvole','55059'),('39829a6b-9c19-4c44-9b7c-b982c377c5ec','2017-10-24','Asia/Shanghai','04:02:58.000000','China','Yongping','50936'),('3a69e93a-82d7-4fe1-8dd4-057576f07c70','2016-08-29','Europe/Lisbon','05:52:10.000000','Portugal','Capela','41633'),('3ff80fbc-d69e-4d11-bc70-a515f618b04e','2016-08-02','America/Bogota','11:32:20.000000','Colombia','Montenegro','50299'),('412b60f0-8dd6-461f-93ac-8fd6f1bb998b','2016-02-16','Asia/Jakarta','17:16:27.000000','Indonesia','Susunan','30059'),('428e0a69-1fcb-461d-a419-0940e6ec2628','2016-08-23','America/Sao_Paulo','12:12:13.000000','Brazil','Monte Alto','30204'),('430ab11b-394f-4b1b-bfee-e1d5281d8553','2016-12-28','Asia/Makassar','17:19:43.000000','Indonesia','Terong','6405'),('4432c398-5d83-4ff8-8765-1f262c4c2626','2016-06-22','Europe/Belgrade','11:54:25.000000','Kosovo','Obiliq','19874'),('44f86f18-ad50-480b-bc28-4027e6de193c','2017-04-16','Africa/Gaborone','13:25:19.000000','Botswana','Francistown','81860'),('4784126c-9652-402d-b911-8fce89297708','2016-07-27','America/Bogota','22:19:42.000000','Colombia','Quinchía','19510'),('51b4929b-f607-446d-bce8-3a05e72d762e','2017-02-28','Europe/Dublin','17:38:38.000000','Ireland','Charlesland','45766'),('52921543-3f82-48b4-aa54-9999ae8830b4','2016-03-19','Asia/Dubai','06:48:08.000000','United Arab Emirates','Al Ain','28597'),('554b4a69-9b27-42a5-976d-f75771f87a53','2016-05-29','Europe/Athens','22:49:00.000000','Greece','Gérakas','15415'),('57e6951e-c7eb-491e-9bce-1e9c9bd0ce3e','2017-12-08','Asia/Chongqing','13:35:22.000000','China','Guzhen','43550'),('59e918e8-eccd-4f91-a847-24d38217c8f4','2016-04-08','Europe/Lisbon','09:05:38.000000','Portugal','Quintela','30562'),('63ef9507-60c3-401a-b013-010cc4fc3e1e','2016-11-18','Europe/Warsaw','07:24:45.000000','Poland','Września','12939'),('64b4e773-bda9-4c30-bf4e-2f53e8de0c41','2016-12-13','Europe/Lisbon','19:14:00.000000','Portugal','Barra Cheia','29183'),('64d4f3de-cdad-4514-817a-6c639f0dacaf','2016-02-13','America/Anchorage','19:23:31.000000','Russia','Lorino','93255'),('68bf55fe-620c-41e3-a09f-5d0d55a061a9','2016-03-09','Europe/Helsinki','07:41:20.000000','Finland','Turku','30643'),('6961d702-b8e4-45b3-80e8-6420137d31a3','2017-12-16','Asia/Harbin','03:23:17.000000','China','Shuangyang','35329'),('6a3c49c2-1eaa-4856-a0b5-df8c1d0cf9a9','2016-02-02','Europe/Monaco','18:13:28.000000','Monaco','Moneghetti','3782'),('6b4f2ae6-599b-42c4-8bf8-9a532fac40cd','2017-06-23','Asia/Shanghai','08:35:55.000000','China','Gaozhou','39075'),('6c340421-f1dd-4def-a08d-f810d0d1b7de','2016-04-19','America/Lima','11:38:32.000000','Peru','Pilpichaca','54845'),('6c59218b-0ddf-40c0-a166-eec99068e1f8','2017-05-20','Asia/Jakarta','19:29:40.000000','Indonesia','Kurungannyawa','32313'),('6d024172-17a5-4dc9-abcc-e5085dedd6d9','2017-04-02','Asia/Makassar','14:30:54.000000','Indonesia','Bebae','26163'),('6d954d5d-4ea3-4ece-bbc2-3e9afcbb7318','2016-03-28','Asia/Makassar','16:44:13.000000','Indonesia','Ponggeok','18644'),('70ce978c-f0ae-4947-8920-2854cf9d6723','2016-03-19','Asia/Karachi','10:44:28.000000','Pakistan','Jāmpur','66685'),('73a52c79-4ca7-436b-a111-58defbf6aed9','2016-01-23','America/Costa_Rica','12:16:21.000000','Costa Rica','Bejuco','80984'),('79064a9d-3dab-4408-bbb7-607d2de43fa6','2016-07-07','Asia/Bishkek','10:54:56.000000','Kyrgyzstan','Belovodskoye','47443'),('7c2a60d1-440a-49b8-b6f2-2207d187e098','2016-12-09','Asia/Shanghai','00:52:07.000000','China','Mayingzhuang','38542'),('801457af-c1d3-4c8f-9138-4d29d5574da0','2017-07-09','Europe/Stockholm','21:10:28.000000','Sweden','Kalmar','64945'),('8221cff4-9af8-40b7-89da-42464e39fb30','2017-08-14','Europe/Stockholm','05:30:53.000000','Sweden','Örebro','35911'),('85a8e772-9d76-4b6b-a0de-e500f0fcde5d','2017-08-07','America/Lima','00:32:50.000000','Peru','Lagunas','46709'),('86365162-d938-46ec-a595-0bb8da139915','2017-12-11','Europe/Athens','14:23:25.000000','Greece','Drosáto','50452'),('882e2309-0802-494f-a067-5069e243ff19','2016-04-18','America/Guatemala','08:36:22.000000','Guatemala','Cuyotenango','7045'),('898d203f-7962-4f77-b853-0230f8653ffe','2017-02-01','Asia/Jakarta','20:05:55.000000','Indonesia','Karamat','19613'),('90cccfad-6f76-4308-9b88-8f0c8d4b2890','2017-12-11','Europe/Rome','21:16:37.000000','Italy','Trieste','93130'),('9a08c309-314a-4418-9ebc-7612f2b366df','2017-10-30','Africa/Harare','04:36:08.000000','Zimbabwe','Chimanimani','58717'),('9c0696fc-a1e8-43f2-9e16-c299e6f9256e','2016-04-23','Asia/Jakarta','23:20:25.000000','Indonesia','Ciketak','31390'),('9e0e54d9-d03d-4d62-a375-9cc37975c773','2017-06-16','Europe/Sarajevo','18:36:07.000000','Bosnia and Herzegovina','Svojat','9305'),('a7dc5447-c270-47ca-8c07-fc7cc0976862','2016-09-03','Asia/Jakarta','00:22:09.000000','Indonesia','Pulosari','67037'),('a84b1f84-ecd1-40d0-98cb-bc561f0dd39f','2017-04-24','Asia/Jakarta','14:49:47.000000','Indonesia','Kawungsari','52914'),('aaa40518-c1cc-4e7c-ba67-bf22d5b7df73','2016-03-06','Europe/Paris','19:59:22.000000','France','Beaune','8247'),('ae086a7f-841a-4443-af73-ba0d502c6d8a','2016-01-27','Asia/Tehran','16:40:22.000000','Iran','Khorramābād','67608'),('b36f852d-b4ce-444e-8f8f-cd3cbd6a1465','2017-06-30','Europe/Berlin','13:07:33.000000','Germany','Aachen','85545'),('bc162b7a-5a38-4a78-b7ae-e8aa787a2e3d','2017-04-03','Europe/Warsaw','22:11:14.000000','Poland','Dziewin','76801'),('bec0bebc-b553-4c4e-b2a5-62f645e55142','2017-05-29','Europe/Lisbon','14:22:36.000000','Portugal','Pereiros','3415'),('bedf21b7-1d4e-4374-a795-234dd5a3a2d4','2016-03-01','America/Lima','12:49:31.000000','Peru','San Miguel de Cauri','97412'),('bf293651-8134-44bc-ba3f-830141b1f040','2017-05-27','Asia/Harbin','18:08:07.000000','China','Du’ermenqin','98616'),('c1649c66-12af-40d7-8d22-dd90e8c18d0d','2016-02-10','Europe/Moscow','10:20:22.000000','Russia','Ostrogozhsk','6053'),('c3b4464b-f222-4c00-b38b-9a578d01b600','2016-08-14','Atlantic/Stanley','06:18:47.000000','Falkland Islands','Stanley','6624'),('c595e4c5-9c0e-4009-90b5-aed4ab1b233b','2016-05-06','Europe/Vilnius','21:17:01.000000','Lithuania','Eiguliai','72838'),('c5a51249-b0f0-4d85-bfa4-ed10d352b801','2016-12-21','America/Bogota','11:41:21.000000','Colombia','Chimichagua','25103'),('c5ed8aa6-f5cb-41e1-b754-322cbd62d6fc','2016-03-29','Europe/Prague','07:55:00.000000','Czech Republic','Ledeč nad Sázavou','91952'),('c803de56-3d14-4523-9dd5-3217ead5c8eb','2016-01-06','Asia/Chongqing','12:52:45.000000','China','Shanhe','27906'),('c81097be-a3e8-43fc-9977-6e3796d891f7','2017-12-11','Africa/Lagos','06:19:08.000000','Nigeria','Sankera','7454'),('c92e27c6-c928-4c8c-a540-a18fbc015f5b','2016-09-21','Europe/Athens','08:21:07.000000','Greece','Zipárion','22925'),('cbba255f-5525-481d-b0bc-fd273485c642','2017-07-18','America/Sao_Paulo','05:39:08.000000','Brazil','Rio Bonito','48523'),('cf0ef43a-1e00-42dc-93a4-d4ca1dce979c','2016-08-12','Asia/Kuala_Lumpur','17:26:19.000000','Malaysia','Kuantan','8266'),('cf635151-ce77-47e7-a0a1-552761cb7642','2016-04-09','Europe/Moscow','13:43:32.000000','Russia','Zhiryatino','71216'),('cf69ad29-9ac3-469b-8cfa-557264c94c8d','2016-12-22','Asia/Urumqi','07:16:02.000000','China','Suzhou','78908'),('d24b1a2b-33cf-478e-9d84-ba9019644619','2017-07-25','Asia/Chongqing','17:42:08.000000','China','Jinbo','35659'),('d2637cda-9c17-4afb-be4e-d1f096f44924','2016-05-31','Asia/Bangkok','23:30:24.000000','Thailand','Bo Kluea','14836'),('d3826c93-5399-41bb-a8c3-649edb905467','2016-07-30','Asia/Yekaterinburg','12:46:42.000000','Russia','Bizhbulyak','2103'),('d61adf38-7909-4ffd-ae07-eff2457c8075','2017-01-29','Asia/Chongqing','14:18:29.000000','China','Weiyang','23472'),('d8bf1735-4df8-4ec1-949d-514c5e076a52','2016-02-25','Europe/Uzhgorod','03:09:41.000000','Ukraine','Dubno','67694'),('e5337517-10cf-454d-b0a0-76b30deacee3','2017-05-12','Asia/Chongqing','10:14:08.000000','China','Nanyang','23849'),('e68703a7-5427-4290-8dcc-b0adff59591e','2017-12-07','Europe/Berlin','05:12:55.000000','Germany','Hamburg','49043'),('e85fdc21-3cf8-46d3-9d15-0789f0dc5127','2017-01-20','Europe/Sarajevo','18:56:48.000000','Bosnia and Herzegovina','Kovači','3109'),('ec1d138e-ffda-4152-8d33-4e9df91c27dc','2017-07-10','Europe/Moscow','11:13:57.000000','Russia','Nebug','37361'),('ec66550a-05af-454d-9e3e-42fcff54ed07','2016-12-14','Asia/Chongqing','13:05:24.000000','China','Chenyangzhai','44215'),('efb3f476-ff20-4807-afb8-9a0e821b7eac','2017-12-09','Africa/Bamako','01:27:31.000000','Mali','Nara','68048'),('f30997d6-bc1a-4cba-b869-39424ac771f9','2017-09-07','Europe/Lisbon','23:34:58.000000','Portugal','Portelinha','48915'),('f6b972e0-9a31-4ae3-8555-c021b358fb2d','2017-12-13','America/New_York','00:13:31.000000','United States','Charlotte','30439'),('faf8f28b-b0c4-4c30-8107-d4fc432bfb3f','2016-09-29','America/Jamaica','19:33:52.000000','Jamaica','Ulster Spring','65527'),('fc849ff7-687a-4679-b720-f0328fe0cc2a','2016-10-27','Europe/Kiev','04:34:22.000000','Ukraine','Dunaivtsi','78190'),('fe4b910e-233c-4645-b993-b70ab58b54ec','2016-02-27','America/New_York','07:22:49.000000','United States','Orlando','92867'),('ff3e0888-b7fc-4c5e-a673-1033d43c2cc3','2016-03-09','Asia/Jakarta','21:20:46.000000','Indonesia','Masaran','32033');
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sku`
--

DROP TABLE IF EXISTS `sku`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sku` (
  `sku_id` int(11) NOT NULL AUTO_INCREMENT,
  `SKU` varchar(45) DEFAULT NULL,
  `productsSKU` int(11) DEFAULT NULL,
  PRIMARY KEY (`sku_id`),
  KEY `productsSKU_idx` (`productsSKU`),
  CONSTRAINT `productsSKU` FOREIGN KEY (`productsSKU`) REFERENCES `products` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sku`
--

LOCK TABLES `sku` WRITE;
/*!40000 ALTER TABLE `sku` DISABLE KEYS */;
INSERT INTO `sku` VALUES (1,'RED - SPECIAL EDITION - FanCo. Classic',NULL),(2,'GREEN - FanCo. Classic',NULL),(3,'ORANGE - FanCo. Classic',NULL);
/*!40000 ALTER TABLE `sku` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-01 18:13:25
