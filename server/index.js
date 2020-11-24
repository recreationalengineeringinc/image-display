const express = require('express');
const path = require('path');
const db = require('../database/connection.js');

const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use('*/product/:id', express.static(path.join(__dirname, '../public')));

app.get('*/product/:id/images', (req, res) => {
  db.connection.query(
    `SELECT products.name, products.id, products.brand, products.category, products.rating, color.color, color.hex, color.price, images.url, images.description FROM products INNER JOIN color INNER JOIN images ON products.id = ${req.params.id} AND color.product_id = ${req.params.id} AND images.color_id = color.id`, (err, result) => {
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