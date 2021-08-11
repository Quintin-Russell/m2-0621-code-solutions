const express = require('express');
const app = express();
// const router = express.Router();
app.listen(3000, () => 'server is listening');

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res, next) => {
  const arr = [];
  for (const gr in grades) {
    arr.push(grades[gr]);
  }
  res.json(arr);
  next();
});

app.delete('/api/grades/:id', (req, res, next) => {
  const id = req.params.id;
  delete grades[id];
  next();
});
