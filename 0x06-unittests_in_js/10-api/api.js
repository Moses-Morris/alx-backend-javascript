const express = require("express");

const app = express()
const port = 7865

app.use(express.json());

app.param('id', (req, res, next, id) => {
  if (!isValidId(id)) {
    return res.status(400).send('Invalid ID');
  }
  next();
});

app.get("/", (req, res) => {
    res.send("Welcome to the paymnet system");
});

app.get("/cart/:id", (req, res) => {
    const id = req.params.id;
    return res.send(`Payment methods for cart ${id}`)
});

app.get("/available_payments", (req, res) => {
    res.json({payment_methods: {credit_cards: true, paypal: false}})
});

app.get("/login", (req, res) => {
    const userName = req.body.userName;
    res.send(`Welcome ${userName}`);
});

function isValidId(id) {
  return /^\d+$/.test(id);
}

app.listen(port, () => {
  console.log("API available on localhost port 7865");
});

module.exports = app;
