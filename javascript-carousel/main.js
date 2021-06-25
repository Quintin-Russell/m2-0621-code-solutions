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
  for (let i = 0; i < $dotArr.length; i++){
    if (i === counter){
      const black = $dotArr[i];
      black.setAttribute("class", "fas fa-circle")
    } else {
      const white = $dotArr[i];
      white.setAttribute("class", "far fa-circle")
    }
  }
}

const timer = function() {
  if (counter === 4){
    counter = 0;
  } else {
    counter++;
  }
  changeDot();
  $img.setAttribute("src", imgArr[counter])
}

setInterval(timer, 3000);

$container.addEventListener("click", function (e) {
  if (event.target === $zero) {
    $img.setAttribute("src", imgArr[0]);
    counter = 0;
    changeDot();
  }
});

$container.addEventListener("click", function (e) {
  if (event.target === $one) {
    $img.setAttribute("src", imgArr[1]);
    counter = 1;
    changeDot();
  }
});

$container.addEventListener("click", function (e) {
  if (event.target === $two) {
    $img.setAttribute("src", imgArr[2]);
    counter = 2;
    changeDot();
  }
});

$container.addEventListener("click", function (e) {
  if (event.target === $three) {
    $img.setAttribute("src", imgArr[3]);
    counter = 3;
    changeDot();
  }
});

$container.addEventListener("click", function (e) {
  if (event.target === $four) {
    $img.setAttribute("src", imgArr[4]);
    counter = 4;
    changeDot();
  }
});

$container.addEventListener("click", function (e) {
  if (event.target === $forward) {
    if (counter === 4){
      $img.setAttribute("src", imgArr[0]);
      counter = 0
      changeDot();
    } else {
      $img.setAttribute("src", imgArr[counter + 1]);
      counter += 1
      changeDot();
    }
  }
});

$container.addEventListener("click", function(e){
  if (event.target === $back) {
    if (counter === 0) {
      $img.setAttribute("src", imgArr[4]);
      counter = 4
      changeDot();
    } else {
      $img.setAttribute("src", imgArr[counter - 1]);
      counter -= 1
      changeDot();
    }
  }
});
