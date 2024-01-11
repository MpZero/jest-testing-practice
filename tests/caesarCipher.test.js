const caesarCipher = require("../code/caesarCipher");

test("Caesar Cipher: key of 3", () => {
  expect(caesarCipher("howdy", 3)).toBe("KRZG,");
});
test("Caesar Cipher: key of 25", () => {
  expect(caesarCipher("howdy", 25)).toBe("CJR?T");
});

test("Caesar Cipher: wrapping from z to a", () => {
  expect(caesarCipher("Z to A", 5)).toBe("A YT F");
});

test("Caesar Cipher: punctuation test", () => {
  expect(caesarCipher(".,?!", 4)).toBe("ABCD");
});
