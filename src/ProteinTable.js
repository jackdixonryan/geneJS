
class ProteinTable {
  constructor() { 
    this.table = {
      UUU: "Phenylalanine",
      UUC: "Phenylalanine",
      UUA: "Leucine",
      UUG: "Leucine",
      UCU: "Serine",
      UCC: "Serine",
      UCA: "Serine",
      UCG: "Serine",
      UAU: "Tyrosine",
      UAC: "Tyrosine",
      UGU: "Cysteine",
      UGC: "Cysteine",
      UAA: "STOP",
      UAG: "STOP",
      UGA: "STOP",
      UGG: "Tryptophan",

      CUU: "Leucine",
      CUC: "Leucine",
      CUA: "Leucine",
      CUG: "Leucine",
      CCU: "Proline",
      CCC: "Proline",
      CCA: "Proline",
      CCG: "Proline",
      CAU: "Histidine",
      CAC: "Histidine",
      CAA: "Glutamine",
      CAG: "Glutamine",
      CGA: "Arginine",
      CGC: "Arginine",
      CGG: "Arginine",
      CGU: "Arginine",

      AUU: "Isoleucine",
      AUC: "Isoleucine",
      AUA: "Isoleucine",
      AUG: "Methionine",
      ACU: "Threonine",
      ACC: "Threonine",
      ACA: "Threonine",
      ACG: "Threonine",
      AAU: "Asparagine",
      AAC: "Asparagine",
      AAA: "Lysine",
      AAG: "Lysine",
      AGU: "Serine",
      AGC: "Serine",
      AGA: "Arginine",
      AGG: "Arginine",

      GUU: "Valine",
      GUC: "Valine",
      GUA: "Valine",
      GUG: "Valine",
      GCU: "Alanine",
      GCC: "Alanine",
      GCA: "Alanine",
      GCG: "Alanine",
      GAU: "Aspartic acid",
      GAC: "Aspartic acid",
      GAA: "Glutamic acid",
      GAG: "Glutamic acid",
      GGA: "Glycine",
      GGC: "Glycine",
      GGG: "Glycine",
      GGU: "Glycine",
    }
  }

  getProtein(strand) {
    return this.table[strand] || undefined;
  }
}

module.exports = ProteinTable;
