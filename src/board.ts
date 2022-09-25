class Coordinate {
  posX: number;
  posY: number;
  constructor(x: number, y: number) {
    this.posX = x;
    this.posY = y;
  }

  isEqualTo(c: Coordinate): boolean {
    return this.posX === c.posX && this.posY === c.posY;
  }

  toString(): string {
    return `[${this.posX},${this.posY}]`;
  }
}

class Board {
  sizeX: number;
  sizeY: number;
  board: number[][];

  constructor(sizeX: number, sizeY: number) {
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.board = new Array(sizeY)
      .fill(false)
      .map(() => new Array(sizeX).fill(0));
  }
}

export {Board, Coordinate};
