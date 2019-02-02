import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
// import ColumnContainer from "./ColumnContainer";
import Slot from "../components/Slot";
// import Column from "../components/Column";

class Board extends React.Component {

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

  render() {
    return (
      <BoardContainer>
        {this.renderSlots()}
      </BoardContainer>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

export default connect(mapStateToProps)(Board);

////////////CSS/////////////
const BoardContainer = styled.div`
  margin: 80px auto;
  text-align: center;
  border-radius: 32px;
  border: 10px solid dodgerblue;
  width: calc(140px * 7);
  overflow: hidden;
`;