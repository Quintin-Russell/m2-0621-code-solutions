const fs = require('fs');

const dataJSON = require('./data.json');

const entryArr = [];
for (let x in dataJSON.notes) {
  entryArr.push(x)
};

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
function read(dataJSON) {
  for (let id in dataJSON.notes) {
    console.log(`${id}: ${dataJSON.notes[id]}`);
  }
}

function create(dataJSON, argument) {
  let nextID = dataJSON.nextId;
    dataJSON.notes[nextID] = argument;
    dataJSON.nextId = nextID + 1
    return JSON.stringify(dataJSON, null, 2);

}

function deleteEntry(dataJSON, argument) {
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

function update(dataJSON, argument, argument2) {
  dataJSON.notes[argument] = argument2;
  const data = JSON.stringify(dataJSON, null, 2);
  return data
}

//logic tree to determine which function to run
if (command === 'read') {
  read(dataJSON)
} else if ((command === 'create')&&(argument !== undefined)){
  fs.writeFile('data.json', create(dataJSON, argument), (err,data)=> {
    if (err) throw err
  })
} else if ((command === 'delete') && (argument !== undefined) && (entryArr.includes(argument))) {
  fs.writeFile('data.json', deleteEntry(dataJSON, argument), (err, data) => {
    if (err) throw err
  })
} else if ((command === 'update') && (argument !== undefined) && (argument2 !== undefined) && (entryArr.includes(argument))) {
  fs.writeFile('data.json', update(dataJSON, argument, argument2), (err, data) => {
    if (err) throw err
  })
} else {
  console.log('Try again with all valid inputs')
}
