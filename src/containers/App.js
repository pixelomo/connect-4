/* eslint-disable import/no-named-as-default */
import Board from "./Board";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

class App extends React.Component {
  render() {
    return (
      <Board/>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  // sendSelected: PropTypes.function
};

export default hot(module)(App);
