const Codon = require("../src/Codon");
const AminoAcid = require("../src/AminoAcid");

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

  test("The getAminoAcid method returns an instance of AminoAcid.", () => {
    const codon = new Codon("AUG");
    expect(codon.getAminoAcid()).toBeInstanceOf(AminoAcid);
  });

  test("The codon has an aminoAcid property.", () => {
    const codon = new Codon("AUG");
    expect(codon.aminoAcid).not.toBeUndefined();
  });

  test("The codon has an isStartCodon property.", () => {
    const codon = new Codon("AUG");
    expect(codon.isStartCodon).not.toBeUndefined();
  });

  test("The codon has an isStopCodon property.", () => {
    const codon = new Codon("UAA");
    expect(codon.isStopCodon).not.toBeUndefined();
  });

  test("If the codon is a start codon, isStartCodon is true.", () => {
    const codon = new Codon("AUG");
    expect(codon.isStartCodon).toBe(true);
  });

  test("If the codon is a stop codon, isStopCodon is true.", () => {
    const codon = new Codon("UAA");
    expect(codon.isStopCodon).toBe(true);
  });
});