const $container = document.querySelector(".container");
const $back = document.querySelector("#back");
console.log("$back", $back);
const $forward = document.querySelector("#forward");
const $zero = document.querySelector("#zero");
const $one = document.querySelector("#one");
const $two = document.querySelector("#two");
const $three = document.querySelector("#three");
const $four = document.querySelector("#four");
const $img = document.querySelector("#img");
let counter = 0;
const imgArr = ["images/001.png", "images/004.png", "images/007.png", "images/025.png",
"images/039.png"];
const $dotArr = [$zero, $one, $two, $three, $four];

const changeDot = function() {
  for (let i = 0; i < $dotArr.length; i++){
    if (i === counter){
      const black = $dotArr[i];
      black.setAttribute("class", "fas fa-circle")
    } else {
      const white = $dotArr[i];
      white.setAttribute("class", "far fa-circle")
    }
  };
  $img.setAttribute("src", imgArr[counter])
  if (counter === (($dotArr.length)-1)) {
    counter = 0;
  } else {
    counter++;
  }
};

let int = setInterval(changeDot, 3000);

const interval = function () {
  clearInterval(int);
  int = setInterval(changeDot, 3000);
};

$container.addEventListener("click", function (e) {
  if (event.target === $zero) {
    $img.setAttribute("src", imgArr[0]);
    counter = 0;
    changeDot();
    interval();
    counter=0;
  }
});

$container.addEventListener("click", function (e) {
  if (event.target === $one) {
    $img.setAttribute("src", imgArr[1]);
    counter = 1;
    changeDot();
    interval();
  }
});

$container.addEventListener("click", function (e) {
  if (event.target === $two) {
    $img.setAttribute("src", imgArr[2]);
    counter = 2;
    changeDot();
    interval();
  }
});

$container.addEventListener("click", function (e) {
  if (event.target === $three) {
    $img.setAttribute("src", imgArr[3]);
    counter = 3;
    changeDot();
    interval();
  }
});

$container.addEventListener("click", function (e) {
  if (event.target === $four) {
    $img.setAttribute("src", imgArr[4]);
    counter = 4;
    changeDot();
    interval();
  }
});

$container.addEventListener("click", function (e) {
  if (event.target === $forward) {
    if (counter === ($dotArr.length - 1)){
      $img.setAttribute("src", imgArr[0]);
      counter = 0
      changeDot();
      interval();
    } else {
      $img.setAttribute("src", imgArr[counter + 1]);
      counter += 1
      changeDot();
      interval();
    }
  }
});

$container.addEventListener("click", function(e){
  if (event.target === $back) {
    console.log("counter", counter);
    if (counter <= 1) {
      const len = ((imgArr.length) - 1);
      console.log("len", len);
      counter = len;
      changeDot();
      counter = len;
      interval();
      console.log("int reset")
    } /* else if (counter === (imgArr.length) - 1){
      counter = 3;
      changeDot();
      interval();
    } */
    else {
      counter-=2;
      console.log("counter decriment", counter);
      changeDot();
      interval();
      console.log("int reset")
    }
  }
});
