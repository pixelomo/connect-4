const initialBoard = [
    ["", "", "", "", "", "", ""], // 0
    ["", "", "", "", "", "", ""], // 1
    ["", "", "", "", "", "", ""], // 2
    ["", "", "", "", "", "", ""], // 3
    ["", "", "", "", "", "", ""], // 4
    ["", "", "", "", "", "", ""], // 5
    ["", "", "", "", "", "", ""]  // 6
];
console.log(initialBoard);

const board = (state = initialBoard, action) => {
  if (action.type === "NEW_GAME") {
    return { board: initialBoard };
  }

  if (action.type === "SLOT_SELECTED") {
    // console.log('Slot selected on column ' + action.column)
    const slot = action.player;
    const newBoardState = [...state.slice()];
    const col = newBoardState[action.column];
    const empty = col.findIndex(e => e === "");
    col.pop(col.length - 1);
    col.splice(empty, "", slot);

    newBoardState[action.column] = col;
    console.log(newBoardState);
    return {
      board: initialBoard
    };
  }
  return state;
};

export default board;
