function capitalizeString(str) {
  if (!str.length) {
    return "";
  } else {
    const string = str[0].toUpperCase() + str.slice(1);
    return string;
  }
}

module.exports = capitalizeString;
