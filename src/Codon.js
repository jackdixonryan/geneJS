const AminoAcidTable = require('./AminoAcidTable');

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

  getAminoAcid() {
    const table = new AminoAcidTable();
    return table.getAminoAcid(this.nucleotideTrio);
  }
}

module.exports = Codon;