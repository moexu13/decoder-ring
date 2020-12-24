const expect = require("chai").expect;

const substitution = require("../src/substitution");

const alpha = "zyxwvutsrqponmlkjihgfedcba";

describe("substitution", () => {
  it("should return false if the alphabet parameter is not 26 characters", () => {
    const actual = substitution("test", "abcdef");
    expect(actual).to.be.false;
  });
  it("should maintain string whitespace", () => {
    const expected = "mld rh gsv drmgvi lu lfi wrhxlmgvmg";
    const actual = substitution("now is the winter of our discontent", alpha);
    expect(actual).to.equal(expected);
  });
  it("is case insensitive", () => {
    const expected = "gvhg gvhg";
    const actual = substitution("TEST TEST", alpha);
    expect(actual).to.equal(expected);
  });
  it("has a complete alphabet parameter", () => {
    const actual = substitution("test", "abacadaeafagahaiajakalaman");
    expect(actual).to.be.false;
  });
  it("can decode input", () => {
    const expected = "thinkful";
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.equal(expected);
  });
});