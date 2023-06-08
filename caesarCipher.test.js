const caesarCipher = require('./caesarCipher');

test('Caesar Cipher for Hello, World!', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Caesar Cipher for abc XYZ', () => {
  expect(caesarCipher('abc XYZ', -1)).toBe('zab WXY');
});

test('Caesar Cipher for ', () => {
  expect(caesarCipher('The quick brown fox!', 5)).toBe('Ymj vznhp gwtbs ktc!');
});
