import React from "react";
import styled from "styled-components";
import Column from "../components/Column";

class ColumnContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ColContainer>
        <Column />
      </ColContainer>
    );
  }
}

export default ColumnContainer;

const ColContainer = styled.div`
    display: inline-block;
    vertical-align: top;
`;