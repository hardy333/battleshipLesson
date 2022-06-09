// This file is created according to 2.

import shipFactory from "./ship.js";

// This is a dummy ship positions array, which I created by hand.
// In future we can randomly generate those positions or use drag and drop ---
// --- so that users can place ships at their will
const shipPositions = [
  {
    cells: [11, 12, 13, 14, 15],
  },
  {
    cells: [32, 42, 52, 62],
  },
  {
    cells: [85, 86, 87],
  },
  {
    cells: [37, 38, 39],
  },
  {
    cells: [45, 55],
  },
];

const gameBoardFactory = function () {
  const ships = [];
  const cellNumbers = Array.from(new Array(10 * 10)).map(
    (item, index) => index
  );
  //   2.d
  const missedAttacks = [];
  // I need this variable for playerFactory functionality
  const allAttacks = [];

  //   2.b
  function createAndPlaceShips() {
    shipPositions.forEach((shipPosition) => {
      const { cells } = shipPosition;
      const newShip = shipFactory(cells.length, cells);

      ships.push(newShip);
    });
  }
  createAndPlaceShips();

  // 2.c
  function receiveAttack(attackedCellNumber) {
    // checking if one of the ship was hit or not

    let shipWasAttacked = false;
    allAttacks.push(attackedCellNumber);

    for (let i = 0; i < ships.length; i++) {
      // if one of the ship was attacked
      if (ships[i].cellLocations.includes(attackedCellNumber)) {
        ships[i].hit(attackedCellNumber);
        shipWasAttacked = true;

        console.log("HIT");

        return;
      }
    }

    // If none of the ship was attacked
    if (!shipWasAttacked) {
      missedAttacks.push(attackedCellNumber);
      console.log("Missed");
    }
  }

  //   2.e
  function areAllShipsSunk() {
    return ships.every((ship) => ship.isSunk());
  }

  return {
    receiveAttack,
    areAllShipsSunk,
    createAndPlaceShips,
    ships,
    missedAttacks,
    cellNumbers,
    allAttacks,
  };
};

export const gameBoardUI = function (board) {
  console.log(board);
  let boardElement = undefined;

  function init() {
    createBoard(board.cellNumbers);
    createShips(board.ships);
  }

  function createBoard(cells) {
    const boardsContainer = document.querySelector(".boards-container");
    boardElement = document.createElement("div");
    boardElement.classList.add("board");

    cells.forEach((cell) => {
      const cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      boardElement.append(cellElement);
    });

    // boardsContainer.innerHTML = "";
    boardsContainer.append(boardElement);
  }

  function createShips(ships) {
    ships.forEach((ship) => {
      createShip(ship);
    });
  }

  function createShip(ship) {
    ship.cellLocations.forEach((cellIndex, index) => {
      const box = document.createElement("div");
      box.classList.add("ship-box");
      boardElement.children[cellIndex].append(box);
    });
  }

  function addBullet(cellIndex) {
    const bulletElement = document.createElement("div");
    bulletElement.classList.add("bullet");

    console.log({ boardElement });
    const cellElement = boardElement.children[cellIndex];

    if (cellElement.children.length > 0) {
      bulletElement.classList.add("bullet-red");
    }

    cellElement.append(bulletElement);
  }

  return {
    init,
    addBullet,
  };
};

export default gameBoardFactory;
