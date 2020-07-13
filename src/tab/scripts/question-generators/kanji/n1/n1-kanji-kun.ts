const patterns = {
  '挑': [
    {
      kanji: "挑んだ",
      readingType: "kun",
      yomikata: "いどんだ",
      alts: [
        "くらんだ", "へたんだ", "もらんだ", "べらんだ"
      ],
      form: "normal",
      patterns: [
        {
          sentence: "N_name は | I に | N_sport の試合を | SOL 。",
          inserts: {
            I: [
              "私", "わたし", "僕"
            ]
          }
        }
      ]
    }
  ],
  '納': [
    {
      kanji: "納め",
      readingType: "kun",
      yomikata: "おさめ",
      alts: [
        "せめ", "きがめ", "のろめ", "ばらめ"
      ],
      form: "normal",
      patterns: [
        {
          sentence: "N1 は | Sen1 N2 を | SOL C_must 。",
          inserts: {
            N1: [
              "資産家", "お金持ち"
            ],
            Sen1: [
              "高額の", "高い"
            ],
            N2: [
              "所得税", "税金"
            ]
          },
        }
      ]
    }
  ],
  "縦": [{
    kanji: "縦",
    yomikata: "たて",
    kanjiAlts: [
      "裁",
      "立",
      "走",
    ],
    yomikataAlts: [
      "たも",
      "よこ",
      "ほど",
      "たた",
    ],
    patterns: [{
      sentence: "この n1 は | SOL N_wholeNumber:1-2 メートル | 横 N_wholeNumber:1-2 メートル | です。",
      inserts: {
        n1: [ "テーブル", "カーペット", "机", "お風呂" ]
      }
    }]
  }],
  "堀": [{
    kanji: "堀",
    readingType: "kun",
    yomikata: "ほり",
    kanjiAlts: [
      "濠",
      "穴",
      "壁",
    ],
    yomikataAlts: [
      "ほれ",
      "こり",
      "これ",
      "あな"
    ],
    patterns: [{
      sentence: "n1 の SOL の前に | n2 しませんか？",
      inserts: {
        n1: [ "城", "大阪城", "皇居", "パレス", ],
        n2: [ "花見", "ピクニック", "ランチ" ] 
      }
    }]
  }],
  "戸棚": [{
    kanji: "戸棚",
    yomikata: "とだな",
    kanjiAlts: [
      "扉棚",
      "戸鼻",
      "扉鼻",
    ],
    yomikataAlts: [
      "とたな",
      "こだな",
      "こたな",
    ],
    patterns: [{
      sentence: "n1 は | SOL に | 入ってるよ。",
      inserts: {
        n1: [ "皿", "グラス", "お箸", "ナイフ", "フォーク" ]
      }
    }]
  }],
  "描く": [{
    kanji: "描いた",
    yomikata: "えがいた",
    kanjiAlts: [
      "書いた",
      "作いた",
      "映画いた"
    ],
    yomikataAlts: [
      "えかいた",
      "えぎいた",
      "えきいた",
    ],
    patterns: [{
      sentence: "N_famousPerson:painter は | どんな | 絵を | SOL ？"
    }]
  }],
  "縁": [{
    kanji: "縁",
    yomikata: "ふち",
    kanjiAlts: [
      "絵",
      "緑",
      "斑",
    ],
    yomikataAlts: [
      "ぶち",
      "くち",
      "うち",
    ],
    patterns: [{
      sentence: "n1 | SOL なしの n2 は | n3 e1 。",
      inserts: {
        n1: [ "今年", "最近", "今" ],
        n2: [ "眼鏡", "めがね", "メガネ", ],
        n3: [ "超", "結構", "めっちゃ", "すごく", ],
        e1: [ "流行っています", "人気です" ]

      }
    }]
  }]
}

export default patterns;
