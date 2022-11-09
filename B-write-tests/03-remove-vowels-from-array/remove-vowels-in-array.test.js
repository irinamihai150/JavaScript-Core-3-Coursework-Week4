let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  //arange
  let arr = ["irina", "etza", "daniel"];
  //act
  let result = removeVowelsFromWords(arr);
  //assert
  let expectedResult = ["rn", "tz", "dnl"];
  expect(result).toEqual(expectedResult);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
