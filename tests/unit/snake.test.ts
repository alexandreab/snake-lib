import Snake from '../../src/snake';
import {InvalidPosition} from '../../src/errors';

test('Snake instantiation', () => {
  const snake = new Snake(0, 0);
  expect(snake).not.toBe(undefined);
});

test('Snake representation', () => {
  const snake = new Snake(0, 0);
  expect(snake.toString()).toBe('[[0,0]]');
});

test('Snake grow', () => {
  const snake = new Snake(5, 5);
  snake.grow('up');
  expect(snake.toString()).toBe('[[5,5],[5,4]]');
  snake.grow('right');
  expect(snake.toString()).toBe('[[5,5],[5,4],[6,4]]');
  snake.grow('down');
  expect(snake.toString()).toBe('[[5,5],[5,4],[6,4],[6,5]]');
  snake.grow('down');
  expect(snake.toString()).toBe('[[5,5],[5,4],[6,4],[6,5],[6,6]]');
  snake.grow('left');
  expect(snake.toString()).toBe('[[5,5],[5,4],[6,4],[6,5],[6,6],[5,6]]');
});

test('Snake can not grow to an invalid position', () => {
  const snake = new Snake(5, 5);
  snake.grow('right');
  expect(snake.toString()).toBe('[[5,5],[6,5]]');
  expect(() => snake.grow('left')).toThrow(InvalidPosition);
  expect(snake.toString()).toBe('[[5,5],[6,5]]');
});
