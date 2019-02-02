import React from "react";
import { render } from 'react-dom';
import configureStore from "./configureStore";
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import Board from "./containers/Board";
import App from "./containers/App";
require('./favicon.ico'); 
const store = configureStore();

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NewRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}