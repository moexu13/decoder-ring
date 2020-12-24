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
    // leave spaces as is
    if (input[i] === " ") {
      output += input[i];
    } else {
      // get index of character in alphabet
      // get character at same index in provided alphabet
      let index = referenceAlphabet.indexOf(input[i]);
      output += alphabet[index];
    }
  }
  return output;
}

function decodeMessage(input, alphabet) {
  let output = "";
  for(let i = 0; i < input.length; i++) {
    // leave spaces as is
    if (input[i] === " ") {
      output += input[i];
    } else {
      // find the index in the provided alpabet
      // then find the same index in the regular alphabet
      let index = alphabet.indexOf(input[i]);
      output += referenceAlphabet[index];
    }
  }
  return output;
}

module.exports = substitution;
