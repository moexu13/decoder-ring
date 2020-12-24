const expect = require("chai").expect;

const { caesar, asciiMap } = require("../src/caesar");

describe("caeser", () => {
  it("returns false if shift value is missing", () => {
    const actual = caesar();
    expect(actual).to.be.false;
  });
  it("returns false if shift value is 0", () => {
    const actual = caesar("", 0);
    expect(actual).to.be.false;
  });
  it("returns false if shift value is greater than 25", () => {
    const actual = caesar("", 26);
    expect(actual).to.be.false;
  });
  it("returns false if shift value is less than -25", () => {
    const actual = caesar("", -27);
    expect(actual).to.be.false;
  });
  it("should shift a provided string by the shift amount", () => {
    const expected = "ibm";
    const actual = caesar("hal", 1);
    expect(actual).to.equal(expected);
  });
  it("should be case insensitive", () => {
    const expected = "ibm";
    const actual = caesar("HAL", 1);
    expect(actual).to.equal(expected);
  });
  it("should preserve whitespace", () => {
    const expected = "qrgp rqf";
    const actual = caesar("open pod", 2);
    expect(actual).to.equal(expected);
  });
  it("should preserve any nonalphabetic character", () => {
    const expected = "@kruvh_herrnv";
    const actual = caesar("@horse_ebooks", 3);
    expect(actual).to.equal(expected);
  });
  it("should handle left shifts beyond a", () => {
    const expected = "xifyxyx";
    const actual = caesar("alibaba", -3);
    expect(actual).to.equal(expected);
  });
  it("should handle shifts above z", () => {
    const expected = "aoacss";
    const actual = caesar("xlxzpp", 3);
    expect(actual).to.equal(expected);
  });
  it("should properly decode message", () => {
    const expected = "this is a secret message!";
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.be.equal(expected);
  });
});

describe("asciiMap", () => {
  it("should return a character code's string representation", () => {
    const expected = "a";
    const actual = asciiMap(97, 0);
    expect(actual).to.equal(expected);
  });
  it("should return a when given z and a shift of 1", () => {
    const expected = "a";
    const actual = asciiMap(122, 1);
    expect(actual).to.equal(expected);
  });
  it("should return z when given a and a shift of -1", () => {
    const expected = "z";
    const actual = asciiMap(97, -1);
    expect(actual).to.equal(expected);
  });
})