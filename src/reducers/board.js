import { declareWinner } from '../actions/winner'

const initial = {
    player: 'red',
    board: [
        [], // 0
        [], // 1 
        [], // 2
        [], // 3
        [], // 4
        [], // 5
        [], // 6
    ],
    winner: '',
    turns: 0
}

const board = (state = initial, action) => {

    if (action.type === 'SLOT_SELECTED') {
        // console.log('Slot selected on column ' + action.column)
        const slot = state.player;
        const col = state.board[action.column].concat(slot);
        if(col.length === 7){
            // if column full cancel move
            return state;
        } 
        const board = state.board.slice()
        board[action.column] = col

        if (winningMove(board, state.player)) {
            state.winner = state.player
        }

        return{
            player: state.player === 'red' ? 'yellow' : 'red',
            board: board,
            winner: state.winner
        }
        
    } 
    return state;
}

function winningMove (board, player) {
    const winner = player + player + player + player
  
    const fourInARow = (container) => (key) => {
      const con = container[key]
      const arr = con.join('')
      return (arr.search(winner) > -1)
    }
  
    // vertical check
    const columns = Object.keys(board)
    const verticalWin = columns.some(fourInARow(board))
  
    // horizontal check
    const rows = {
      0: [board[0][0], board[1][0], board[2][0], board[3][0], board[4][0], board[5][0], board[6][0]],
      1: [board[0][1], board[2][1], board[2][1], board[2][1], board[2][1], board[2][1], board[2][1]],
      2: [board[0][2], board[3][2], board[3][2], board[3][2], board[3][2], board[3][2], board[3][2]],
      3: [board[0][3], board[4][3], board[4][3], board[4][3], board[4][3], board[4][3], board[4][3]],
      4: [board[0][4], board[5][4], board[5][4], board[5][4], board[5][4], board[5][4], board[5][4]],
      5: [board[0][5], board[6][5], board[6][5], board[6][5], board[6][5], board[6][5], board[6][5]],
    }
  
    const rowKeys = Object.keys(rows)
    const horizontalWin = rowKeys.some(fourInARow(rows))
    
    // // diagonal check
    const diagonal = {
      0:  [board[0][3], board[1][4], board[2][5], board[3][6]],
      1:  [board[0][2], board[1][3], board[2][4], board[3][5], board[4][6]],
      2:  [board[0][1], board[1][2], board[2][3], board[3][4], board[4][5], board[5][6]],
      3:  [board[0][0], board[1][1], board[2][2], board[3][3], board[4][4], board[5][5]],
      4:  [board[1][0], board[2][1], board[3][2], board[4][3], board[5][4]],
      5:  [board[2][0], board[3][1], board[4][2], board[5][3]],
      6:  [board[0][3], board[1][2], board[2][1], board[3][0]],
      7:  [board[0][4], board[1][3], board[2][2], board[3][1], board[4][0]],
      8:  [board[0][5], board[1][4], board[2][3], board[3][2], board[4][1], board[5][0]],
      9:  [board[0][6], board[1][5], board[2][4], board[3][3], board[4][2], board[5][1]],
      10: [board[1][6], board[2][5], board[3][4], board[4][3], board[5][2]],
      11: [board[2][6], board[3][5], board[4][4], board[5][3]]
    }
  
    const diagKeys = Object.keys(diagonal)
    const diagonalWin = diagKeys.some(fourInARow(diagonal))

    console.log('verticalWin ' + verticalWin)
    console.log('horizontalWin ' + horizontalWin)
    console.log('diagonalWin ' + diagonalWin)
    return (verticalWin || horizontalWin || diagonalWin)
}

export default board