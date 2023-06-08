const calculator = require('./calculator');

test('calculate number by sum', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('calculate number by subtract', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});
