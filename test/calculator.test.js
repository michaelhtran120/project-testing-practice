const { add, subtract, multiply, divide } = require("../code/calculator.js");

it("addition-1", () => {
  expect(add(1, 1)).toBe(2);
});

it("addition-2", () => {
  expect(add(2, 4)).toBe(6);
});

it("addition-3", () => {
  expect(add(0, 1)).toBe(1);
});

it("subtract-1", () => {
  expect(subtract(5, 4)).toBe(1);
});

it("subtract-2", () => {
  expect(subtract(3, 4)).toBe(-1);
});

it("subtract-3", () => {
  expect(subtract(100, 0)).toBe(100);
});

it("multiply-1", () => {
  expect(multiply(2, 2)).toBe(4);
});

it("multiply-2", () => {
  expect(multiply(5, 20)).toBe(100);
});

it("multiply-3", () => {
  expect(multiply(1.5, 3)).toBe(4.5);
});

it("divide-1", () => {
  expect(divide(6, 3)).toBe(2);
});

it("divide-2", () => {
  expect(divide(10, 4)).toBe(2.5);
});

it("divide-3", () => {
  expect(divide(0, 1)).toBe(0);
});
