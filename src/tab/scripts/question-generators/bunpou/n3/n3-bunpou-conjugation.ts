const patterns = {
  "ばかりいる": [{
    answer: "して",
    alts: [
      "し",
      "した",
      "する",
      "したい",
      "しし",
      "すると",
    ],
    patterns: [
      {
        sentence: "N_name は | ぐち ~ ばかりいる。",
      }
    ]
  }],
  "ってくれて": [{
    answer: "してくれて",
    alts: [
      "してくれた",
      "してあげて",
      "してあげた",
    ],
    patterns: [
      {
        sentence: "連絡 ~ | ありがとう。"
      }
    ]
  }],
  "ちゃ": [{
    answer: "飲んじゃ",
    alts: [
      "飲むじゃ",
      "飲っちゃ",
      "飲んじゃって"
    ],
    patterns: [
      {
        sentence: "n1 になるまで | n2 を | ~ いけないわ！",
        inserts: {
          n1: [ "二十歳", "大人",　"大学生", ],
          n2: [ "お酒", "ビール",　"ワイン",　"焼酎",　"日本酒",　]
        }
      }
    ]
  },
  {
    answer: "食べちゃった",
    alts: [
      "食べじゃった",
      "食べっちゃった",
      "食べんじゃった"
    ],
    patterns: [
      {
        sentence: "n1 を | 全部 | ~ 。 | ごめんね！",
        inserts: {
          n1: [ "肉", "ケーキ",　"スパゲッティ", "馬刺し" ],
        }
      }
    ]
  },
  ],
  "ようと": [{
    answer: "引っ越そう",
    alts: [
      "引っ越す",
      "引っ越さ",
      "引っ越すよう",
    ],
    patterns: [
      {
        sentence: "n1 N_japaneseCity に | ~ と | 思います。",
        inserts: {
          n1: [
            "来年",
            "今年",
            "夏に",
            "冬に",
            "春に",
            "秋に",
          ]
        }
      }
    ]
  }]
}

export default patterns;