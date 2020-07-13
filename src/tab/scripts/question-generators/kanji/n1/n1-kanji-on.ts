const patterns = {
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
  "派遣": [{
    kanji: "派遣",
    yomikata: "はけん",
    kanjiAlts: [
      "販遣",
      "派権",
      "葉健",
    ],
    yomikataAlts: [
      "はてん",
      "はげん",
      "はれん",
      "はぺん",
      "はでん"
    ],
    patterns: [{
      sentence: "正社員じゃなくて、 | SOL です。"
    }]
  }],
  "迷惑行為": [{
    kanji: "迷惑行為",
    yomikata: "めいわくこうい",
    kanjiAlts: [
      "迷惑高位",
      "迷惑好意",
      "迷惑厚意",
    ],
    yomikataAlts: [
      "めいわくごうい",
      "まいわくごうい",
      "まいわくこうい",
      "めいわくこうぎ",
      "まいわくこうぎ",
      "めいわくごうぎ",
      "まいわくごうぎ",
    ],
    patterns: [{
      sentence: "日本で | SOL は | n1 ですよ！",
      inserts: {
        n1: [
          "犯罪", "違法", "ダメ", "駄目"
        ]
      }
    }]
  }]
}

export default patterns;