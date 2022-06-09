const playerFactory = function (board1, board2) {
  const ownBoard = board1;
  const enemyBoard = board2;

  // Computer will use this method
  function takeRandomTurn() {
    const { allAttacks, cellNumbers } = enemyBoard;

    const nonDamgedCells = cellNumbers.filter(
      (cellNumber) => !allAttacks.includes(cellNumber)
    );

    console.log(nonDamgedCells);
    const randomCell =
      nonDamgedCells[Math.floor(Math.random() * nonDamgedCells.length)];

    console.log({ randomCell });
    enemyBoard.receiveAttack(randomCell);
  }

  // real user/player will use this method
  function takeTurn(cellNumber) {
    enemyBoard.receiveAttack(cellNumber);
  }

  return {
    takeRandomTurn,
    takeTurn,
  };
};

export default playerFactory;
