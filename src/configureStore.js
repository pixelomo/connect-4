import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducers/index";
import { Iterable } from "immutable";

let createStoreWithMiddleware;
if (process.env.RAILS_ENV === "production" ) {
  // production
  createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    //storageMiddleware
  )(createStore);

  // disable console
  console = {};
  console.log = () => {};
  console.error = () => {};
  console.warn = () => {};
} else {
  // To deal with immutable to chrome console
  const loggerMiddleware = createLogger({
    stateTransformer: state => {
      let newState = {};

      for (var i of Object.keys(state)) {
        if (Iterable.isIterable(state[i])) {
          newState[i] = state[i].toJS();
        } else {
          newState[i] = state[i];
        }
      }
      return newState;
    }
  });

  createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    //storageMiddleware,
    loggerMiddleware
  )(createStore);
}

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
