const Codon = require("./Codon");

class Strand {
  constructor() {
    this.sequence = [];
  }

  addNucleotide(code) {
    if (typeof code !== "string") {
      throw new Error("INVALID_CODE");
    }

    if (code.length !== 1) {
      throw new Error("INVALID_CODE_LENGTH");
    }

    const allowedCodes = ["A", "C", "G", "U"];
    if (!allowedCodes.includes(code)) {
      throw new Error("INVALID_CODE");
    }

    this.sequence.push(code);
  }

  toString() {
    return this.sequence.join("");
  }

  getCodons() {
    const codons = [];
    const strand = this.toString();
    for (let i = 0; i < strand.length; i += 3) {
      codons.push(new Codon(strand.substring(i, i + 3)));
    }
    return codons;
  }

  getAminoAcids() {
    const AminoAcids = [];
    const codons = this.getCodons();
    for (let i = 0; i < codons.length; i++) {
      AminoAcids.push(codons[i].getAminoAcid());
    }
    return AminoAcids;
  }
}

module.exports = Strand;