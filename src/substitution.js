const substitutionModule = (function () {
	// you can add any code you want within this function scope

	function substitution(input, alphabet = "", encode = true) {
		if (alphabet.trim().length !== 26) return false; // if alphabet.length isn't 26 return false
		try {
			// We reduce through the given alphabet to be sure alphabet doesn't have dups
			[...alphabet].reduce((chkLetts, bet) => {
				if (chkLetts && chkLetts.indexOf(bet) !== -1) throw error; // invalid alphabet!
				return chkLetts + bet;
			});
		} catch (e) {
			return false; // invalid alphabet!
		}
		// building our cipher
		const theAlphabet = "abcdefghijklmnopqrstuvwxyz".toLowerCase(); // the OG ABCs
		const sourceAlphabet = encode ? theAlphabet : alphabet.toLowerCase(); // what we're de/en+coding determines the input's source alphabet
		const targetAlphabet = encode ? alphabet.toLowerCase() : theAlphabet; // encode=true gives defaults,=false assigns them 'backwards'
		const newAlphabet = {};
		for (let i = 0; i < alphabet.length; i++) {
			// we make a newAlphabet obj by connecting our sourceAlphabet to a target alphabet.
			newAlphabet[sourceAlphabet[i]] = targetAlphabet[i];
		}
		// start translation
		let output = "";
		const lcInput = input.toLowerCase();
		for (let i = 0; i < input.length; i++) {
			if (/[\s]/.test(lcInput[i])) {
				// we'll end this loop early if we get a space.
				output += " ";
				continue;
			} else if (!newAlphabet[lcInput[i]]) {
				// if it's not a space, is it in the alphabet?
				output += lcInput[i]; // if it's not in there, we'll send it to output
			} else {
				output += newAlphabet[lcInput[i]]; // here we add our converted letter to the output.
			}
		}
		return output;
	}

	return {
		substitution,
	};
})();

module.exports = substitutionModule.substitution;
