/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
// need to import database
const db = require('./connection.js');

function seeder(dataset) {
  let inventoryIDs = [];
  const imageIDs = [];
  dataset.forEach((data) => {
    db.connection.query(`INSERT INTO product (id, name, rating, category) VALUES (${data.id}, '${data.name}', ${data.rating}, '${data.category})'`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('success');
      }
    });

    for (const color in data.colors) {
      for (const size in data.colors[color].sizes) {
        db.connection.query(`INSERT INTO inventory (product_id, color, size, price, quantity) VALUES (${data.id}, '${color}', '${size}', ${data.colors[color].price},'${data.colors.sizes[size]}'`, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log('success logging inventory');
          }
        });
      }
      for (const image in data.colors[color].images) {
        db.connection.query(`INSERT INTO images (url, description) VALUES ('${data.colors[color].images[image].url}', '${data.colors[color].images[image].description})`, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log('success logging images');
          }
        });
      }
    }
    // establish join table
    db.connection.query(`SELECT inventory.id from inventory INNER JOIN products ON inventory.product_id = products.id AND products.name = '${data.name}'`, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        inventoryIDs = result;
      }
    });

    for (const color in data.colors) {
      for (const image in data.colors[color].images) {
        db.connection.query(`SELECT id from images WHERE url = '${data.colors[color].images[image].url}'`, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            imageIDs.push(result[0]);
          }
        });
      }
    }
    for (let i = 0; i < inventoryIDs.length; i++) {
      for (let j = 0; j < imageIDs.length; j++) {
        db.connection.query('INSERT INTO product_inventory_br (inventory_id, image_id) VALUES (productIDs[i], imageIDs[j])', (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log('logged into bridge table');
          }
        });
      }
    }
  });
}

module.exports.seeder = seeder;
