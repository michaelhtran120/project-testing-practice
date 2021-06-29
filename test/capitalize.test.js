const { it, expect } = require("@jest/globals");
const capitalizeString = require("../code/capitalize.js");

it("capitalize first letter of string", () => {
  expect(capitalizeString("hello")).toBe("Hello");
});

it("no string", () => {
  expect(capitalizeString("")).toBe("");
});
