import { combineReducers } from "redux";
import board from "./board";
import turns from "./turns";
import winner from "./winner";
import player from "./player";
import score from "./score";

export default combineReducers({
  board,
  turns,
  winner,
  player,
  score
});
