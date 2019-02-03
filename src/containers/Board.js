import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Slot from "../components/Slot";
import { newGame } from "../actions/new";
import { declareWinner } from "../actions/winner";

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  winningMove = (board, player) => {
    const winner = player + player + player + player;

    const fourInARow = container => key => {
      const con = container[key];
      const arr = con.join("");
      return arr.search(winner) > -1;
    };

    // vertical check
    const columns = Object.keys(board);
    const verticalWin = columns.some(fourInARow(board));

    // horizontal check
    const rows = {
      0: [board[0][0], board[1][0], board[2][0], board[3][0], board[4][0], board[5][0], board[6][0]],
      1: [board[0][1], board[1][1], board[2][1], board[3][1], board[4][1], board[5][1], board[6][1]],
      2: [board[0][2], board[1][2], board[2][2], board[3][2], board[4][2], board[5][2], board[6][2]],
      3: [board[0][3], board[1][3], board[2][3], board[3][3], board[4][3], board[5][3], board[6][3]],
      4: [board[0][4], board[1][4], board[2][4], board[3][4], board[4][4], board[5][4], board[6][4]],
      5: [board[0][5], board[1][5], board[2][5], board[3][5], board[4][5], board[5][5], board[6][5]]
    };

    const rowKeys = Object.keys(rows);
    const horizontalWin = rowKeys.some(fourInARow(rows));

    // // // diagonal check
    const diagonal = {
      0: [board[3][0], board[4][1], board[5][2], board[6][3]],
      1: [board[2][0], board[3][1], board[4][2], board[5][3], board[6][4]],
      2: [board[1][0], board[2][1], board[3][2], board[4][3], board[5][4], board[6][5]],
      3: [board[0][0], board[1][1], board[2][2], board[3][3], board[4][4], board[5][5]],
      4: [board[0][1], board[1][2], board[2][3], board[3][4], board[4][5]],
      5: [board[0][2], board[1][3], board[2][4], board[3][5]],
      6: [board[3][0], board[2][1], board[1][2], board[0][3]],
      7: [board[4][0], board[3][1], board[2][2], board[1][3], board[0][4]],
      8: [board[5][0], board[4][1], board[3][2], board[2][3], board[1][4], board[0][5]],
      9: [board[6][0], board[5][1], board[4][2], board[3][3], board[2][4], board[1][5]],
      10: [board[6][1], board[5][2], board[4][3], board[3][4], board[2][5]],
      11: [board[6][2], board[5][3], board[4][4], board[3][5]]
    };

    const diagKeys = Object.keys(diagonal);
    const diagonalWin = diagKeys.some(fourInARow(diagonal));

    // console.log('Vertical Win: ' + verticalWin)
    // console.log('Horizontal Win: ' + horizontalWin)
    // console.log('Diagonal Win: ' + diagonalWin)

    return verticalWin || horizontalWin || diagonalWin;
  };

  componentDidUpdate() {
    if (this.winningMove(this.props.board, this.props.player)) {
      console.log(this.props.player+" WINS");
      const { dispatch } = this.props;
      dispatch(declareWinner(this.props.player));
    }
  }

  renderSlots() {
    const slots = [];
    for (let y = 5; y >= 0; y--) {
      const row = [];

      for (let x = 0; x < 7; x++) {
        row.push(<Slot key={x} x={x} y={y} />);
      }
      slots.push(
        <div key={y} className="row">
          {row}
        </div>
      );
    }
    return slots;
  }

  startGame() {
    const { dispatch } = this.props;
    dispatch(newGame());
  }

  render() {
    const winner = this.props.winner.toString();
    return (
      <Wrapper>
        <BoardContainer winner={winner !== ""}>{this.renderSlots()}</BoardContainer>
        <Winner winner={winner !== "" && winner !== "Tie"}>
          The Winner is
          <span> {winner}!</span>
          <button onClick={() => this.startGame()}>New Game</button>
        </Winner>
        <Winner winner={winner === "Tie"}>
          It's a Tie
          <button onClick={() => this.startGame()}>New Game</button>
        </Winner>
        <p className="red">Red</p>
        <div className={this.props.player === "red" ? "red disc" : "yellow disc"} />
        <p className="yellow">Yellow</p>
      </Wrapper>
    );
  }
}

const stateToProps = state => {
  return {
    winner: state.winner,
    player: state.player,
    board: state.board
  };
};

export default connect(stateToProps)(Board);

////////////CSS/////////////
const BoardContainer = styled.div`
  pointer-events: ${props => (props.winner ? "none" : "all")};
  margin: 60px auto 30px;
  text-align: center;
  border-radius: 32px;
  border: 10px solid dodgerblue;
  width: calc(140px * 7);
  overflow: hidden;
`;

const Wrapper = styled.div`
  position: relative;
  @import url("https://fonts.googleapis.com/css?family=Pacifico");
  font-family: "Pacifico", cursive;
  p {
    font-size: 42px;
    display: inline-block;
    width: 50%;
    text-align: center;
    margin-top: 0;
    &.red {
      color: #b30619;
    }
    &.yellow {
      color: #c7c70d;
    }
  }
  .disc {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: 1s cubic-bezier(0.46, 0.03, 0.52, 0.96);
    bottom: 52px;
    left: 0;
    right: 0;
    margin: auto;
    transform: translate3d(-180px, 0, 0);
    display: flex;
    align-items: center;
    background: #b30619;
    &:after {
      content: "";
      width: 25px;
      height: 25px;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      background: #ff354b;
      transition: 1s ease-in-out;
      -webkit-clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
      );
      clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    }
    &.yellow {
      background: #c7c70d;
      transform: translate3d(180px, 0, 0) rotate(-215deg);
      &:after {
        background: #fffe00;
      }
    }
  }
`;

const Winner = styled.div`
  opacity: ${props => (props.winner ? 1 : 0)};
  transition: .3s ease-in-out;
  position: absolute;
  text-align: center;
  background: white;
  color: dodgerblue;
  padding: 15px;
  font-size: 40px;
  border-top: 10px solid dodgerblue;
  border-bottom: 10px solid dodgerblue;
  left: 0;
  right: 0;
  margin: auto;
  top: 380px;
  width: 100%;
  box-shadow: 1px 1px 16px #7e7f80a1;
  z-index: ${props => (props.winner ? 99 : -1)};
  span{
    text-transform: capitalize;
    /* color: ${props => (props.winner ? "#ff354b" : "#fffe00")}; */
    /* text-shadow: ${props => (props.winnerColor === "red" ? "-2px 2px 5px #fffe00" : "-2px 2px 5px #c7c70d;")}; */
  }
  button{
    padding: 8px;
    color: dodgerblue;
    border: 5px solid dodgerblue;
    background: white;
    border-radius: 5px;
    position: absolute;
    font-size: 30px;
    right: 0;
    left: 0;
    margin: auto;
    width: 250px;
    cursor: pointer;
    bottom: -120px;
    font-family: 'Pacifico', cursive;
    box-shadow: 1px 1px 16px #7e7f80a1;
  }
`;
