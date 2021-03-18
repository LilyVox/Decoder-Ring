const polybius = require("../src/polybius.js");
const expect = require("chai").expect;
// Write your tests here!

describe('PolybiusModule.js', ()=>{
    describe('Encoding', ()=>{
        it('should encode pairs properly.',()=>{
            let input = "thinkful";
            let actual = polybius(input);
            let expected = "4432423352125413";
            expect(actual).to.equal(expected);
        });
        it('should translate both i and j into 42',()=>{
            let input = "thjnkful";
            let actual = polybius(input);
            let expected = "4432423352125413";
            expect(actual).to.equal(expected);
        });
        it('should keep spaces and ignore capitals',()=>{
            let input = "hELLo world";
            let actual = polybius(input);
            let expected = "3251131343 2543241341";
            expect(actual).to.equal(expected);
        });
    describe('Decoding', ()=>{
        it('should translate 42 to both i and j',()=>{
            let input = "4432423352125413", encode = false;
            let actual = polybius(input, encode);
            let expected = "th(i/j)nkful";
            expect(actual).to.equal(expected);
        });
        it('should decode a message by translating pairs',()=>{
            let input = "4432423352125413", encode = false;
            let actual = polybius(input, encode);
            let expected = "th(i/j)nkful";
            expect(actual).to.equal(expected);
        });
        it('should return false if theres an odd number of digits',()=>{
            let input = "443242335212541", encode = false;
            let actual = polybius(input, encode);
            expect(actual).to.be.false;
        });
    });
    });
});