const grid = [
  {letter: "a", code: "11"},
  {letter: "b", code: "21"},
  {letter: "c", code: "31"},
  {letter: "d", code: "41"},
  {letter: "e", code: "51"},
  {letter: "f", code: "12"},
  {letter: "g", code: "22"},
  {letter: "h", code: "32"},
  {letter: "i", code: "42"},
  {letter: "j", code: "42"},
  {letter: "k", code: "52"},
  {letter: "l", code: "13"},
  {letter: "m", code: "23"},
  {letter: "n", code: "33"},
  {letter: "o", code: "43"},
  {letter: "p", code: "53"},
  {letter: "q", code: "14"},
  {letter: "r", code: "24"},
  {letter: "s", code: "34"},
  {letter: "t", code: "44"},
  {letter: "u", code: "54"},
  {letter: "v", code: "15"},
  {letter: "w", code: "25"},
  {letter: "x", code: "35"},
  {letter: "y", code: "45"},
  {letter: "z", code: "55"},
];

function polybius(input, encode = true) {
  // the letter codes are in pairs so a string to be decoded has to be even excluding whitespace
  if (!encode && input.replace(/\s/g, "").length % 2 !== 0) {  
    return false;
  }

  if (input && encode) {
    return encodeMessage(input.toLowerCase());
  }
  
  if (input && !encode) {
    return decodeMessage(input.toLowerCase());
  }
}

function encodeMessage(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    // any letters being passed in should be lower case (97 - 122 in ascii)
    // leave anything else as is
    const code = input.charCodeAt(i);
    if (code > 96 && code < 123) {
      output += grid.find(item => item.letter === input[i]).code;
    } else {
      output += input[i];
    }
  }
  return output;
}

function decodeMessage(input) {
  let output = "";
  // if the input contains spaces we don't want to use them when decoding
  let encoded = input.split(" ");
  encoded.forEach(chunk => {
    // split numbers into pairs for decoding
    let pairs = chunk.match(/\d{2}/g);
    pairs.forEach(pair => {
      // handle this special case separately
      if (pair === "42") {
        output += "(i/j)";
      // everything else can be looked up
      } else {
        const letter = grid.find(item => item.code === pair).letter;
        // if the pair isn't in the grid throw it away
        if (letter.length) {
          output += letter;
        }
      }
    });
    // put the spaces back in the simplest albeit clunkiest way
    output += " ";
  });
  // get rid of the extra whitespace due to the above clunkiness
  return output.trim();
}

module.exports = polybius;