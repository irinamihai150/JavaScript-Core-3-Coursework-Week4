function add(rawNumbers) {
  let numbers = rawNumbers.split(",");
  let negativeNumbers = [];
  let result = 0;
  for (const number of numbers) {
    if (number < 0) {
      negativeNumbers.push(number);
    }
    if (number <= 1000) {
      result += Number(number);
    }
  }
  if (negativeNumbers.length > 0) {
    throw "negatives not allowed: " + negativeNumbers.join(" ");
  }
  return result;
}

module.exports = add;
