import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
// import ColumnContainer from "./ColumnContainer";
import Slot from "../components/Slot";
// import Column from "../components/Column";
import { newGame } from "../actions/new";


class Board extends React.Component {

  constructor(props) {
    super(props);
  } 

  renderSlots(){
    const slots = [];
    for(let y = 5; y >= 0; y--){
      const row = [];

      for(let x = 0; x < 7; x++){
        row.push(<Slot key={x} x={x} y={y} />)
      }
      slots.push(<div key={y} className='row'>{row}</div>)
    }
    return slots
  }

  startGame(){
    const { dispatch } = this.props;
    dispatch(newGame());
  }

  render() {
    return (
      <Wrapper>
        <BoardContainer winner={this.props.winner.toString() !== ''}>
          {this.renderSlots()}
        </BoardContainer>
        <Winner winner={this.props.winner.toString() !== ''}>The Winner is 
          <span>{' '}{this.props.winner.toString()}!</span>
          <button onClick={() => this.startGame()}>NEW GAME</button>
        </Winner>
        {/* <Winner winner={this.props.tie}>It's a Tie</Winner> */}
      </Wrapper>
    );
  }
}

const stateToProps = state => {
  return {
    winner: state.board.winner,
    tie: state.board.tie
  } 
}

export default connect(stateToProps)(Board);

////////////CSS/////////////
const Wrapper = styled.div`
  position: relative;
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
`;

const Winner = styled.div`
  opacity: ${props => (props.winner ? 1 : 0)};
  transition: .5s ease-in-out;
  position: absolute;
  text-align: center;
  background: white;
  color: dodgerblue;
  padding: 15px;
  font-size: 40px;
  font-family: 'Josefin Sans', sans-serif;
  border-top: 10px solid dodgerblue;
  border-bottom: 10px solid dodgerblue;
  left: 0;
  right: 0;
  margin: auto;
  top: 380px;
  width: 100%;
  box-shadow: 1px 1px 16px #7e7f80a1;
  span{
    text-transform: uppercase;
    /* color: ${props => (props.winner ? '#ff354b' : '#fffe00')}; */
    /* text-shadow: ${props => (props.winner === 'red' ? '-2px 2px 5px #fffe00' : '-2px 2px 5px #c7c70d;')}; */
  }
  button{
    padding: 8px;
    text-transform: uppercase;
    color: dodgerblue;
    border: 3px solid dodgerblue;
    background: white;
    border-radius: 5px;
    position: absolute;
    font-size: 30px;
    right: 0;
    left: 0;
    margin: auto;
    width: 210px;
    cursor: pointer;
    bottom: -90px;
  }
`;

const BoardContainer = styled.div`
  pointer-events: ${props => (props.winner ? 'none' : 'all')};
  margin: 80px auto;
  text-align: center;
  border-radius: 32px;
  border: 10px solid dodgerblue;
  width: calc(140px * 7);
  overflow: hidden;
`;