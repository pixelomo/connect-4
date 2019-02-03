export const slotSelected = (column) => {
    return (dispatch, getState) => {
        dispatch({ 
            type: 'SLOT_SELECTED', 
            column: column
        })
        const { turns } = getState()
        
        // Check for tie condition
        if (turns === 42) {
            dispatch({ type: 'UPDATE_TIE' })
        }
    }
}