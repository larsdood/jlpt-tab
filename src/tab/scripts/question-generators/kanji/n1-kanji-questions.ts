import { KanjiQuestion } from './kanji-question.d';

export const n1KanjiPatterns: { [kanji: string]: KanjiQuestion[]} = {
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
  '履歴書': [
    {
      kanji: "履歴書",
      readingType: 'on',
      yomikata: 'りれきしょ',
      alts: [
        'はれきしょ', 'ひれきしょ', 'くれきしょ', 'られきしょ'
      ],
      form: "normal",
      patterns: [
        {
          sentence: "Sen1 | SOL を | Sen2 。",
          inserts: {
            Sen1: [
              "先に", "とりあえず", "面接の前、"
            ],
            Sen2: [
              "お送くりになってください", "送ってください", "準備してください"
            ]
          }
        }
      ]
    }
  ],
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
  ]
}