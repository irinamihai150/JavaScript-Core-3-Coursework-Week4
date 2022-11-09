function convertToNewRoman(n) {
  let result = "";
  let tens = Math.floor(n / 10);

  console.log(tens);
  let ones = n % 5;
  if (n % 10 === 9) {
    result += "IX";
  } else if (ones === 4) {
    result += "IV";
  } else {
    console.log(ones);
    for (let i = 0; i < tens; i++) {
      result += "X";
    }
    let wantFive = Math.floor(n / 5) % 2;
    console.log(wantFive);
    if (wantFive === 1) {
      result += "V";
    }
    for (let i = 0; i < ones; i++) {
      result += "I";
    }
  }

  return result;
}

module.exports = convertToNewRoman;
