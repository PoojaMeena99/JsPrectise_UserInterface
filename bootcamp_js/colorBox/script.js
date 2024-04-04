const box = document.getElementById("box");
const yellow = document.getElementById("yellow");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const white = document.getElementById("white");

yellow.addEventListener("click", function () {
  box.style.backgroundColor = "yellow";
});

red.addEventListener("click", function () {
  box.style.backgroundColor = "red";
});
green.addEventListener("click", function () {
  box.style.backgroundColor = "green";
});
blue.addEventListener("click", function () {
  box.style.backgroundColor = "blue";
});
white.addEventListener("click", function () {
  box.style.backgroundColor = "white";
});
