export const slotSelected = (player, column) => {
  return (dispatch, getState) => {

    dispatch({
      type: "SLOT_SELECTED",
      column: column,
      player: player
    });

    const { board, turns } = getState();

    if (winningMove(board, player)) {
      dispatch({ type: "DECLARE_WINNER", player });
    }

    if (turns === 42) {
        dispatch({ type: "DECLARE_TIE" });
      }
  };
};

function winningMove(board, player) {
  const winner = player + player + player + player;

  const fourInARow = container => key => {
    const con = container[key];
    const arr = con.join("");
    return arr.search(winner) > -1;
  };

  // vertical check
  const columns = Object.keys(board);
  const verticalWin = columns.some(fourInARow(board));

  // horizontal check
  const rows = {
    0: [board[0][0], board[1][0], board[2][0], board[3][0], board[4][0], board[5][0], board[6][0]],
    1: [board[0][1], board[1][1], board[2][1], board[3][1], board[4][1], board[5][1], board[6][1]],
    2: [board[0][2], board[1][2], board[2][2], board[3][2], board[4][2], board[5][2], board[6][2]],
    3: [board[0][3], board[1][3], board[2][3], board[3][3], board[4][3], board[5][3], board[6][3]],
    4: [board[0][4], board[1][4], board[2][4], board[3][4], board[4][4], board[5][4], board[6][4]],
    5: [board[0][5], board[1][5], board[2][5], board[3][5], board[4][5], board[5][5], board[6][5]]
  };

  const rowKeys = Object.keys(rows);
  const horizontalWin = rowKeys.some(fourInARow(rows));

  // // // diagonal check
  const diagonal = {
    0: [board[3][0], board[4][1], board[5][2], board[6][3]],
    1: [board[2][0], board[3][1], board[4][2], board[5][3], board[6][4]],
    2: [board[1][0], board[2][1], board[3][2], board[4][3], board[5][4], board[6][5]],
    3: [board[0][0], board[1][1], board[2][2], board[3][3], board[4][4], board[5][5]],
    4: [board[0][1], board[1][2], board[2][3], board[3][4], board[4][5]],
    5: [board[0][2], board[1][3], board[2][4], board[3][5]],
    6: [board[3][0], board[2][1], board[1][2], board[0][3]],
    7: [board[4][0], board[3][1], board[2][2], board[1][3], board[0][4]],
    8: [board[5][0], board[4][1], board[3][2], board[2][3], board[1][4], board[0][5]],
    9: [board[6][0], board[5][1], board[4][2], board[3][3], board[2][4], board[1][5]],
    10: [board[6][1], board[5][2], board[4][3], board[3][4], board[2][5]],
    11: [board[6][2], board[5][3], board[4][4], board[3][5]]
  };

  const diagKeys = Object.keys(diagonal);
  const diagonalWin = diagKeys.some(fourInARow(diagonal));

  return verticalWin || horizontalWin || diagonalWin;
}
