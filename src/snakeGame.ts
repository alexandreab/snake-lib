import {Board} from './board';

class SnakeGame {
  _board: Board;
  constructor() {
    this._board = new Board(80, 40);
  }

  public get board() {
    return this._board;
  }
}

export default SnakeGame;
