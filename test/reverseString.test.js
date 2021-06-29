const reverseString = require("../code/reverseString.js");

it("reversing string-1", () => {
  expect(reverseString("hello")).toBe("olleh");
});

it("reversing string-2", () => {
  expect(reverseString("Hello World")).toBe("dlroW olleH");
});

it("reversing string-3", () => {
  expect(reverseString(12345)).toBe("54321");
});
