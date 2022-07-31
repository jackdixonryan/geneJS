const AminoAcidTable = require('../src/AminoAcidTable');

describe("The AminoAcid Table", () => {
  test("It can be instantiated.", () => {
    expect(() => {
      new AminoAcidTable();
    }).not.toThrowError();
  });

  test("It has a table property.", () => {
    const aminoAcidTable = new AminoAcidTable();
    expect(aminoAcidTable.table).not.toBeUndefined();
  });

  test("The table property is an object.", () => {
    const aminoAcidTable = new AminoAcidTable();
    expect(aminoAcidTable.table).toBeInstanceOf(Object);
  });

  test("The table property has the correct number of keys.", () => {
    const aminoAcidTable = new AminoAcidTable();
    expect(Object.keys(aminoAcidTable.table).length).toEqual(4*4*4);
  });

  test("The table has a getAminoAcid method.", () => {
    const aminoAcidTable = new AminoAcidTable();
    expect(aminoAcidTable.getAminoAcid).not.toBeUndefined();
  });

  test("The getAminoAcid method returns a string representation of the AminoAcid.", () => {
    const aminoAcidTable = new AminoAcidTable();
    expect(aminoAcidTable.getAminoAcid("AUG")).toEqual("Methionine");
  });

  test("The getAminoAcid method returns undefined if the codon is not in the table.", () => {
    const aminoAcidTable = new AminoAcidTable();
    expect(aminoAcidTable.getAminoAcid("AGX")).toBeUndefined();
  });
});