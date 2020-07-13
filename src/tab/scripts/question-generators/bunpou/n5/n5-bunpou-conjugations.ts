const patterns = {
  "なかった": [{
    answer: "なかったです",
    alts: [
      "なかったでした",
      "なくでした",
      "ないでした",
    ],
    patterns: [{
      sentence: "n1 のコンサートは | たのしく ~ 。",
      inserts: {
        n1: [ "昨日", "先週", "先月", "あ" ]
      }
    }]
  }],
  "じゃない": [{
    answer: "じゃありません",
    alts: [
      "じゃません",
      "じゃりません",
      "じりません",
    ],
    patterns: [{
      sentence: "N_name は | 日本人 ~ 。"
    }]
  }],
  "ajdで": [{
    answer: "元気で",
    alts: [
      "元気くて",
      "元気く",
      "元気と",
      "元気な"
    ],
    patterns: [{
      sentence: "N_name は | ~ a1 | 人です。",
      inserts: {
        a1: [
          "あかるい", "おもしろい", "やさしい", "しゃこうてきな",
        ]
      }
    }]
  }],
  "こない": [{
    answer: "こない",
    alts: [
      "きない",
      "くない",
      "くらない",
    ],
    patterns: [{
      sentence: "もう n1 だ。 | N_name は | やっぱり | ~ ね。",
      inserts: {
        n1: [ "晩ご飯", "八時", "夜", "おそいん", "九時", ]
      }
    }]
  }],
  "naない？": [{
    answer: "行かない",
    alts: [
      "行くんだ",
      "行くない",
      "行くません",
    ],
    patterns: [{
      sentence: "n1 | n2 に | ~ ？",
      inserts: {
        n1: [ "土曜日に", "日曜日に", "あした、", "しゅうまつに" ],
        n2: [ "こうえん", "はこね", "えいがかん", "えいが", ],
      }
    }]
  }],
  "vましょう": [{
    answer: "行きましょう",
    alts: [
      "行くましょう",
      "行けましょう",
      "行きましい"
    ],
    patterns: [{
      sentence: "こんど | N_placeToGo へ | ~ ！"
    }]
  },
  {
    answer: "飲もう",
    alts: [
      "飲んだ",
      "飲まれた",
      "飲み",
    ],
    patterns: [
      {
        sentence: "つかれたね！ | これから | N_alcohol を | ~ よ！",
      }
    ]
  }
]
}

export default patterns;
