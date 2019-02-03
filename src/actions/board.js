export const slotSelected = (column) => {
    return (dispatch, getState) => {
        const { turns, board } = getState()
        let player = board.player
        const slot = player;
        const col = board.board[column].concat(slot);

        // if column full cancel move
        if(col.length === 7){
            return;
        } 
        
        dispatch({ 
            type: 'SLOT_SELECTED', 
            column: column
        })

        // Check for tie
        if (turns === 41) {
            dispatch({ type: 'DECLARE_TIE' })
        }

        if (winningMove(board.board, player)) {
            dispatch({ type: 'DECLARE_WINNER', player })
        }
        
    }
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

    console.log('Vertical Win: ' + verticalWin)
    console.log('Horizontal Win: ' + horizontalWin)
    console.log('Diagonal Win: ' + diagonalWin)

    return (verticalWin || horizontalWin || diagonalWin)
}