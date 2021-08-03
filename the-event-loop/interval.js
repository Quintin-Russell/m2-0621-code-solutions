let count = 3;

function countdown() {
  if (count > 0) {
    console.log(count);
    count--
  } else if (count === 0) {
    console.log("Blast off!");
    count = 3;
    clearInterval(int)
  }
}

const int = setInterval(countdown, 1000)
