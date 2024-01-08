function capitalize(string) {
  let letter = string.slice(0, 1);
  let capitalLetter = letter.toUpperCase();
  let restOfTheString = string.slice(1);

  return capitalLetter + restOfTheString;
}

module.exports = capitalize;
