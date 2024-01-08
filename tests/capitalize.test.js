const capitalize = require("../code/capitalize");

test("The string is capitalized", () => {
  expect(capitalize("word")).toBe("Word");
});
