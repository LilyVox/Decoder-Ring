// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
	const polybiusSqr = [
		// o === polybius[x+1][y+1]
		["a", "b", "c", "d", "e"],
		["f", "g", "h", "(i/j)", "k"],
		["l", "m", "n", "o", "p"],
		["q", "r", "s", "t", "u"],
		["v", "w", "x", "y", "z"],
	];
	// this func translates the polybius square for us later.
	function polybiusHandler(letter = 0) { 
		if (/\W/gi.test(letter)) return " "; // this makes sure we're not touching symbols or spaces, sending them back.
		// start decode
		if (typeof letter === "number") {
			return polybiusSqr[(letter % 10) - 1][Math.floor(letter / 10) - 1];
		}
		// start encode.
		let oar = -1;
		for (let row = 0; row < polybiusSqr.length; row++) {
			for (let column = 0; column < polybiusSqr[row].length; column++) {
				if (polybiusSqr[row][column].indexOf(letter) !== -1) {
					//this is where we look up our letter.
					oar = "" + (column + 1) + (row + 1); // this math puts the numbers in the right places
					break;
				}
			}
		}
		return "" + oar;
	}
	function polybius(input, encode = true) {
		if (encode) {
			let dirtyOutput = input
				.toLowerCase()
				.split("")
				.map(polybiusHandler);
			return dirtyOutput.join("");
		} else {
			// start our decode checks
			let lCheck = [...input.toLowerCase()] // we're going to check for pairs of digits as input
				.filter((ele) => ele !== " "); // split the input var and deletes spaces to check JUST pairs of nums
			if (lCheck.length % 2) return false; // if there aren't only pairs of numbers then lCheck%2 returns 1.
			//start decoding
			let output = "";
			for (let pos = 0; pos < input.length; ) {
				// we increment in the loop body to have more control over the pos
				if (input.charAt(pos) === " ") {
					// maintain spaces
					output += " ";
					pos++;
				} else {
					//if it's not a space, we're taking a 2 digit slice out of input and uncoding it.
					output += polybiusHandler(parseInt(input.substr(pos, 2))); // then add the letter to output.
					pos += 2; // and increment by 2 since we're done with the next two digits.
				}
			}
			return output;
		}
	}
	return {
		polybius,
	};
})();

module.exports = polybiusModule.polybius;
