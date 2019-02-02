import { combineReducers } from "redux";
import player from "./player";
import board from "./board";

export default combineReducers({
  player,
  board
});
