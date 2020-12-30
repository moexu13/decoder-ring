const referenceAlphabet = "abcdefghijklmnopqrstuvwxyz";

function substitution(input, alphabet, encode = true) {
  if (alphabet.length !== 26 || !alphabetIsComplete(alphabet)) return false;
  
  if (input && encode) {
    return encodeMessage(input.toLowerCase(), alphabet);
  }
  if(input && !encode) {
    return decodeMessage(input.toLowerCase(), alphabet);
  }
}

function alphabetIsComplete(alphabet) {
  // verify that each letter of the alphabet is present with no duplicates
  return [...alphabet].sort().join("") === [...referenceAlphabet].sort().join("");
}

function encodeMessage(input, alphabet) {
  let output = "";
  for(let i = 0; i < input.length; i++) {
    // any letters being passed in should be lower case (97 - 122 in ascii)
    // leave anything else as is
    const code = input.charCodeAt(i);
    if (code > 96 && code < 123) {
      // get index of character in alphabet
      let index = referenceAlphabet.indexOf(input[i]);
      // get character at same index in provided alphabet
      output += alphabet[index];
    } else {
      output += input[i];
    }
  }
  return output;
}

function decodeMessage(input, alphabet) {
  let output = "";
  for(let i = 0; i < input.length; i++) {
    // any letters being passed in should be lower case (97 - 122 in ascii)
    // leave anything else as is
    const code = input.charCodeAt(i);
    if (code > 96 && code < 123) {
      // find the index in the provided alpabet
      let index = alphabet.indexOf(input[i]);
      // then find the same index in the regular alphabet
      output += referenceAlphabet[index];
    } else {
      output += input[i];
    }
  }
  return output;
}

module.exports = substitution;