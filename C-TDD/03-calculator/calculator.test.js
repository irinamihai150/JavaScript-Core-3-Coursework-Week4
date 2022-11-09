let add = require("./calculator");

test("add empty string return zero", function () {
  let input = "";
  let result = add(input);
  expect(result).toEqual(0);
});

test("add string return number", function () {
  let input = "5";
  let result = add(input);
  expect(result).toEqual(5);
});

test("add two number return sum", function () {
  let input = "3,6";
  let result = add(input);
  expect(result).toEqual(9);
});

test("Add unknown numbers", function () {
  let input = "1,2,3,4,5,6,7,8,9,10";
  let result = add(input);
  expect(result).toEqual(55);
});

test("ignore numbers greater than 1000", function () {
  let input = "2, 1001";
  let result = add(input);
  expect(result).toEqual(2);
});

test("negative numbers with throw", function () {
  let input = "-2,-1";
  let result = add(input);

  expect(function () {
    add(input);
  }).toThrow();
});

test("ignore numbers greater than 1000", function () {
  let input = "2, 1000";
  let result = add(input);

  expect(result).toEqual(1002);
});
