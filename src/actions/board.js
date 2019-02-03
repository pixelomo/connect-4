export const slotSelected = (column) => {
    return (dispatch, getState) => {
        const { turns, board, player } = getState()
        const slot = player;
        const col = board[column].concat(slot);

        // if column full cancel move
        // if(col.length === 7){
        //     return;
        // } 
        
        dispatch({ 
            type: 'SLOT_SELECTED', 
            column: column,
            player: player
        })

        // Check for tie
        if (turns === 41) {
            dispatch({ type: 'DECLARE_TIE' })
        }

        // if (winningMove(board, player)) {
        //     dispatch({ type: 'DECLARE_WINNER', player })
        // }
        
    }
}