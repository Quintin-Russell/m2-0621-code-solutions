const express = require('express');
const app = express();
app.listen('3000', () => 'server is listening on port 3000');

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (const gr in grades) {
    arr.push(grades[gr]);
  }
  res.json(arr);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const gr = req.body;
  gr.id = nextId;
  grades[nextId] = gr;
  nextId++;
  res.status(201).send(grades);
});
