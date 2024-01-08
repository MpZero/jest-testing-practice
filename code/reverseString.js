function reverseString(string) {
  let strSplit = string.split("");
  let strReversed = strSplit.reverse();
  let strJoined = strReversed.join("");
  return strJoined;
}

module.exports = reverseString;
