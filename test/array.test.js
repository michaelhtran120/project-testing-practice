const arrayAnalysis = require("../code/array.js");

it("array-test-1", () => {
  expect(arrayAnalysis([0, 1, 2, 3, 4])).toStrictEqual({
    average: 2,
    min: 0,
    max: 4,
    length: 5,
  });
});

it("array-test-2", () => {
  expect(arrayAnalysis([2, 2, 2, 2, 2, 2, 2])).toStrictEqual({
    average: 2,
    min: 2,
    max: 2,
    length: 7,
  });
});

it("array-test-3", () => {
  expect(arrayAnalysis([8, 4, 9])).toEqual({
    average: 7,
    min: 4,
    max: 9,
    length: 3,
  });
});

it("array-test-3", () => {
  expect(arrayAnalysis([0, 1, 2, 0, 1, 2])).toEqual({
    average: 1,
    min: 0,
    max: 2,
    length: 6,
  });
});
