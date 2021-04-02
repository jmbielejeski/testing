const sum = require('./sum.js');

// takes two arguments first is a string with a description of the test, second is function
test('should add two numbers together and return sum', () => {
  // this is where the test code goes
  const result = sum(83, 6);

  // built in functions from jest
  expect(result).toBe(89);
});

test('should add positive to negative', () => {
  const result = sum(83, -6);

  expect(result).toBe(77);
});

test('should add two negative numbers', () => {
  const result = sum(-83, -6);

  expect(result).toBe(-89);
});

test('should fail if I give it one argument', () => {
  expect(() => {
    sum(83);
  }).toThrow(`You're missing an argument`)
});

test('should convert number strings to numbers', () => {
  const result = sum("9", "3");

  expect(result).toBe(12);
});