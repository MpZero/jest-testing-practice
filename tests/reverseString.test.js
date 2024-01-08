const reverseString = require("../code/reverseString");

test("The string is reversed", () => {
  expect(reverseString("Word")).toBe("droW");
});
