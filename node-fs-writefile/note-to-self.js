const fs = require('fs');

const note = process.argv[2];
fs.writeFile('note.txt', note, (err) => console.log(`Houston, we have a problem`))
