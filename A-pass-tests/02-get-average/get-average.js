// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  console.log(average);
}

module.exports = average;
