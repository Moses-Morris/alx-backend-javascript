const express = require("express");

const app = express()
const port = 7865

app.param('id', (req, res, next, id) => {
  if (!isValidId(id)) {
    return res.status(400).send('Invalid ID');
  }
  next();
});

app.get("/", (req, res) => {
    res.send("Welcome to the payment system");
});

app.get("/cart/:id", (req, res) => {
    const id = req.params.id;
    return res.send(`Payment methods for cart ${id}`)
});

function isValidId(id) {
  return /^\d+$/.test(id);
}

app.listen(port, () => {
  console.log("API available on localhost port 7865");
});

module.exports = app;
