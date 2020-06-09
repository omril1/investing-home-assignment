//@ts-check
const express = require('express');
const app = express();
const mockData = require('./mockData');

app.use(express.static('public'));

app.use('/instruments', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(mockData);
});

app.listen(8080, () => console.log('server started'));
