function caesarCipher(string, key) {
  const alphabet = ".,?!abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i).toLowerCase();
    let index = alphabet.indexOf(char);
    if (index === -1) {
      result += char;
    } else {
      let shiftedIndex = (index + key) % alphabet.length;
      if (shiftedIndex < 0) {
        shiftedIndex += alphabet.length;
      }
      result += alphabet.charAt(
        shiftedIndex < 0 ? shiftedIndex + alphabet.length : shiftedIndex
      );
    }
  }
  return result.toUpperCase();
}

module.exports = caesarCipher;
