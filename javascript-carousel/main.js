const $container = document.querySelector(".container");
const $back = document.querySelector("#back");
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
  console.log(counter);
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
  changeDot();
  int = setInterval(changeDot, 3000);
};

$container.addEventListener("click", function (e) {
  if (event.target === $zero) {
    $img.setAttribute("src", imgArr[0]);
    counter = 0;
    interval();
  }
});

$container.addEventListener("click", function (e) {
  if (event.target === $one) {
    $img.setAttribute("src", imgArr[1]);
    counter = 1;
    interval();
  }
});

$container.addEventListener("click", function (e) {
  if (event.target === $two) {
    $img.setAttribute("src", imgArr[2]);
    counter = 2;
    interval();
  }
});

$container.addEventListener("click", function (e) {
  if (event.target === $three) {
    $img.setAttribute("src", imgArr[3]);
    counter = 3;
    interval();
  }
});

$container.addEventListener("click", function (e) {
  if (event.target === $four) {
    $img.setAttribute("src", imgArr[4]);
    counter = 4;
    interval();
  }
});

$container.addEventListener("click", function (e) {
  if (event.target === $forward) {
    if (counter === ($dotArr.length)){
      counter = 0;
      interval();
    } else {
      interval();
    }
  }
});

$container.addEventListener("click", function(e){
  if (event.target === $back) {
    if (counter === 1) {
      counter = ($dotArr.length) - 1;
      interval();
    } else if (counter === 0) {
      counter = ($dotArr - 2);
      interval();
    } else {
    counter -= 2;
    interval();
  }
}});
