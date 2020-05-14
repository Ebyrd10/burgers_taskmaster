DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger varchar(25) NOT NULL,
    eaten BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);


