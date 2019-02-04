import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Slot from "../components/Slot";
import Score from "../components/Score";
import { newGame } from "../actions/new";
import PropTypes from "prop-types";

class Board extends React.Component {
  constructor(props) {
    super(props);
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
          It&#39;s a Tie
          <button onClick={() => this.startGame()}>New Game</button>
        </Winner>
        <Score score={this.props.score} player={this.props.player}/>
      </Wrapper>
    );
  }
}

const stateToProps = state => {
  return {
    winner: state.winner,
    player: state.player,
    board: state.board,
    score: state.score
  };
};

Board.propTypes = {
  winner: PropTypes.string,
  player: PropTypes.string,
  dispatch: PropTypes.func,
  score: PropTypes.object,
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