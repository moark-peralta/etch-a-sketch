"use-strict";

const board = document.querySelector(".board");
const sizeInput = document.getElementById("size-input");
const setButton = document.querySelector(".size-button");
const resetButton = document.querySelector(".reset-button");
const blackBtn = document.querySelector(".black");
const eraserBtn = document.querySelector(".eraser");
const randomBtn = document.querySelector(".random");

let color = "black";

function createBoard(size) {
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "blue";
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
  resetBoard();
  const size = parseInt(sizeInput.value);
  createBoard(size);
});

resetButton.addEventListener("click", function () {
  resetBoard();
});

//Reset Board
function resetBoard() {
  board.innerHTML = "";
}

createBoard();
