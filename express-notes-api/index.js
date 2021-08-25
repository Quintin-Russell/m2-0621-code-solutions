// issue 1: simple GET req --> sends 200 code and JSON array of objs
const express = require('express');
const dataJSON = require('./data.json');
const fs = require('fs');
// const { nextTick } = require('process');
const app = express();
app.listen(3000, () => 'server is listening on port 3000');

function writeFile(file, json) {
  fs.writeFile(file, JSON.stringify(json, null, 2), (err, data, next) => {
    if (err) {
      next(err);
    }
  });
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
app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  let object = null;
  if ((id > 0) && ((id % 1) === 0)) {
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
  } else {
    const message = {
      error: 'Please enter a valid ID'
    };
    res.status(400).json(message);
  }
});

// issue 3: POST req + content adds a new note obj to data.json + 201status;
// no content = 400status + error obj; if content not successfully recorded in data.json
// = 500status + error obj
app.post('/api/notes', (req, res) => {
  const nextId = dataJSON.nextId;
  const reqBody = req.body;
  if ((Object.keys(reqBody).length) > 0) {
    const key = Object.keys(reqBody)[0];
    const cont = req.body[key];
    const entry = {
      content: cont,
      id: nextId
    };
    dataJSON.notes[nextId] = entry;
    dataJSON.nextId = nextId + 1;
    res.status(201).json(entry);
    return writeFile('data.json', dataJSON);
  } else {
    const err = {
      error: 'content is a required field'
    };
    return res.status(400).json(err);
  }
});

// issue 4: DELETE req:
// xx- not a valid id(not a + integer): 400 status code + JSON error obj
// xx- if +id but id doesnt exist: 404 status code + JSON error obj
// xx- if valid id but error: next(err)
// xxif valid id: delete note + 204 status

app.delete('/api/notes/:id', (req, res) => {
  const delId = req.params.id;
  if ((delId > 0) && ((delId % 1) === 0)) {
    let entry;
    for (const ent in dataJSON.notes) {
      if (delId === ent) {
        entry = dataJSON.notes[ent];
        delete dataJSON.notes[ent];
        writeFile('data.json', dataJSON);
        res.status(204);
        break;
      }
    }
    if (entry === undefined) {
      const error = {
        error: `cannot find note with if ${delId}`
      };
      res.status(404).json(error);
    }
  } else {
    const error = {
      error: 'id must be a valid integer'
    };
    res.status(400).json(error);
  }
});

// issue 5: PUT req:
// id is not a +int or no cont prop in req body: 400 status code + JSON error obj
// valid id but no cont prop: 404 status code + JSON error obj
// valid id + cont prop: note at id is updated with content value + 200 status code

app.put('/api/notes/:id', (req, res) => {
  let changeId = Number(req.params.id);
  const reqBody = req.body;
  let exists;
  let error;
  if ((changeId > 0) && ((changeId % 1) === 0) && (reqBody !== undefined)) {
    const key = Object.keys(reqBody)[0];
    const cont = reqBody[key];
    for (const ent in dataJSON.notes) {
      if (changeId === ent) {
        changeId = Number(changeId);
        dataJSON.notes[ent] = {
          id: changeId,
          content: cont
        };
        exists = dataJSON.notes[ent];
        writeFile('data.json', dataJSON);
        res.status(200).json(exists);
      }
    }
    if (exists === undefined) {
      error = {
        error: `cannot find note with id ${changeId}`
      };
      res.status(404).json(error);
    }
  } else {
    if ((changeId <= 0) || ((changeId % 1) !== 0)) {
      error = {
        error: 'id must be a positive integer'
      };
    } else if (reqBody === undefined) {
      error = {
        error: 'content is a required field'
      };
    }
    res.status(400).json(error);
  }
});

app.use(function (err, req, res, next) {
  const errorMes = {
    error: 'An unexpected error occurred'
  };
  res.status(500).json(errorMes);
  return err;
});
