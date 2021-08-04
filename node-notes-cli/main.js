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

//logic tree to determine which function to run
if (command === 'read') {
  read()
}
