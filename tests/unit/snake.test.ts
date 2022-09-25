import Snake from '../../src/snake';

test('Snake instantiation', () => {
  const snake = new Snake();
  expect(snake).not.toBe(undefined);
});
