let convertToNewRoman = require("./convert-to-new-roman");

test("returns IV if passed 4 as an argument", function () {
  // Arrange
  let input = 4
  let expected = "IV"
  // Act
 const output = convertToNewRoman(input)
  // Assert
  expect(output).toEqual(expected)
});



test("returns IX if passed 9 as an argument", function () {
  // Arrange
  let input = 9;
  let expected = "IX";
  // Act
  const output = convertToNewRoman(input);
  // Assert
  expect(output).toEqual(expected);
});