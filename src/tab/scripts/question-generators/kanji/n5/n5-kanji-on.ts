const patterns = {
  "先生": [{
    kanji: "先生",
    yomikata: "せんせい",
    kanjiAlts: [
      "学生",
      "生学",
      "生先",
    ],
    yomikataAlts: [
      "がくせい",
      "せいせん",
      "せいがく",
    ],
    patterns: [{
      sentence: "SOL は | 日本人 | です。",
    },
    {
      sentence: "SOL は | 元気で | やさしい | 人です。",
    },
    {
      sentence: "SOL が | 学校に | います。"
    }
  ]
  }],
  "学生": [{
    kanji: "学生",
    yomikata: "がくせい",
    kanjiAlts: [
      "先生",
      "生学",
      "生先",
    ],
    yomikataAlts: [
      "せいがく",
      "せんせい",
      "せいせん",
    ],
    patterns: [{
      sentence: "SOL は | べんきょうした | ほうが | いいです。",
    },
    {
      sentence: "n1 は | n2 SOL | です。",
      inserts: {
        n1: [ "おとうと", "いもうと", "むすめ", "むすこ", ],
        n2: [ "中学校の", "小学校の", "高校の", "" ]
      }
    }
  ]
  }],
  "午後": [{
    kanji: "午後",
    yomikata: "ごご",
    kanjiAlts: [
      "後午",
      "前午",
      "午前",
    ],
    yomikataAlts: [
      "ごぜん",
      "ぜんご",
      "こご",
    ],
    patterns: [{
      sentence: "SOL t1 に | 帰ります！",
      inserts: {
        t1: [ "五時", "六時", "七時", "八時" ]
      }
    }]
  }],
  "午前": [{
    kanji: "午前",
    yomikata: "ごぜん",
    kanjiAlts: [
      "後午",
      "前午",
      "午後",
    ],
    yomikataAlts: [
      "ごご",
      "ぜんご",
      "こご"
    ],
    patterns: [{
      sentence: "SOL t1 に | n1 に | 行きます。",
      inserts: {
        t1: [ "六時半", "七時", "七時半", "八時", "八時半", ],
        n1: [ "学校", "仕事", "大学", "事務所", ]
      }
    }]
  }],
  "先月": [{
    kanji: "先月",
    yomikata: "せんげつ",
    kanjiAlts: [
      "前月",
      "後月",
      "今月",
    ],
    yomikataAlts: [
      "ぜんげつ",
      "さきつき",
      "さきげつ",
    ],
    patterns: [{
      sentence: "SOL N_country に | 行ってきました。"
    }]
  }]
}

export default patterns;
