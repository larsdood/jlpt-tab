export const n1KanjiPatterns = {
  '納': [
    {
      kanjiText: "納め",
      readingType: "kun",
      yomikata: "おさめ",
      alts: [
        "せめ", "きがめ", "のろめ", "ばらめ"
      ],
      form: "normal",
      patterns: [
        {
          sentence: "N1 は | Sen1 N2 を | SOL Con1 。",
          N1: [
            "資産家", "お金持ち"
          ],
          Sen1: [
            "高額の", "高い"
          ],
          N2: [
            "所得税", "税金"
          ],
          Con1: [
            "なければならない", "ないといけない", "なければなりません", "ないといけません"
          ]
        }
      ]
    }
  ],
  '履歴書': [
    {
      kanjiText: "履歴書",
      readingType: 'on',
      yomikata: 'りれきしょ',
      alts: [
        'はれきしょ', 'ひれきしょ', 'くれきしょ', 'られきしょ'
      ],
      form: "normal",
      patterns: [
        {
          sentence: "Sen1 | SOL を | Sen2 。",
          Sen1: [
            "先に", "とりあえず", "面接の前、"
          ],
          Sen2: [
            "お送くりになってください", "送ってください", "準備してください"
          ]
        }
      ]
    }
  ],
  '挑': [
    {
      kanjiText: "挑んだ",
      readingType: "kun",
      yomikata: "いどんだ",
      alts: [
        "くらんだ", "へたんだ", "もらんだ", "べらんだ"
      ],
      form: "normal",
      patterns: [
        {
          sentence: "Pname さんは | I に | Sport の試合を | SOL 。",
          Pname: [
            "有吉", "高川"
          ],
          Sport: [
            "テニス", "バスケ", "サッカー", "野球"
          ],
          I: [
            "私", "わたし", "僕"
          ]
        }
      ]
    }
  ]
}