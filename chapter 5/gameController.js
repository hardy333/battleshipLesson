// This file is created according to 4.

import gameBoardFactory, { gameBoardUI } from "./gameBoard.js";
import playerFactory from "./player.js";

/*---------------------------------------*\
  # Initializations of Boards and players
\*---------------------------------------*/

// init boards
let board1 = gameBoardFactory();
let board2 = gameBoardFactory();

// init board UIs
let board1UI = gameBoardUI(board1);
let board2UI = gameBoardUI(board1);
board1UI.init();
board2UI.init();

// init players
let player1 = playerFactory(board2, board2UI);
let player2 = playerFactory(board1, board1UI);

const board2Element = document.querySelectorAll(".board")[1];
Array.from(board2Element.children).forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

let gameOver = false;

function handleCellClick(e) {
  const cell = e.currentTarget;
  console.log(cell);
}
