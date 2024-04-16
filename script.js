"use-strict";

const board = document.querySelector(".board");
const setButton = document.querySelector(".size-button");
const sizeInput = document.getElementById("size-input");

function createBoard(size) {
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", square);
    console.log(i);
  }
}

setButton.addEventListener("click", function () {
  const size = parseInt(sizeInput.value);

  createBoard(size);
});

createBoard();
