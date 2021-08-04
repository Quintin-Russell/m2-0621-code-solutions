const fs = require('fs');

const dataJSON = require('./data.json');

const argv = process.argv
let command;
let argument;
if (argv.length > 3) {
  command = argv[2];
  argument = argv[3]
} else {
  command = argv[2]
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
  nextID++
  const data = JSON.stringify(dataJSON);
  return data
}

function deleteEntry() {
  delete dataJSON.notes[argument];
  const data = JSON.stringify(dataJSON);
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
}
