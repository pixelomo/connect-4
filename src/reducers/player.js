const playerState = 'red'

const player = (prevState = playerState, action) => {
  if (action.type === 'SLOT_SELECTED') {
    if(prevState === "red"){
        return 'yellow'
    } 
    return 'red'
  }
  return prevState
}

export default player
