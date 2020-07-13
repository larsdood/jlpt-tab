const patterns = {
  "郵便局": [{
    kanji: "郵便局",
    yomikata: "ゆうびんきょく",
    kanjiAlts: [
      "有便局",
      "郵瓶局",
      "郵使局",
      "友瓶局",
      "有瓶局",
      "友便局"
    ],
    yomikataAlts: [
      "ゆびんきょく",
      "ゆうぴんきょく",
      "ゆぴんきょく",
      "ゆうびんこく",
      "ゆうぴんこく",
      "ゆびんこく",
      "ゆぴんこく",

    ],
    patterns: [
      {
        sentence: "SOL で | 郵送できますよ！"
      },
      {
        sentence: "SOL の n1 | N_placeToGo が | あります。",
        inserts: {
          n1: [ "となりに", "近くに", "手前に" ]
        }
      }
    ]
  }],
  '代表': [{
    kanji: "代表",
    readingType: 'on',
    yomikata: 'だいひょう',
    alts: [
      'たいひょう', 'だいひょ', 'たいひょ',
    ],
    patterns: [
      {
        sentence: 'N_name:casual は | オリンピックで | 日本の SOL として | 参加しました。'
      }
    ]
  }],
  "お菓子": [{
    kanji: "お菓子",
    yomikata: "おかし",
    kanjiAlts: [
      "お辛子",
      "お裸子",
      "お端子",
      "お果子"
    ],
    yomikataAlts: [
      "おきし",
      "おはし",
      "おあいし",
      "おらし"
    ],
    patterns: [
      {
        sentence: "こら！ | もうすぐ | n1 だよ！ | SOL | 食べるな！",
        inserts: {
          n1: [ "晩ご飯", "ごはん", "飯" ]
        }
      }
    ]
  }],
  "荷物": [{
    kanji: "荷物",
    yomikata: "にもつ",
    kanjiAlts: [ "何物", "荷事", "何事", ],
    yomikataAlts: [ "にもの", "かもの", "かもつ", "いもの", "いもつ",  ],
    patterns: [{
      sentence: "SOL を | n1 まで | 直接届けます。",
      inserts: {
        n1: [ "旅館", "ホテル", "泊まるところ", ]
      }
    }]
  }],
  "雑誌": [{
    kanji: "雑誌",
    yomikata: "ざっし",
    kanjiAlts: [
      "隹詩",
      "隹誌",
      "雑詩",
    ],
    yomikataAlts: [
      "ざし",
      "ざつし",
      "ざつしつ",
    ],
    patterns: [{
      sentence: "どんな | SOL が | 好き | ですか？",
    }]
  }],
  "宿題": [{
    kanji: "宿題",
    yomikata: "しゅくだい",
    kanjiAlts: [
      "問題",
      "渋題",
      "仕題",
    ],
    yomikataAlts: [
      "やどだい",
      "もんだい",
      "くだい",
    ],
    patterns: [{
      sentence: "毎日 | n1 の後 | SOL をします。",
      inserts: {
        n1: [
          "晩ご飯", "部活", "授業", 
        ]
      }
    }]
  }],
}

export default patterns;
