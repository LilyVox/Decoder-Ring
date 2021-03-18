// Write your tests here!
const caesarModule = require("../src/caesar.js");
const expect = require("chai").expect;

// it should decode and encode text properly 
describe('caesarModule()', ()=>{
    it('should decode and encode text properly.',()=>{
        let input = "abc", shift = 3;
        let actual = caesarModule(input, shift);
        let expected = "def";
        expect(actual).to.equal(expected);
    });
    it('should shift characters properly',()=>{
        let input = "abcdefghijklmnopqrstuvwxyz", shift = 12;
        let actual = caesarModule(input, shift);
        let expected = "mnopqrstuvwxyzabcdefghijkl";
        expect(actual).to.equal(expected);
    });
    it('should ignore capitals while keeping spaces and symbols.',()=>{
        let input = "BPQA qa I amkzmb umaaiom!", shift = 8;
        let actual = caesarModule(input, shift, false);
        let expected = "this is a secret message!";
        expect(actual).to.equal(expected);
    });
    it('should be able to encode as well as decode',()=>{
        let input = "ijklmn", shift = 8, encode = false;
        let actual = caesarModule(input, shift, encode);
        let expected = "abcdef";
        expect(actual).to.equal(expected);
    });

});