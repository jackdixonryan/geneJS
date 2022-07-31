const AminoAcid = require("./AminoAcid");

class AminoAcidTable {
  constructor() { 
    this.aminoAcids = {
      "F": () => new AminoAcid({ name: "Phenylalanine", code: "F" }),
      "L": () => new AminoAcid({ name: "Leucine", code: "L" }),
      "I": () => new AminoAcid({ name: "Isoleucine", code: "I" }),
      "M": () => new AminoAcid({ name: "Methionine", code: "M" }),
      "V": () => new AminoAcid({ name: "Valine", code: "V" }),
      "S": () => new AminoAcid({ name: "Serine", code: "S" }),
      "P": () => new AminoAcid({ name: "Proline", code: "P" }),
      "T": () => new AminoAcid({ name: "Threonine", code: "T" }),
      "A": () => new AminoAcid({ name: "Alanine", code: "A" }),
      "Y": () => new AminoAcid({ name: "Tyrosine", code: "Y" }),
      "H": () => new AminoAcid({ name: "Histidine", code: "H" }),
      "Q": () => new AminoAcid({ name: "Glutamine", code: "Q" }),
      "N": () => new AminoAcid({ name: "Asparagine", code: "N" }),
      "K": () => new AminoAcid({ name: "Lysine", code: "K" }),
      "D": () => new AminoAcid({ name: "Aspartic Acid", code: "D" }),
      "E": () => new AminoAcid({ name: "Glutamic Acid", code: "E" }),
      "C": () => new AminoAcid({ name: "Cysteine", code: "C" }),
      "W": () => new AminoAcid({ name: "Tryptophan", code: "W" }),
      "R": () => new AminoAcid({ name: "Arginine", code: "R" }),
      "G": () => new AminoAcid({ name: "Glycine", code: "G" }),
      "*": () => new AminoAcid({ name: "Stop", code: "*" })
    }

    this.codonTable = {
      UUU: "F",
      UUC: "F",
      UUA: "L",
      UUG: "L",
      UCU: "S",
      UCC: "S",
      UCA: "S",
      UCG: "S",
      UAU: "Y",
      UAC: "Y",
      UGU: "C",
      UGC: "C",
      UAA: "*",
      UAG: "*",
      UGA: "*",
      UGG: "W",

      CUU: "L",
      CUC: "L",
      CUA: "L",
      CUG: "L",
      CCU: "P",
      CCC: "P",
      CCA: "P",
      CCG: "P",
      CAU: "H",
      CAC: "H",
      CAA: "Q",
      CAG: "Q",
      CGA: "R",
      CGC: "R",
      CGG: "R",
      CGU: "R",

      AUU: "I",
      AUC: "I",
      AUA: "I",
      AUG: "M",
      ACU: "T",
      ACC: "T",
      ACA: "T",
      ACG: "T",
      AAU: "N",
      AAC: "N",
      AAA: "K",
      AAG: "K",
      AGU: "S",
      AGC: "S",
      AGA: "R",
      AGG: "R",

      GUU: "V",
      GUC: "V",
      GUA: "V",
      GUG: "V",
      GCU: "A",
      GCC: "A",
      GCA: "A",
      GCG: "A",
      GAU: "D",
      GAC: "D",
      GAA: "E",
      GAG: "E",
      GGA: "G",
      GGC: "G",
      GGG: "G",
      GGU: "G",
    }
  }

  getAminoAcid(strand) {
    const code = this.codonTable[strand];
    if (code) {
      return this.aminoAcids[code]();
    }
  }
}

module.exports = AminoAcidTable;
