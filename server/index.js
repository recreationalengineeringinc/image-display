const express = require('express');
const db = require('../database/connection.js');
const app = express();
const port = 3001;

app.get('/product/:id/images', (req, res) => {
  db.connection.query(`select * from images`), (err, result) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.header('Content-Type', 'application/json');
      res.send(JSON.stringify(result));
      res.end(201);
    }
  };
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});