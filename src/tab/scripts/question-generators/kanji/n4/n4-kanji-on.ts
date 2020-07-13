const patterns = {
  '人口': [{
    kanji: "人口",
    yomikata: "じんこう",
    kanjiAlts: [
      "入口",
      "人日",
      "入日",
    ],
    yomikataAlts: [
      "にんこう",
      "ひとくち",
      "じんくち",
      "ひとこう",
    ],
    patterns: [{
      sentence: "N_country の SOL は | 何人ですか？",

    }]
  }],
  '会社員': [{
    kanji: "会社員",
    yomikata: "かいしゃいん",
    kanjiAlts: [
      "会社人",
      "会社民",
      "会社入",
    ],
    yomikataAlts: [
      "かいしゃまん",
      "がいしゃいん",
      "かいしいん",
    ],
    patterns: [{
      sentence: "N_name は | SOL です。"
    }]
  }],
  "勉強": [{
    kanji: "勉強",
    yomikata: "べんきょう",
    kanjiAlts: [
      "弁強",
      "便強",
      "晩強",
    ],
    yomikataAlts: [
      "ばんきょう",
      "よるつよ",
      "つよよる",
    ],
    patterns: [{
      sentence: "大学で | 日本語を | SOL しています。"
    }]
  }],
  "上手": [{
    kanji: "上手",
    yomikata: "じょうず",
    kanjiAlts: [
      "下手",
      "中手",
      "外手",
      "左手",
      "右手"
    ],
    yomikataAlts: [
      "しょうず",
      "しょうす",
      "じょうす",
    ],
    patterns: [{
      sentence: "日本語 | SOL ！"
    }]
  }],
  "本屋": [{
    kanji: "本屋",
    yomikata: "ほんや",
    kanjiAlts: [
      "本店",
      "本夜",
      "本点",
    ],
    yomikataAlts: [
      "ほんてん",
      "ほんみせ",
      "ほんわ",
    ],
    patterns: [{
      sentence: "n1 は | SOL で | 買いました。",
      inserts: {
        n1: [
          "教科書",
          "この本",
          "ペン",
          "えんぴつ",
          "ざっし",
          "消しゴム",
        ]
      }
    }]
  }],
  "一回": [{
    kanji: "一回",
    yomikata: "いっかい",
    kanjiAlts: [
      "一度",
      "一会",
      "一番",
      "一貝",
      "一買",
    ],
    yomikataAlts: [
      "いちど",
      "いちかい",
      "いっと",
    ],
    patterns: [{
      sentence: "N_country に | SOL だけ | 行ったことが | あります。"
    }]
  }],
  "新聞": [{
    kanji: "新聞",
    yomikata: "しんぶん",
    kanjiAlts: [
      "新文",
      "信文",
      "信聞",
    ],
    yomikataAlts: [
      "しぶん",
      "しんもん",
      "しもん",
    ],
    patterns: [{
      sentence: "n1 の SOL 、 | 見た？ | n2 ね！",
      inserts: {
        n1: [ "今日", "今朝","昨日",],
        n2: [ "やばい","すごい","おどろいた", ],
      }
    }]
  }]
};

export default patterns;