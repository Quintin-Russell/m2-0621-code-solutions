const fs = require('fs');

//rand number
function randNum() {
  let num = Math.floor(Math.random() * 1000);
  return num.toString()
}

//writefile
fs.writeFile('random.txt', randNum(), (err) => console.log(`Houston we have a problem: ${err}`))
