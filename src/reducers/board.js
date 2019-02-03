import { declareWinner } from "../actions/winner";

const initial = {
  player: "red",
  board: [
    ["", "", "", "", "", "", ""], // 0
    ["", "", "", "", "", "", ""], // 1
    ["", "", "", "", "", "", ""], // 2
    ["", "", "", "", "", "", ""], // 3
    ["", "", "", "", "", "", ""], // 4
    ["", "", "", "", "", "", ""], // 5
    ["", "", "", "", "", "", ""] // 6
  ]
};

const board = (state = initial, action) => {
  if (action.type === "NEW_GAME") {
    return { board: initial.board };
  }

  if (action.type === "SLOT_SELECTED") {
    // console.log('Slot selected on column ' + action.column)
    const slot = state.player;
    const newBoardState = state.board.slice();
    const col = newBoardState[action.column];
    const empty = col.findIndex(e => e === "");
    col.pop(col.length - 1);
    col.splice(empty, "", slot);

    newBoardState[action.column] = col;
    console.log(state.board);
    console.log(newBoardState);
    return {
      player: state.player === "red" ? "yellow" : "red",
      board: newBoardState
    };
  }
  return state;
};

export default board;
