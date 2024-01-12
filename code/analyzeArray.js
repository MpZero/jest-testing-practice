function analyzeArray(arr) {
  const length = arr.length;
  const average = arr.reduce((a, b) => a + b) / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const obj = {
    average: average,
    min: min,
    max: max,
    length: length,
  };
  return obj;
}

module.exports = analyzeArray;
