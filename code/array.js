function arrayAnalysis(arr) {
  const obj = {
    average: average(arr),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
  return obj;
}

function average(arr) {
  const sumTotal = arr.reduce((acc, cur) => {
    return acc + cur;
  });
  return sumTotal / arr.length;
}

module.exports = arrayAnalysis;
