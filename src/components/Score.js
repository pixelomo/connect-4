import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

class Score extends React.Component {
  render() {
    return (
      <ScoreComponent player={this.props.player} score={this.props.score}>
        <div className="red player-wrapper">
          <p>Red</p>
          <p>{this.props.score.red}</p>
        </div>
        <div className="disc-wrapper">
          <div className={this.props.player === "red" ? "red disc" : "yellow disc"} />
        </div>
        <div className="yellow player-wrapper">
          <p>Yellow</p>
          <p>{this.props.score.yellow}</p>
        </div>
      </ScoreComponent>
    );
  }
}

Score.propTypes = {
  winner: PropTypes.string,
  player: PropTypes.string,
  score: PropTypes.object,
};

export default Score;

////////////////////////// CSS //////////////////////////
const ScoreComponent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    font-size: 42px;
    margin-bottom: 0;
    text-align: center;
    margin-top: 0;
    line-height: 1;
  }
  .red p {
    color: #b30619;
    padding-right: 20px;
  }
  .yellow p {
    color: #c7c70d;
    padding-left: 20px;
  }
  .disc {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: 1s cubic-bezier(0.46, 0.03, 0.52, 0.96);
    transform: translate3d(-650%, 0, 0);
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
      transform: translate3d(650%, 0, 0) rotate(-215deg);
      &:after {
        background: #fffe00;
      }
    }
  }
`;
