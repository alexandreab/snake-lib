import SnakeGame from '../../src/snakeGame';
import {Board} from '../../src/board';

test('SnakeGame instantiation', () => {
  const snake = new SnakeGame();
  expect(snake).not.toBe(undefined);
});

test('SnakeGame board property', () => {
  const game = new SnakeGame();
  const board = game.board;
  expect(board).not.toBe(undefined);
  expect(board).toBeInstanceOf(Board);
});
