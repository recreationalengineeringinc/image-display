const express = require('express');
const db = require('../database/connection.js');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.get('/product/:id/images', (req, res) => {
  db.connection.query(`SELECT products.*, inventory.*  FROM products INNER JOIN inventory ON products.id = ${req.params.id} AND inventory.product_id = ${req.params.id}`, (err, result) => {
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