const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '172.31.25.67',
  user: 'root',
  password: 'password',
  database: 'rei_store',
  insecureAuth: true
});

connection.connect();

module.exports.connection = connection;
