export const newGame = () => {
    return (dispatch) => {
        dispatch({ 
            type: 'NEW_GAME'
        })
    }
}