import React from "react";
import styled from "styled-components";
import Column from "../components/Column";
import { connect } from "react-redux";

class ColumnContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        slots: [0,0,0,0,0,0]
    }
  }

  onClick(){
    console.log(this.props.column)
    this.setState({
        slots: [1,0,0,0,0,0]
    })
  }

  render() {
    return (
      <ColContainer column={this.props.column} slots={this.state.slots}>
        <Column onClickColumn={() => this.onClick()} />
      </ColContainer>
    );
  }
}
function mapStateToProps(state, ownProps) {
    return {}
}

export default connect(mapStateToProps)(ColumnContainer);

const ColContainer = styled.div`
    display: inline-block;
    vertical-align: top;
`;