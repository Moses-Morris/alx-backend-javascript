const express = require('express');

const app = express();
const port = 7865;

app.param('id', (req, res, next, id) => {
  if (!isValidId(id)) {
    return res.status(400).send('Invalid ID');
  }
  next();
});

app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.end(`Payment methods for cart ${req.params.id}`);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

function isValidId(id) {
  return /^\d+$/.test(id);
}

module.exports = app;
