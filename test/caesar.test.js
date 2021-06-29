const caesar = require("../code/caesar.js");

it("caesar-1", () => {
  expect(caesar("hello")).toBe("ifmmp");
});

it("caesar-2 ignore case-sensitive", () => {
  expect(caesar("Michael")).toBe("njdibfm");
});

it("caesar-3 spaces", () => {
  expect(caesar("Good Bye")).toBe("hppe czf");
});

it("caesar-4 punctuation", () => {
  expect(caesar("Hi!, How are you?")).toBe("ij!, ipx bsf zpv?");
});

it("caesar-4 entire alphabet", () => {
  expect(caesar("abcdefghijklmnopqrstuvwxyz")).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
});
