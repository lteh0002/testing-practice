const reverseString = require('./reverseString.js');

test('takes a string and returns it reverse', () => {
  expect(reverseString('Hello, World!')).toBe('!dlroW ,olleH');
});

test('takes a string and returns it reverse', () => {
  expect(reverseString('How much wood would a woodchuck chuck if a woodchuck could chuck wood?')).toBe('?doow kcuhc dluoc kcuhcdoow a fi kcuhc kcuhcdoow a dluow doow hcum woH');
});
