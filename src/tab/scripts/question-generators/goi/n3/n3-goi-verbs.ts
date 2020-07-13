enum Verbs {
  間違う = "間違う",
  出会う = "出会う",
  嘘つく = "嘘つく",
  向かう = "向かう",
  謝る = "謝る",
}

const patterns = {
  [Verbs.間違う]: [{
    answer: "間違いました",
    alts: [
      "違いました",
      "待ちました",
      "間いました",
      "違間いました",
    ],
    patterns: [{
      sentence: "n1 で | n2 ~ 。",
      inserts: {
        n1: [ "試験", "入試", "テスト" ],
        n2: [ "ひどく", "けっこう", "すごく", ]
      }
    }]
  }],
  [Verbs.出会う]: [{
    answer: "出会った",
    alts: [
      "会った",
      "合った",
      "出合った",
      "外会った",
    ],
    patterns: [
      {
        sentence: "さ、 N_name:casual 。 | n1 は | どこで ~ の？",
        inserts: {
          n1: [
            "彼女", "彼氏", "妻", "夫", 
          ]
        }
      }
    ]
  }],
  [Verbs.嘘つく]: [{
    answer: "嘘つき",
    alts: [
      "泥棒",
      "馬鹿",
      "社長",
      "友達",
    ],
    patterns: [
      {
        sentence: "それ | 本当 | じゃない！ | ~ やん！"
      }
    ]
  }],
  [Verbs.向かう]: [{
    answer: "向かいに",
    alts: [
      "向かい",
      "見に",
      "気に",
      "向からない",
    ],
    patterns: [
      {
        sentence: "n1 で | 待ってて。 | ~ | 行くから。",
        inserts: {
          n1: [
            "駅",
            "バス停",
            "ホーム",
            "公園",
          ]
        }
      }
    ]
  }],
  [Verbs.謝る]: [{
    answer: "謝る",
    alts: [
      "誤る",
      "間違える",
      "感謝する",
    ],
    patterns: [
      {
        sentence: "~ こと | じゃないよ！ | N_name が | 悪くなったから！"
      }
    ]
  }],
  空いている: [{
    answer: "あいている",
    alts: [
      "くさってる",
      "のこってる",
      "むかってる",
    ],
    patterns: [
      {
        sentence: "n1 が | ~ よ！ | そっち行こう！",
        inserts: {
          n1: ["窓の席", "窓のテーブル", "カウンターの席", "自由席", "二階の席" ],
        }
      }
    ]
  }]
};

export default patterns;
