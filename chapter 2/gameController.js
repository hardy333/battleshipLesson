// This file is created according to 4.

import gameBoardFactory from "./gameBoard.js";
import playerFactory from "./player.js";

/*---------------------------------------*\
  # Initializations of Boards and players
\*---------------------------------------*/

// init board1
const board1 = gameBoardFactory();
board1.createAndPlaceShips();

// init board2
const board2 = gameBoardFactory();
board2.createAndPlaceShips();

// init player 1
const player1 = playerFactory(board1, board2);
// init player 2
const player2 = playerFactory(board2, board1);

/*-----------------------------------*\
  # testing by console.logging 
\*-----------------------------------*/
player1.takeTurn(0);

player1.takeTurn(100);
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
