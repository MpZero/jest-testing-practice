const calculator = require("../code/calculator");

test("Addition works", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Subtraction works", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("Multiplication works", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("Division works", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
