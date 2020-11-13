/* eslint-disable func-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
// need to import database
const db = require('./connection.js');

function seeder(dataset) {
  dataset.forEach(data => {
    db.connection.query(`INSERT INTO product (id, name, rating, category) VALUES (${data.id}, '${data.name}', ${data.rating}, '${data.category}')`, (err) => {
      if (err) {
        console.log('error logging product: ', err);
      } else {
        console.log('success logging product');
      }
    });

    for (let color in data.colors) {
      for (let size in data.colors[color].sizes) {
        db.connection.query(`INSERT INTO inventory (product_id, color, size, price, quantity) VALUES (${data.id}, '${color}', '${size}', ${data.colors[color].price}, ${data.colors[color].sizes[size]})`, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log('success logging inventory');
          }
        });
      }
      for (const image in data.colors[color].images) {
        let identifierArr = data.colors[color].images[image].url.split('/');
        let identifier = identifierArr[3] + '/' + identifierArr[4];
        db.connection.query(`INSERT INTO images (url, description, identifier) VALUES ('${data.colors[color].images[image].url}', '${data.colors[color].images[image].description}', '${identifier}')`, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log('success logging images');
          }
        });
      }
    }
    createBridge(data);
  });
//   db.connection.end(()=>{
//     console.log('seeding complete');
//   });
// }

function createBridge(data) {
  let inventoryIDs = [];
  let imageIDs = [];
  // establish join table

  db.connection.query(`SELECT inventory.id from inventory INNER JOIN product ON inventory.product_id = product.id AND product.name = '${data.name}'`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      inventoryIDs = result;
      for (let color in data.colors) {
        let productColor = color;
        while (productColor.indexOf(' ') !== -1 || productColor.indexOf('/') !== -1) {
          productColor = productColor.replace(' ', '+');
          productColor = productColor.replace('/', '%3A');
        }
        let identifier = data.id + '/' + productColor;
        db.connection.query(`SELECT id FROM images WHERE identifier = '${identifier}'`, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            imageIDs = result;
            for (let i = 0; i < inventoryIDs.length; i++) {
              for (let j = 0; j < imageIDs.length; j++) {
                db.connection.query(`INSERT INTO product_inventory_br (inventory_id, image_id) VALUES (${inventoryIDs[i].id}, ${imageIDs[j].id})`, (err) => {
                  if (err) {
                    console.log(err);
                  } else {
                    console.log('logged into bridge table');
                  }
                });
              }
            }
          }
        });
      }
    }
  });
}


module.exports.seeder = seeder;
