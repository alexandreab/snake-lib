class Coordinate {
  posX: number;
  posY: number;
  constructor(x: number, y: number) {
    this.posX = x;
    this.posY = y;
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
