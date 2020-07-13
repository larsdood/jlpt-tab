const patterns = {
  "寒い": [{
    answer: "さむい",
    alts: [
      "あぶない", "うるさい", "にがい"
    ],
    patterns: [
      {
        sentence: "N_country:cold のふゆは | ~ です。"
      }
    ]
  }],
  "つまらない": [{
    answer: "つまらない",
    alts: [
      "つまる",
      "つまろう",
      "つまり",
    ],
    patterns: [
      {
        sentence: "その n1 好き？ | ~ と | おもったけど...",
        inserts: {
          n1: [ "まんが", "アニメ", "えいが", "ドラマ", ]
        }
      }
    ]
  }],
  "まずい": [{
    answer: "まずかった",
    alts: [
      "おいしかった",
      "やすかった",
      "おもしろかった",
    ],
    patterns: [{
      sentence: "n1 行って | みたよ。 | n2 ~ 。 | また | 行かない。",
      inserts: {
        n1: [ "昨日","先週","先月",],
        n2: [ "ちょう", "けっこう", "すごく", ]
      }
    }]
  }]
};

export default patterns;