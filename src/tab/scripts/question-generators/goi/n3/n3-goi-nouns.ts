const patterns = {
  アイデア: [{
    answer: "アイデア",
    alts: [
      "メディア",
      "テーマ",
      "ラジオ",
      "チャンス",
      "スムーズ",
    ],
    patterns: [{
      sentence: "ねね、| N_name の | 誕生日の | n1 、 | いい | ~ | ある？",
      inserts: {
        n1: [ "お祝い", "プレゼント", "パーティー", ]
      }
    }]
  }]
}

export default patterns;
