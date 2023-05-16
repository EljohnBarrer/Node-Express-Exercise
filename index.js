const express = require('express');
const axios = require('axios');
const app = express();

const data = [
  { "achievement": "BackEnd What?" },
  { "sayGreeting": "Hello From StackTrek" }
];

app.get('/', async (req, res) => {
	res.send('Hello there!');
});

app.get('/show', (req, res) => {
  res.json(data);
});

app.get('/achievement', (req, res) => {
  res.send(data[0].achievement);
});

app.get('/greet', (req, res) => {
    res.send(data[1].sayGreeting);
  });

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});