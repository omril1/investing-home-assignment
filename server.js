const express = require('express');
const app = express();

app.use(express.static('public'));

app.use('/instruments', require('./routes/instruments'));

app.get('/*', (req, res) => res.status(404).send('not found'));

app.listen(8080, () => console.log('server started'));
