require('dotenv').config();
const express = require('express');
const app = express();
const seedDbIfNeeded = require('./seedDbIfNeeded');

seedDbIfNeeded().then(() => {
  app.use(express.static('public'));

  app.use('/instruments', require('./routes/instruments'));

  app.get('/*', (req, res) => res.status(404).send('not found'));

  app.listen(8080, () => console.log('server started'));
});
