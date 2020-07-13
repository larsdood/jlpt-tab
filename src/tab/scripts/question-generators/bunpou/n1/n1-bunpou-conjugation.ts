const patterns = {
  "たが最後": [{
    answer: "寝た",
    alts: [
      "寝て",
      "寝たい",
      "寝る",
    ],
    patterns: [{
      sentence: "N_name は | 一旦 ~ が最後、 | 朝まで | 起きない。",
    }]
  }],
  "がてら": [{
    answer: "がてら",
    alts: [
      "がたら",
      "がち",
      "かたがた",
    ],
    patterns: [{
      sentence: "n1 ~ | 一杯でも | 飲みに | 来ない？",
      inserts: {
        n1: [ "出かけ", "散歩", "買い物", ],
      } 
    }]
  }]
}

export default patterns;
