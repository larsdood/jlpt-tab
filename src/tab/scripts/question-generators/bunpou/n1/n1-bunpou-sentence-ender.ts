const patterns = {
  "きらいがある": [{
    answer: "きらいがある",
    alts: [
      "きらいだ",
      "きれいがある",
      "きれいだ",
      "きらいがない",
      "きらいじゃない",
    ],
    patterns: [{
      sentence: "N_name は | n1 で | 飲み過ぎの ~ 。",
      inserts: {
        n1: [ "飲み会",　"パーティー", "合コン", "結婚披露宴", ]
      }
    }]
  }]
}

export default patterns;
