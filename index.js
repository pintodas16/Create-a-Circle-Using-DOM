const body = document.querySelector("body");
const redo = document.querySelector(".redo");
const Clear = document.querySelector(".undo");
let counter = 0;
const counterIncrease = () => {
  return (counter += 1);
};
const counterDecrease = () => {
  return (counter -= 1);
};

function preload() {}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw(x, y, counter) {
  stroke("black");
  strokeWeight(counter);
  point(x, y);
}

const clickHandle = (event) => {
  let value = counterIncrease();
  console.log(value);
  let positionX = event.pageX;
  let positionY = event.pageY;
  draw(positionX, positionY, value);
};
body.addEventListener("click", clickHandle);
console.log(counter);
const handleRedo = () => {
  let value = counterDecrease();
  console.log(value);
  body.removeEventListener("click", clickHandle);
};
redo.addEventListener("click", handleRedo);
const handleClear = () => {
  window.location.reload();
  body.removeEventListener("click", clickHandle);
};
Clear.addEventListener("click", handleClear);
