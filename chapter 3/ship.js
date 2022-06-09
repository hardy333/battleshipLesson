// This file is created according to 1.

const shipFactory = function (length, cells) {
  // Those properties are created according to 1.a
  const shipLength = length;
  const damagedCells = [];
  const cellLocations = cells;

  // 1.c
  function hit(cellNumber) {
    if (!damagedCells.includes(cellNumber)) {
      damagedCells.push(cellNumber);
    }
  }

  // 1.d
  function isSunk() {
    return shipLength === damagedCells.length;
  }

  return {
    shipLength,
    damagedCells,
    hit,
    isSunk,
    cellLocations,
  };
};

export default shipFactory;
