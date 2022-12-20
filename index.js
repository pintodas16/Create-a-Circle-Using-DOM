const body = document.querySelector("body");
const element = document.createElement("div");
element.style.background = "red";
body.appendChild(element);

function preload() {}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw(x, y, counter) {
  stroke("black");
  strokeWeight(counter);
  point(x, y);
}
let counter = 0;
const clickHandle = (event) => {
  counter += 1;
  let positionX = event.pageX;
  let positionY = event.pageY;
  draw(positionX, positionY, counter);
};
body.addEventListener("click", clickHandle);
