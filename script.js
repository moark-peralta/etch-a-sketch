"use-strict";

const board = document.querySelector(".board");
const sizeInput = document.getElementById("size-input");
const setButton = document.querySelector(".size-button");
const resetButton = document.querySelector(".reset-button");
const blackBtn = document.querySelector(".black");
const eraserBtn = document.querySelector(".eraser");
const randomBtn = document.querySelector(".random");
const body = document.querySelector("body");
let color = "black";
let click = "true";

function createBoard(size) {
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "white";
    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = color;
    });
    board.insertAdjacentElement("beforeend", square);
  }
}

//Buttons
blackBtn.addEventListener("click", () => (color = "black"));
eraserBtn.addEventListener("click", () => (color = "white"));
randomBtn.addEventListener(
  "click",
  () => (color = `hsl(${Math.random() * 300}, 100%, 50%)`)
);

setButton.addEventListener("click", function () {
  const size = parseInt(sizeInput.value);
  if (size > 100) {
    alert("The board can only be 100x100");
    return;
  }
  if (size < 2) {
    alert("Minimun board size is 2x2");
    return;
  }
  resetBoard();
  createBoard(size);
});

resetButton.addEventListener("click", function () {
  resetBoard();
});

function resetBoard() {
  let square = board.querySelectorAll("div");
  square.forEach((div) => (div.style.backgroundColor = "white"));
}
createBoard();
