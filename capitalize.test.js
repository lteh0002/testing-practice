const capitalize = require('./capitalize.js');

test('capitalize the first character', () => {
  expect(capitalize('testing')).toBe('Testing');
});

test('capitalize the first character', () => {
  expect(capitalize('Testing')).toBe('Testing');
});
