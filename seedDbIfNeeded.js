const mysql = require('mysql');
const { readFileSync } = require('fs');
const { promisify } = require('util');

const connection = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  multipleStatements: true, // to simplify seeding the db, not recommended
});

/** @type {import('mysql').Connection['query']} */
const boundQuery = connection.query.bind(connection);
const asyncQuery = promisify(boundQuery);

module.exports = async function seedDb() {
  try {
    const queryResult = await asyncQuery(
      "SELECT count(*) AS 'count' FROM information_schema.tables WHERE table_schema = 'db' AND table_name = 'instruments'",
    );
    if (queryResult[0].count == 0) {
      console.log('seeding database');
      await asyncQuery(readFileSync('initialData.sql', { encoding: 'utf-8' }));
      console.log('Finished DB seed');
    }
  } catch (err) {
    console.error('DB seed failed');
    console.error(err);
    process.exit(1);
  } finally {
    connection.end();
  }
};
