export const declareWinner = (player) => {
    return (dispatch) => {
        dispatch({ 
            type: 'DECLARE_WINNER', 
            player: player
        })
    }
}