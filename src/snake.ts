import {Coordinate} from './board';
class Snake {
  body: Coordinate[];
  constructor() {
    this.body = [new Coordinate(0, 0)];
  }
}

export default Snake;
