const patterns = {
  "気味": [
    {
      answer: "ぎみ",
      alts: [
        "げ", "がち", "め", "み"
      ],
      patterns: [
        {
          sentence: "暑くて | 夏バテ ~ です。"
        },
        {
          sentence: "n1 ~ | なら、 | 休んだほうがいいよ。",
          inserts: {
            n1: [ "風邪", "かぜ" ]
          }
        },
        {
          sentence: "n1 は | n2 ~ です。",
          inserts: {
            n1: [ "わたし", "私", "ぼく", "僕" ],
            n2: [ "風邪", "かぜ" ]
          }
        }
      ]
    }
  ],
  "につき": [
    {
      answer: "につき",
      alts: [
        "にのみ", "でこそ", "でさえ", "について", "による"
      ],
      patterns: [
        {
          sentence: "n1 は | n2 ~ | n3 円ずつ | です。",
          inserts: {
            n1: [ "切符", "きっぷ", "チケット", "入金", "料金" ],
            n2: [ "一人", "一名", ],
            n3: [ "1000", "1500", "2000", "2500", "3000", "3500" ],
          }
        }
      ]
    },
    {
      answer: "につき",
      alts: [
        "について", "によると", "にさえ", "に比べたら", "によって"
      ],
      patterns: [
        {
          sentence: "事故 ~ 、 | N_transportation が | 止まっています",
        }
      ]
    }
  ]
}

export default patterns;