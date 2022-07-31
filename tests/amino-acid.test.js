const AminoAcid = require("../src/AminoAcid");

describe("The AminoAcid Class", () => {
  test("It can be instantiated.", () => {
    expect(() => {
      new AminoAcid({ name: "Methionine", code: "AUG" });
    }).not.toThrowError();
  });

  test("It must be instantiated with an options argument", () => {
    expect(() => {
      new AminoAcid();
    }).toThrowError("INVALID_OPTIONS");
  });

  test("It must be instantiated with an options.name argument", () => {
    expect(() => {
      new AminoAcid({ code: "M" });
    }).toThrowError("INVALID_OPTIONS");
  });

  test("It must be instantiated with an options.code argument", () => {
    expect(() => {
      new AminoAcid({ name: "Methionine" });
    }).toThrowError("INVALID_OPTIONS");
  });

  test("It sets name and code when valid.", () => {
    const aminoAcid = new AminoAcid({ name: "Methionine", code: "M" });
    expect(aminoAcid.name).toEqual("Methionine");
    expect(aminoAcid.code).toEqual("M");
  });
});