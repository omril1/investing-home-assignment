// @ts-check
const express = require('express');
const router = express.Router();
const mockData = require('./mockData');

router.get('/', (req, res) => {
  res.send(mockData);
});

router.post('/', (req, res) => {
  console.log(`Creating an instrument`);
  res.sendStatus(201);
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  console.log(`Deleting instrument with id: ${id}`);
});

module.exports = router;
