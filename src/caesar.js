function caesar(input, shift, encode = true) {
  if (!shift || shift > 25 || shift < -25) return false;
  if (!input.length) return "";

  // decoding changes the shift direction
  if (!encode) shift = -shift;
  input = input.toLowerCase();

  let text = "";
  for (let i = 0; i < input.length; i++) {
    text += asciiMap(input.charCodeAt(i), shift);
  }
  return text;
}

function asciiMap(char, shift) {
  // lower case ascii is from 97 to 122
  const a = 97;
  const z = 122;
  // if what's passed in is something outside of this ascii range then just return it
  if (char < a || char > z)  {
    return String.fromCharCode(char);
  } else {
    if (char + shift < a) {
      // if the char code falls below a loop around to z
      // 96 should equal 122
      return String.fromCharCode(z - ((a - (char + shift)) - 1));
      // if the char code goes above z loop around to a
      // 123 should equal 97
    } else if (char + shift > z) {
      return String.fromCharCode(a + ((char + shift) - z) - 1);
    } else {
      return String.fromCharCode(char + shift);
    }
  }
}

module.exports = { caesar, asciiMap };