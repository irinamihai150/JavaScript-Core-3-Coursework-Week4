let verify = require("./password");

test(" return passwrod rejected sif password is less than 8", function () {
  //arrange
  let input = "monkey";
  let expected = "Password rejected";
  //act
  let output = verify(input);
  //assert
  expect(output).toEqual(expected);
});


test(" return password rejected if password is null", function () {
  //arrange
  let input = null;
  let expected = "Password rejected";
  //act
  let output = verify(input);
  //assert
  expect(output).toEqual(expected);
});



test(" return password rejected if password does not contain uppercase", function () {
  //arrange
  let input = "monkey";
  let expected = "Password rejected";
  //act
  let output = verify(input);
  //assert
  expect(output).toEqual(expected);
});


test("return password rejected if password is does not have a number", function () {
  //arrange
  let input = "monkey2";
  let expected = "Password rejected";
  //act
  let output = verify(input);
  //assert
  expect(output).toEqual(expected);
});