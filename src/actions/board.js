export const slotSelected = (column) => {
    return (dispatch) => {
        dispatch({ 
            type: 'SLOT_SELECTED', 
            column: column
        })
    }
}