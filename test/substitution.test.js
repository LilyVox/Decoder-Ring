const substitution = require("../src/substitution.js"); // substitution(input, alphabet, encode)
const expect = require("chai").expect;
// if alphabet.length < 26 return false
describe('substitution()', ()=>{
    describe('Error handling', ()=>{
        it('Returns false if the alphabet is incomplete (<26chars)',()=>{
            let input = "thinkful";
            let alphabet = "xoyqmcgrukswaflnthdjpzbev";
            let actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        })
        it('Returns false if the substitution alphabet is missing',()=>{
            let input = "Duplicatetranslation";
            let actual = substitution(input);
            expect(actual).to.be.false;
        })
        it('Returns false if the alphabet has any duplicates',()=>{
            let input = "Duplicatetranslation";
            let alphabet = "xoyqggcgrukswaflnthdjpzibe";
            let actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        })
    })
    describe('Encoding', ()=>{
        it('Encodes a message using a given substitution alphabet',()=>{
            let input = "thinkful";
            let alphabet = "xoyqmcgrukswaflnthdjpzibev";
            let actual = substitution(input, alphabet, true);
            let expected = "jrufscpw";
            expect(actual).to.equal(expected);
        })
        it('Handles capital letters, returning lowercase ones',()=>{
            let input = "ThiNkFul";
            let alphabet = "xoyqmcgrukswaflnthdjpzibev";
            let actual = substitution(input, alphabet, true);
            let expected = "jrufscpw";
            expect(actual).to.equal(expected);
        })
        it('Preserves spaces in translation',()=>{
            let input = "you are an excellent spy";
            let alphabet = "xoyqmcgrukswaflnthdjpzibev";
            let actual = substitution(input, alphabet, true);
            let expected = "elp xhm xf mbymwwmfj dne";
            expect(actual).to.equal(expected);
        })
        it('Works with any key, even with unique chars',()=>{
            let input = "message";
            let alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            let expected = "y&ii$r&";
            let actual = substitution(input, alphabet, true);
            expect(actual).to.equal(expected);
        })
        
    }) 
    describe('Decoding', ()=>{
        it('Decodes a message by using a given substitution alphabet',()=>{
            let input = "jrufscpw";
            let alphabet = "xoyqmcgrukswaflnthdjpzibev";
            let expected = "thinkful";
            let actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
        })
        it('Should work with any kind of key with unique chars',()=>{
            let input = "y&ii$r&";
            let alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            let expected = "message";
            let actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
        })
        it('Handles capital letters, returning lowercase ones',()=>{
            let input = "jruFsCpW";
            let alphabet = "xoyqmcgrukswaflnthdjpzibev";
            let actual = substitution(input, alphabet, false);
            let expected = "thinkful";
            expect(actual).to.equal(expected);
        })
        it('Preserves spaces',()=>{
            let input = "elp xhm xf mbymwwmfj dne";
            let alphabet = "xoyqmcgrukswaflnthdjpzibev";
            let expected = "you are an excellent spy";
            let actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);

        })
    })
})