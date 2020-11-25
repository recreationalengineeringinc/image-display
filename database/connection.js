const mysql = require('mysql');

const connection = mysql.createConnection({
  // host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'rei_store',
  insecureAuth: true
});

connection.connect();

module.exports.connection = connection;
