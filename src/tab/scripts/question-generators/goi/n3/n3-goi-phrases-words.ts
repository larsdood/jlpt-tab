const patterns = {
  ところどころ: [{
    answer: "ところどころ",
    alts: [
      "それぞれ",
      "人々",
      "すべて",
    ],
    patterns: [{
      sentence: "この n1 は | a1 と | 言えないが、 | ~ | e1 。",
      inserts: {
        n1: ["本", "映画", "小説", "ゲーム", "アニメ", ],
        a1: ["傑作だ", "素晴らしい", "すごくいい",  ],
        e1: ["感動したよ", "面白かったよ", ]
      }
    }]
  }],
  得意: [{
    answer: "得意",
    alts: [
      "極意",
      "取得",
      "獲得",
    ],
    patterns: [{
      sentence: "へー！ | N_country:cold 出身 | なんだ！ | じゃ、 | n1 | ~ ？",
      inserts: {
        n1: [ "スキー", "スノーボード", ]
      }
    }]
  }],
  かしこまりました: [{
    answer: "かしこまりました",
    alts: [
      "失礼いたしました",
      "おじゃましました",
      "しょうちしました",
      "どろぼうしました",
    ],
    patterns: [{
      sentence: "N_alcohol と | N_food | ですね。 | ~ 。"
    }]
  }]
}

export default patterns;
