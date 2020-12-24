const expect = require("chai").expect;

const polybius = require("../src/polybius");

describe("polybius", () => {
  it("should output a string when encoding", () => {
    const actual = polybius("string");
    expect(actual).to.be.a('string');
  });
  it("should return false if the string to be decoded minus whitespace isn't even", () => {
    const actual = polybius("12345 ", false);
    expect(actual).to.be.false;
  });
  it("should encode a single word", () => {
    const expected = "311144";
    const actual = polybius("cat");
    expect(actual).to.equal(expected);
  });
  it("should leave whitespace untouched", () => {
    const expected = "11 311144";
    const actual = polybius("a cat");
    expect(actual).to.equal(expected);
  });
  it("should be case insensitive", () => {
    const expected = "11 311144";
    const actual = polybius("A cAT");
    expect(actual).to.equal(expected);
  });
  it("should decode a simple string", () => {
    const expected = "cat";
    const actual = polybius("311144", false);
    expect(actual).to.equal(expected);
  });
  it("should decode 42 (i and j) as (i/j)", () => {
    const expected = "th(i/j)s (i/j)s (i/j)t";
    const actual = polybius("44324234 4234 4244", false);
    expect(actual).to.equal(expected);
  });
});