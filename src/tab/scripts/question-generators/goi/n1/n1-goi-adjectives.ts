const patterns = {
  なれなれしい: [{
    answer: "なれなれしすぎて",
    alts: [
      "はなばなしすぎて",
      "すがすがしすぎて",
      "さわやかすぎて",
    ],
    patterns: [{
      sentence: "N_name は | ~ | a1 と | 思います。",
      inserts: {
        a1: [ "怪しい", "怖い", "キモイ" ]
      }
    }]
  }],
  
}

export default patterns;
