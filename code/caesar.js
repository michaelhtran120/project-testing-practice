function caesar(str) {
  const newStrArr = [];
  str
    .toLowerCase()
    .split("")
    .forEach((letter) => {
      if (letter === " " || regexPunctuationTest(letter)) {
        newStrArr.push(letter);
      } else {
        newStrArr.push(caesarAlp[alp.indexOf(letter)]);
      }
    });
  return (newStr = newStrArr.join(""));
}
function regexPunctuationTest(letter) {
  return /[^a-z]/.test(letter);
}

const alp = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const caesarAlp = [
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "a",
];
module.exports = caesar;
