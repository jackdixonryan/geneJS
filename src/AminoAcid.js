
class AminoAcid {
  constructor(options) {
    if (!options) {
      throw new Error("INVALID_OPTIONS");
    }

    if (!options.name) {
      throw new Error("INVALID_OPTIONS");
    }

    if (!options.code) {
      throw new Error("INVALID_OPTIONS");
    }

    this.name = options.name;
    this.code = options.code;
  }
}

module.exports = AminoAcid;