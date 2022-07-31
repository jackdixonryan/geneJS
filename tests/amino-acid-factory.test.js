const AminoAcidFactory = require('../src/AminoAcidFactory');
const AminoAcid = require("../src/AminoAcid");

describe("The AminoAcid Factory", () => {
  test("It can be instantiated.", () => {
    expect(() => {
      new AminoAcidFactory();
    }).not.toThrowError();
  });

  test("It has a codonTable property.", () => {
    const aminoAcidFactory = new AminoAcidFactory();
    expect(aminoAcidFactory.codonTable).not.toBeUndefined();
  });

  test("The codonTable property is an object.", () => {
    const aminoAcidFactory = new AminoAcidFactory();
    expect(aminoAcidFactory.codonTable).toBeInstanceOf(Object);
  });

  test("The codonTable property has the correct number of keys.", () => {
    const aminoAcidFactory = new AminoAcidFactory();
    expect(Object.keys(aminoAcidFactory.codonTable).length).toEqual(4*4*4);
  });

  test("The table has a getAminoAcid method.", () => {
    const aminoAcidFactory = new AminoAcidFactory();
    expect(aminoAcidFactory.getAminoAcid).not.toBeUndefined();
  });

  test("The getAminoAcid method returns an instance of AminoAcid.", () => {
    const aminoAcidFactory = new AminoAcidFactory();
    expect(aminoAcidFactory.getAminoAcid("AUG")).toBeInstanceOf(AminoAcid);
  });

  test("The getAminoAcid method returns undefined if the codon is not in the table.", () => {
    const aminoAcidFactory = new AminoAcidFactory();
    expect(aminoAcidFactory.getAminoAcid("AGX")).toBeUndefined();
  });
});