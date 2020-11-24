const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'rei_store',
  insecureAuth: true
});

connection.connect();

module.exports.connection = connection;
