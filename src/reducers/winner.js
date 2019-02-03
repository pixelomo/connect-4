const winnerState = "";

const winner = (prevState = winnerState, action) => {
  if (action.type === "DECLARE_WINNER") {
    return action.player;
  }

  if (action.type === "DECLARE_TIE") {
    return 'Tie';
  }

  if (action.type === 'NEW_GAME') {
    return winnerState
  }

  return prevState;
};

export default winner;
