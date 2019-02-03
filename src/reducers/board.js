const initialBoard = [
  ["", "", "", "", "", ""], // 0
  ["", "", "", "", "", ""], // 1
  ["", "", "", "", "", ""], // 2
  ["", "", "", "", "", ""], // 3
  ["", "", "", "", "", ""], // 4
  ["", "", "", "", "", ""], // 5
  ["", "", "", "", "", ""]  // 6
];

function insertItem(array, action, empty) {
  let newArray = array.slice();
  newArray.pop(array.length - 1)
  newArray.splice(empty, "", action);
  return newArray;
}

const board = (state = initialBoard, action) => {
  if (action.type === "NEW_GAME") {
    return initialBoard;
  }

  if (action.type === "SLOT_SELECTED") {
    // console.log("Slot selected on column " + action.column);
    const slot = action.player;
    const newBoardState = state.slice();
    const col = newBoardState[action.column];
    const empty = col.findIndex(e => e === "");

    let newCol = insertItem(col, slot, empty)
    newBoardState[action.column] = newCol;
    return newBoardState;
  }
  return state;
};

export default board;