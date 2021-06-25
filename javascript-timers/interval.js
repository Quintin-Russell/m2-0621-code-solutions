const h2 = document.querySelector("h1");
let counter = 0;
const arr = [3, 2, 1, "~Earth Beeeelooowww Us~"];


const funct = function () {
  h2.textContent = arr[counter];
  counter++;
  if (counter > arr.length){
    clearInterval(funct)
  }
};

var interval = setInterval(function() {
  h2.textContent = arr[counter];
  counter++;
  if (counter === arr.length) {
    clearInterval(interval)
  }
}, 1000);
