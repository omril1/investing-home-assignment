const mysql = require('mysql');
const { promisify } = require('util');

const connection = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'db',
});

/** @type {import('mysql').Connection['query']} */
const boundQuery = connection.query.bind(connection);
const asyncQuery = promisify(boundQuery);

module.exports = { asyncQuery };

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received.');
  connection.end();
});
