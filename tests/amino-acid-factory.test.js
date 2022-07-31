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

  // tedious, but effective.
  test("All amino acids can be successfully generated via the getAminoAcid method.", () => {
    const aminoAcidFactory = new AminoAcidFactory();
    expect(aminoAcidFactory.getAminoAcid("UUU")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("UUC")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("UUA")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("UUG")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("UCU")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("UCC")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("UCA")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("UCG")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("UAU")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("UAC")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("UAA")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("UAG")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("UGU")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("UGC")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("UGA")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("UGG")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("CUU")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("CUC")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("CUA")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("CUG")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("CCU")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("CCC")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("CCA")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("CCG")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("CAU")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("CAC")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("CAA")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("CAG")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("CGU")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("CGC")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("CGA")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("CGG")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("AUU")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("AUC")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("AUA")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("AUG")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("ACU")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("ACC")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("ACA")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("ACG")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("AAU")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("AAC")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("AAA")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("AAG")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("AGU")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("AGC")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("AGA")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("AGG")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("GUU")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("GUC")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("GUA")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("GUG")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("GCU")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("GCC")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("GCA")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("GCG")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("GAU")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("GAC")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("GAA")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("GAG")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("GGU")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("GGC")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("GGA")).toBeInstanceOf(AminoAcid);
    expect(aminoAcidFactory.getAminoAcid("GGG")).toBeInstanceOf(AminoAcid);
  });
});