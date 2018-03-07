DROP DATABASE IF EXISTS `x2jjk2ye8jzsnkv9`;
CREATE DATABASE `x2jjk2ye8jzsnkv9`;

USE `x2jjk2ye8jzsnkv9`;

CREATE TABLE burgers (

id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (100) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)

);