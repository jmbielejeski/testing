const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz function tests', () => {

  // test input divisible by 3
  test('should take input number and return "Fizz"', () => {
    const result = fizzBuzz(9);

    expect(result).toBe("Fizz");
  })
  
  // test input divisible by 5
  test('should take input number and return "Buzz"', () => {
    const result = fizzBuzz(10);

    expect(result).toBe("Buzz");
  })
  
  // test input divisible by 3
  test('should take input number and return "FizzBuzz"', () => {
    const result = fizzBuzz(30);

    expect(result).toBe("FizzBuzz");
  })
  
  // test input not divisible by 3, 5, or 15
  test('should take input number and return that number', () => {
    const result = fizzBuzz(37);

    expect(result).toBe(37);
  })

  // input is a number as a string should work
  test('should take input string number and return that "Fizz"', () => {
    const result = fizzBuzz("18");

    expect(result).toBe("Fizz")
  })

  // input undefined should return an error
  test('should return an error', () => {
    expect(() => {
      fizzBuzz();
    }).toThrow(`Please input a number`)
  })

})
