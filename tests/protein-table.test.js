const ProteinTable = require('../src/ProteinTable');

describe("The Protein Table", () => {
  test("It can be instantiated.", () => {
    expect(() => {
      new ProteinTable();
    }).not.toThrowError();
  });

  test("It has a table property.", () => {
    const proteinTable = new ProteinTable();
    expect(proteinTable.table).not.toBeUndefined();
  });

  test("The table property is an object.", () => {
    const proteinTable = new ProteinTable();
    expect(proteinTable.table).toBeInstanceOf(Object);
  });

  test("The table property has the correct number of keys.", () => {
    const proteinTable = new ProteinTable();
    expect(Object.keys(proteinTable.table).length).toEqual(4*4*4);
  });

  test("The table has a getProtein method.", () => {
    const proteinTable = new ProteinTable();
    expect(proteinTable.getProtein).not.toBeUndefined();
  });

  test("The getProtein method returns a string representation of the protein.", () => {
    const proteinTable = new ProteinTable();
    expect(proteinTable.getProtein("AUG")).toEqual("Methionine");
  });

  test("The getProtein method returns undefined if the codon is not in the table.", () => {
    const codon = new ProteinTable();
    expect(codon.getProtein("AGX")).toBeUndefined();
  });
});