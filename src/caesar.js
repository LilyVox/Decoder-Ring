const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    // we should return false if our shift is invalid.
    if (shift > 25 || shift < -25 || shift === 0) return false;
    // decoding would mean shifting the opposite direction.
    let realShift = encode ? shift : -1 * shift;
    let target = [...input.toLowerCase()]; // our target array
    let output = []; // outbound array
    const theAlphabet = [..."abcdefghijklmnopqrstuvwxyz"]; // the abcs 
    target.forEach((char, i) => { 
      if (theAlphabet.indexOf(char) === -1 || char === " ") { 
        output[i] = char; // if the letter isn't found in our alphabet, send it back.
        return;
      }// but if it is, we'll take the index of it, add the shift-
      // add the alphabet length, then modulo by the length to wrap back around to 0.
      output[i] = theAlphabet[(theAlphabet.indexOf(char) + realShift + theAlphabet.length) % theAlphabet.length];
    });
    return output.join("");
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
