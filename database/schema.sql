DROP DATABASE rei_store;

CREATE DATABASE rei_store;

USE rei_store;

CREATE TABLE products (
  id INT NOT NULL,
  name VARCHAR(255),
  rating DOUBLE(5,2),
  category VARCHAR(255),
  PRIMARY KEY(id)
);

CREATE TABLE inventory (
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT,
  color VARCHAR(255),
  size VARCHAR(255),
  price DOUBLE(5,2),
  quantity INT,
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE images (
  id INT NOT NULL AUTO_INCREMENT,
  url VARCHAR(255),
  description VARCHAR(255),
  identifier VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE image_inventory_br (
  id INT NOT NULL AUTO_INCREMENT,
  inventory_id INT,
  image_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (inventory_id) REFERENCES inventory(id),
  FOREIGN KEY (image_id) REFERENCES images(id)
);

