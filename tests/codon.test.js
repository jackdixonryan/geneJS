const Codon = require("../src/Codon");

describe("The Codon class", () => {
  test("It can be instantiated.", () => {
    expect(() => {
      new Codon("AUG");
    }).not.toThrowError();
  });

  test("It must be instantiated with a string code parameter.", () => {
    expect(() => {
      new Codon(1);
    }).toThrowError("INVALID_CODE");

    expect(() => {
      new Codon("");
    }).toThrowError("INVALID_CODON_LENGTH");

    expect(() => {
      new Codon();
    }).toThrowError("INVALID_CODE");
  });

  test("It must be instantiated with a string code parameter of length 3.", () => {
    expect(() => {
      new Codon("AUG1");
    }).toThrowError("INVALID_CODON_LENGTH");

    expect(() => {
      new Codon("AUG");
    }).not.toThrowError();
  });

  test("All three characters in the string must be valid nucleotide codes.", () => {
    expect(() => {
      new Codon("AUX");
    }).toThrowError("INVALID_CODE");

    expect(() => {
      new Codon("AGZ");
    }).toThrowError("INVALID_CODE");

    expect(() => {
      new Codon("AUG");
    }).not.toThrowError();
  });

  test("The Codon has a getAminoAcid method.", () => {
    const codon = new Codon("AUG");
    expect(codon.getAminoAcid).not.toBeUndefined();
  });

  test("The getAminoAcid method returns a string representation of the AminoAcid.", () => {
    const codon = new Codon("AUG");
    expect(codon.getAminoAcid()).toEqual("Methionine");
  });

});