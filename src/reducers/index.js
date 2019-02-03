import { combineReducers } from "redux";
import board from "./board";
import turns from "./turns";
import winner from "./winner";

export default combineReducers({
  board,
  turns,
  winner
});
