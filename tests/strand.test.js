const Codon = require("../src/Codon");
const Strand = require("../src/Strand");

describe("The Strand class", () => {
  test("It can be instantiated.", () => {
    expect(() => {
      new Strand();
    }).not.toThrowError();
  });
  
  test("It initializes with an empty sequence array.", () => {
    const strand = new Strand();
    expect(strand.sequence).not.toBeUndefined();
    expect(strand.sequence).toEqual([]);
  });

  test("It has an addNucleotide method.", () => {
    const strand = new Strand();
    expect(strand.addNucleotide).not.toBeUndefined();
  });

  test("The addNucleotide method throws an error when not passed a code argument.", () => {
    const strand = new Strand();
    expect(() => {
      strand.addNucleotide();
    }).toThrowError("INVALID_CODE");
  });

  test("The addNucleotide method pushes a valid nucleotide to the sequence.", () => {
    const strand = new Strand();
    strand.addNucleotide("A");
    expect(strand.sequence).toEqual(["A"]);
  });

  test("The addNucleotide method requires code to have a length of 1", () => {
    const strand = new Strand();
    expect(() => {
      strand.addNucleotide("AA");
    }).toThrowError("INVALID_CODE_LENGTH");
  });

  test("The addNucleotide method throws an error when passed an invalid code.", () => {
    const strand = new Strand();
    expect(() => {
      strand.addNucleotide("X");
    }).toThrowError("INVALID_CODE");
  });

  test("The strand has a toString method.", () => {
    const strand = new Strand();
    expect(strand.toString).not.toBeUndefined();
  });

  test("The toString method returns a string representation of the strand.", () => {
    const strand = new Strand();
    strand.addNucleotide("A");
    strand.addNucleotide("C");
    strand.addNucleotide("G");
    strand.addNucleotide("U");
    expect(strand.toString()).toEqual("ACGU");
  });

  test("The strand has a getCodons method.", () => {
    const strand = new Strand();
    expect(strand.getCodons).not.toBeUndefined();
  });

  test("The getCodons method returns an array of codons.", () => {
    const strand = new Strand();
    strand.addNucleotide("A");
    strand.addNucleotide("C");
    strand.addNucleotide("G");
    strand.addNucleotide("U");
    strand.addNucleotide("U");
    strand.addNucleotide("U");
    expect(strand.getCodons()).toEqual([new Codon("ACG"), new Codon("UUU")]);
  });

  test("It has a getProteins method.", () => {
    const strand = new Strand();
    expect(strand.getProteins).not.toBeUndefined();
  });

  test("The getProteins method returns an array of proteins.", () => {
    const strand = new Strand();
    strand.addNucleotide("A");
    strand.addNucleotide("C");
    strand.addNucleotide("G");
    strand.addNucleotide("U");
    strand.addNucleotide("U");
    strand.addNucleotide("U");
    expect(strand.getProteins()).toEqual(["M", "M"]);
  });

});