const fs = require('fs');

const dataJSON = require('./data.json');

const argv = process.argv

let command;
let argument;
let argument2;

if (argv.length === 5) {
  command = argv[2];
  argument = argv[3];
  argument2 = argv[4]
} else if (argv.length === 4){
  command = argv[2]
  argument = argv[3];
} else {
  command = argv[2];
}

//functions
function read() {
  for (let id in dataJSON.notes) {
    console.log(`${id}: ${dataJSON.notes[id]}`);
  }
}

function create() {
  let nextID = dataJSON.nextId;
  dataJSON.notes[nextID] = argument;
  dataJSON.nextId = nextID + 1
  const data = JSON.stringify(dataJSON, null, 2);
  return data
}

function deleteEntry() {
  const obj = {};
  for (let key in dataJSON.notes) {
    const val = dataJSON.notes[key];
    if (key !== argument) {
      obj[key] = val
    }
  }
  dataJSON.notes = obj;
  const data = JSON.stringify(dataJSON, null, 2);
  return data
}

function update() {
  dataJSON.notes[argument] = argument2;
  const data = JSON.stringify(dataJSON, null, 2);
  return data
}

//logic tree to determine which function to run
if (command === 'read') {
  read()
} else if (command === 'create'){
  fs.writeFile('data.json', create(), (err,data)=> {
    if (err) throw err
  })
} else if (command === 'delete') {
  fs.writeFile('data.json', deleteEntry(), (err, data) => {
    if (err) throw err
  })
} else if (command === 'update') {
  fs.writeFile('data.json', update(), (err, data) => {
    if (err) throw err
  })
}
