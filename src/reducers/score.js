const scoreState = {
    red: 0,
    yellow: 0
}

const score = (prevState = scoreState, action) => {
  if (action.type === 'DECLARE_WINNER') {
    if(action.player === 'red'){
        let newScore = {
            red: prevState.red + 1,
            yellow: prevState.yellow
        }
        return newScore;
    } else {
        let newScore = {
            red: prevState.red,
            yellow: prevState.yellow + 1
        }
        return newScore;
    }
  }
  return prevState
}

export default score
