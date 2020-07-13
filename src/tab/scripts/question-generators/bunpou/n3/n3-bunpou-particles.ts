const patterns = {
  "のを": [{
    answer: "のを",
    alts: [
      "もの", "には", "こと", "のに", "のが"
    ],
    patterns: [{
      sentence: "n1 を | 払う ~ | v1 。",
      inserts: {
        n1: [ "ガス料金", "電気料金", "下水道使用料" ],
        v1: [ "忘れないでね", "忘れちゃだめ", "しといて" ]
      }
    }]
  }],
  "のこと": [{
    answer: "のこと",
    alts: [
      "によって",
      "と",
      "のだ",
      "については",
      "のに",
    ],
    patterns: [{
      sentence: "n1 ~ が | 好きだ。 | 付き合って | ください！",
      inserts: {
        n1: [ "きみ", "君", "お前", "あなた" ]
      }
    }]
  }]
}

export default patterns;