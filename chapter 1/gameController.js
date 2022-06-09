// This file is created according to 4.

import gameBoardFactory from "./gameBoard.js";

const gameBoard = gameBoardFactory();

// DID some monkey* testing by console.loging xD
// at this point you can use unit testing with jest if you wish
// all of the code down below is for testing you can delete them

gameBoard.createAndPlaceShips();
console.log(gameBoard.ships);

gameBoard.receiveAttack(100);
// ship 1 atttackes
gameBoard.receiveAttack(11);
gameBoard.receiveAttack(12);
gameBoard.receiveAttack(13);
gameBoard.receiveAttack(14);
gameBoard.receiveAttack(15);

gameBoard.receiveAttack(35);

// ship 2 attackes
gameBoard.receiveAttack(32);
gameBoard.receiveAttack(42);
gameBoard.receiveAttack(52);
gameBoard.receiveAttack(62);

// ship 3 attackes
gameBoard.receiveAttack(85);
gameBoard.receiveAttack(86);
gameBoard.receiveAttack(87);

// ship 4 attackes
gameBoard.receiveAttack(37);
gameBoard.receiveAttack(38);
gameBoard.receiveAttack(39);

// ship 5 attackes
gameBoard.receiveAttack(45);
gameBoard.receiveAttack(55);

console.log(gameBoard.missedAttacks);

console.log("ship 4 isShunk():", gameBoard.ships[4].isSunk());
console.log("are all ships sunk: ", gameBoard.areAllShipsSunk());

console.log(gameBoard);
