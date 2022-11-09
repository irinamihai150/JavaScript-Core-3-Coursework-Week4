let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  let input = 1;
  let expected = "I";
  const output = convertToOldRoman(input);
  expect(output).toEqual(expected);
});

test("return III if i passed 3 as an argument", function () {
  let input = 3;
  let expected = "III";
  const output = convertToOldRoman(input);
  expect(output).toEqual(expected);
});
test("return V if i passed 5 as an argument", function () {
  let input = 5;
  let expected = "V";
  const output = convertToOldRoman(input);
  expect(output).toEqual(expected);
});

test("return X if i passed 10 as an argument", function () {
  let input = 10;
  let expected = "X";
  const output = convertToOldRoman(input);
  expect(output).toEqual(expected);
});

test("return XV if i passed 15 as an argument", function () {
  let input = 15;
  let expected = "XV";
  const output = convertToOldRoman(input);
  expect(output).toEqual(expected);
});

test("return XVIII if i passed 18 as an argument", function () {
  let input = 18;
  let expected = "XVIII";
  const output = convertToOldRoman(input);

  expect(output).toEqual(expected);
});
test("return XXII   if i passed 22 as an argument", function () {
  let input = 22;
  let expected = "XXII";
  const output = convertToOldRoman(input);
  expect(output).toEqual(expected);
});

test("return VII   if i passed 7 as an argument", function () {
  let input = 7;
  let expected = "VII";
  const output = convertToOldRoman(input);
  expect(output).toEqual(expected);
});
