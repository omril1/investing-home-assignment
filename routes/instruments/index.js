const bodyParser = require('body-parser');
const express = require('express');
const instrumentsRepository = require('./instrumentsRepository');
const router = express.Router();

router.use(bodyParser.json());

router.get('/', (req, res) => {
  instrumentsRepository.getAllInstruments().then(result => res.send(result));
});

router.post('/', (req, res) => {
  const { body } = req;
  instrumentsRepository.addInstrument(body).then(
    () => {
      res.sendStatus(201);
    },
    err => {
      console.error(err);
      res.sendStatus(500);
    },
  );
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  console.log(`Deleting instrument with id: ${id}`);
});

module.exports = router;
