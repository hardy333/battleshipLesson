// This file is created according to 4.

import gameBoardFactory, { gameBoardUI } from "./gameBoard.js";
import playerFactory from "./player.js";

/*---------------------------------------*\
  # Initializations of Boards and players
\*---------------------------------------*/

// init boards
const board1 = gameBoardFactory();
const board2 = gameBoardFactory();

// init board UIs
const board1UI = gameBoardUI(board1);
const board2UI = gameBoardUI(board1);
board1UI.init();
board2UI.init();

// init players
const player1 = playerFactory(board2, board2UI);
const player2 = playerFactory(board1, board1UI);

/*-----------------------------------*\
  # testing by console.logging 
\*-----------------------------------*/
player1.takeTurn(0);
player2.takeTurn(0);

player2.takeTurn(12);
player2.takeTurn(13);
player2.takeTurn(14);

// ship 1 atttackes
player1.takeTurn(11);
player1.takeTurn(12);
player1.takeTurn(13);
player1.takeTurn(14);
player1.takeTurn(15);

player1.takeTurn(35);

// ship 2 attackes
player1.takeTurn(32);
player1.takeTurn(42);
player1.takeTurn(52);
player1.takeTurn(62);

// ship 3 attackes
player1.takeTurn(85);
player1.takeTurn(86);
player1.takeTurn(87);

// ship 4 attackes
player1.takeTurn(37);
player1.takeTurn(38);
player1.takeTurn(39);

// ship 5 attackes
player1.takeTurn(45);
player1.takeTurn(55);

console.log(board2);
console.log(board2.areAllShipsSunk());
console.log(board2.missedAttacks);
console.log(board1.missedAttacks);
