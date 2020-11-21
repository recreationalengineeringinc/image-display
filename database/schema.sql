DROP DATABASE rei_store;

CREATE DATABASE rei_store;

USE rei_store;

CREATE TABLE products (
  id INT NOT NULL,
  brand VARCHAR(255),
  name VARCHAR(255),
  rating DOUBLE(5,2),
  category VARCHAR(255),
  PRIMARY KEY(id)
);

CREATE TABLE color (
  id INT NOT NULL,
  product_id INT,
  color VARCHAR(255),
  hex VARCHAR(255),
  price DECIMAL(10,2),
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE images (
  id INT NOT NULL AUTO_INCREMENT,
  url VARCHAR(255),
  description VARCHAR(255),
  color_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (color_id) REFERENCES color(id)
);


