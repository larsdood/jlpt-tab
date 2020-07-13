const patterns = {
  '家賃': [{
    kanji: "家賃",
    yomikata: "やちん",
    kanjiAlts: [
      "家貧",
      "家貸",
      "家費",
      "家金",
      "家料"
    ],
    yomikataAlts: [
      "かちん",
      "かりょう",
      "やりょう",
    ],
    patterns: [
      {
        sentence: "ここは | SOL が | a1 。",
        inserts: {
          a1: [ "安い", "高い", "ちょうどいい", "高くない", "安くない" ]
        }
      }
    ]
  }],
  "骨折": [{
    kanji: "骨折",
    yomikata: "こっせつ",
    kanjiAlts: [
      "背折", "育折", "貸折", "億折"
    ],
    yomikataAlts: [
      "こうせつ", "こっさつ", "こうさつ"
    ],
    patterns: [
      {
        sentence: "N_sport したら | SOL しやすい。"
      }
    ],
  }],
  "黒板": [{
    kanji: "黒板",
    yomikata: "こくばん",
    kanjiAlts: [
      "黒斑",
      "黒枚",
      "国版",
      "黒阪"
    ],
    yomikataAlts: [
      "こくはん", "こくさか", "こくまん"
    ],
    patterns: [
      {
        sentence: "n1 を | SOL で | v1",
        inserts: {
          n1: [ "ポエム", "俳句", "はいく", "詩", "言いたいこと" ],
          v1: [ "書いてください。", "書けば？", "書いたら？", "書けばいいんじゃん。", "書け！" ]
        }
      }
    ]
  }],
  "迷子": [{
    kanji: "迷子",
    yomikata: "まいご",
    kanjiAlts: [
      "毎子",
      "毎供",
      "迷供",
    ],
    yomikataAlts: [
      "まいこ",
      "めいご",
      "めいこ",
      "まよこ",
      "まよご",
    ],
    patterns: [{
      sentence: "n1 するとき、 | SOL になりやすい",
      inserts: {
        n1: [ "旅", "旅行", "冒険", "洋行" ]
      }
    }]
  }],
  "署名": [{
    kanji: "署名",
    yomikata: "しょめい",
    kanjiAlts: [
      "書名", "諸名", "暑名", "緒名", "初名"
    ],
    yomikataAlts: [
      "しょめ", "せいめい", "せいめ"
    ],
    patterns: [{
      sentence: "こちらに | ご SOL してください。"
    }]
  }]
}

export default patterns;
