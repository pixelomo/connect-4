const turnsState = 0

const turns = (prevState = turnsState, action) => {
  if (action.type === 'SLOT_SELECTED') {
    return prevState + 1
  }

  if (action.type === 'NEW_GAME') {
    return 0
  }

  return prevState
}

export default turns
