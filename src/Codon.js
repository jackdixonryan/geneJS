const AminoAcidFactory = require('./AminoAcidFactory');

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
    this.aminoAcid = this.getAminoAcid();
    if (this.nucleotideTrio === "UUG" || this.nucleotideTrio === "GUG" || this.nucleotideTrio === "AUG") {
      this.isStartCodon = true;
    }

    if (this.nucleotideTrio === "UAA" || this.nucleotideTrio === "UAG" || this.nucleotideTrio === "UGA") {
      this.isStopCodon = true;
    }
  }

  getAminoAcid() {
    const factory = new AminoAcidFactory();
    return factory.getAminoAcid(this.nucleotideTrio);
  }
}

module.exports = Codon;