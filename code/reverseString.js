function reverseString(str) {
  if (typeof str === "number") {
    convertedStr = str.toString().split("").reverse().join("");
    return convertedStr;
  } else {
    const reverseString = str.split("").reverse().join("");
    return reverseString;
  }
}

module.exports = reverseString;
