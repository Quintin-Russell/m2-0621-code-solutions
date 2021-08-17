// issue 1: simple GET req --> sends 200 code and JSON array of objs
const express = require('express');
const dataJSON = require('./data.json');
const fs = require('fs');
// const { nextTick } = require('process');
const app = express();
app.listen(3000, () => 'server is listening on port 3000');

function writeFile(file, json) {
  fs.writeFile(file, JSON.stringify(json, null, 2), (err, data) => { if (err) throw err; });
}

app.get('/api/notes', (req, res, next) => {
  const arr = [];
  for (const id in dataJSON.notes) {
    const obj = dataJSON.notes[id];
    arr.push(obj);
  }
  res.status(200).json(arr);
  next();
});

app.use(express.json());

// issue 2: GET req w/ id returns the obj with that id; negative id = 400 status+err;
// id does not exist = 404status+err
app.get('/api/notes', (req, res, next) => {
  const id = req.body;
  let object = null;
  if (id < 0) {

    const message = {
      error: 'Please enter a valid ID'
    };
    res.status(400).json(message);
  }
  for (const obj in dataJSON.notes) {
    if (obj === id) {
      object = dataJSON.notes[id];
      res.status(200).json(object);
    }
  }
  if (object === null) {

    const message = {
      error: 'There is no note with that ID. Please enter a valid ID'
    };
    res.status(404).json(message);
  }
  next();
});

// issue 3: POST req + content adds a new note obj to data.json + 201status;
// no content = 400status + error obj; if content not successfully recorded in data.json
// = 500status + error obj
app.post('/api/notes', (req, res) => {
  const nextId = dataJSON.nextId;
  // console.log(req);
  if (req.body !== undefined) {
    let cont = req.body;
    cont = cont.content;
    const entry = {
      content: cont,
      id: nextId
    };
    dataJSON.notes[nextId] = entry;
    dataJSON.nextId = nextId + 1;
    writeFile('data.json', dataJSON);
    res.status(201).json(entry);
  } else {
    const err = {
      error: 'content is a required field'
    };
    res.status(400).json(err);
  }
}, (err, data) => {
  if (err) {
    const error = {
      error: 'An unexpected error occurred'
    };
    escape.status(500).json(error);
  }
});
