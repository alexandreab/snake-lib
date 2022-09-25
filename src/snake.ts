import {Coordinate} from './board';
import {InvalidPosition, InvalidParameter} from './errors';

class Snake {
  _body: Coordinate[];

  constructor(posX: number, posY: number) {
    this._body = [new Coordinate(posX, posY)];
  }

  grow(direction: string): void {
    const head = this._body[this._body.length - 1];
    let newHead: Coordinate;
    switch (direction) {
      case 'up':
        newHead = new Coordinate(head.posX, head.posY - 1);
        break;
      case 'down':
        newHead = new Coordinate(head.posX, head.posY + 1);
        break;
      case 'left':
        newHead = new Coordinate(head.posX - 1, head.posY);
        break;
      case 'right':
        newHead = new Coordinate(head.posX + 1, head.posY);
        break;
      default:
        throw new InvalidParameter();
    }
    if (this.collides(newHead)) {
      throw new InvalidPosition();
    }

    this._body.push(newHead);
  }

  collides(position: Coordinate): boolean {
    return this._body.some(e => e.isEqualTo(position));
  }

  public toString(): string {
    return `[${this._body.map(e => e.toString()).join(',')}]`;
  }
}

export default Snake;
