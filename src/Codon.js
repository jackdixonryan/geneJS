const ProteinTable = require('../src/ProteinTable');

class Codon {
  constructor(nucleotideTrio) {
    if (typeof nucleotideTrio !== "string") {
      throw new Error("INVALID_CODE");
    }

    if (nucleotideTrio.length !== 3) {
      throw new Error("INVALID_CODON_LENGTH");
    }

    const allowedCodes = ["A", "C", "G", "U"];
    for (let i = 0; i < nucleotideTrio.length; i++) {
      if (!allowedCodes.includes(nucleotideTrio[i])) {
        throw new Error("INVALID_CODE");
      }
    }

    this.nucleotideTrio = nucleotideTrio;
  }

  getProtein() {
    const table = new ProteinTable();
    return table.getProtein(this.nucleotideTrio);
  }
}

module.exports = Codon;