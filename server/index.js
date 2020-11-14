const express = require('express');
const db = require('../database/connection.js');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.get('/product/:id/images', (req, res) => {
  db.connection.query(
    // `SELECT products.*, inventory.*, images.* FROM products INNER JOIN inventory INNER JOIN images INNER JOIN image_inventory_br ON products.id = ${req.params.id} AND inventory.product_id = ${req.params.id} AND images.id = image_inventory_br.image_id AND image_inventory_br.inventory_id = inventory.id`
    `SELECT products.*, inventory.*, images.* from images INNER JOIN image_inventory_br INNER JOIN inventory INNER JOIN products ON images.id = image_inventory_br.image_id AND image_inventory_br.inventory_id = inventory.id AND inventory.product_id = ${req.params.id} AND products.id = ${req.params.id}`, (err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.header('Content-Type', 'application/json');
        res.send(result);
      }
    });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});