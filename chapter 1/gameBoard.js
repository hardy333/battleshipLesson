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
  //   2.d
  const missedAttacks = [];

  //   2.b
  function createAndPlaceShips() {
    shipPositions.forEach((shipPosition) => {
      const { cells } = shipPosition;
      const newShip = shipFactory(cells.length, cells);

      ships.push(newShip);
    });
  }

  // 2.c
  function receiveAttack(attackedCellNumber) {
    // checking if one of the ship was hit or not

    let shipWasAttacked = false;

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
  };
};

export default gameBoardFactory;
