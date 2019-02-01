import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import {
  addCourse,
  removeCourse,
  addTeacher,
  addGender,
  removeGender,
  toggleJapaneseSpeaker,
  addDayOfWeek,
  removeDayOfWeek,
  setStartDate,
  setEndDate,
  setStartTime,
  setEndTime,
  selectFilters,
  removeFilter,
  clearFilters
} from "../actions/filter";
import ColumnContainer from "./ColumnContainer";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    console.log(this.props);
  }

  render() {
    return (
      <BoardContainer>
        <ColumnContainer column={0}/>
        <ColumnContainer column={1}/>
        <ColumnContainer column={2}/>
        <ColumnContainer column={3}/>
        <ColumnContainer column={4}/>
        <ColumnContainer column={5}/>
        <ColumnContainer column={6}/>
      </BoardContainer>
    );
  }
}

function mapStateToProps(state, ownProps) {

  return {
    
  };
}

export default connect(mapStateToProps)(Board);

////////////CSS/////////////
const BoardContainer = styled.div`
  margin: 80px auto;
  text-align: center;
  border-radius: 32px;
  border: 1px solid dodgerblue;
  width: calc(140px * 7);
  overflow: hidden;
`;