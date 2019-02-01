import React from "react";
import styled from "styled-components";
import Slot from "./Slot";

class Column extends React.Component {
  render() {
    return (
      <Col onClick={() => this.props.onClickColumn()}>
        <Slot position={5}></Slot>
        <Slot position={4}></Slot>
        <Slot position={3}></Slot>
        <Slot position={2}></Slot>
        <Slot position={1}></Slot>
        <Slot position={0}></Slot>
      </Col>
    );
  }
}

export default Column;

////////////////////////// CSS //////////////////////////
const Col = styled.div`
    width: 140px;
    padding: 5px 0;
    background: dodgerblue;
`;
