function convertToOldRoman(n) {
  let result = "";
  let tens = Math.floor(n / 10);
  let ones = n % 5;

  for (let i = 0; i < tens; i++) {
    result += "X";
  }
  let wantFive = Math.floor(n / 5) % 2;
  if (wantFive === 1) {
    result += "V";
  }
  for (let i = 0; i < ones; i++) {
    result += "I";
  }
  return result;
}

module.exports = convertToOldRoman;
