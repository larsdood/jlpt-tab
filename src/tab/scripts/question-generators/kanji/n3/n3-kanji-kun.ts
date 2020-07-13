const patterns = {
  "申": [{
    kanji: '申します',
    yomikata: "もうします",
    kanjiAlts: [
      "曲します",
      "由します",
      "有します",
      "直します",
      "毛します"
    ],
    yomikataAlts: [
      "もします",
      "ゆします",
      "ゆうします",
      "いいます",
    ],
    patterns: [{
      sentence: "はじめまして。 | N_name:self と SOL 。",
    }]
  }],
  "届": [{
    kanji: "届けた",
    yomikata: "とどけた",
    kanjiAlts: [
      "郵けた",
      "便けた",
      "着けた",
    ],
    yomikataAlts: [
      "どとけた",
      "ととけた",
      "どどけた",
    ],
    patterns: [{
      sentence: "n1 を | n2 SOL よ！",
      inserts: {
        n1: [ "小堤", "パッケージ", "手紙" ],
        n2: [ "今朝", "昨日", "先週" ]
      }
    }]
  }],
  '曲': [{
    kanji: "曲がって",
    yomikata: "まがって",
    kanjiAlts: [
      "由がって",
      "西がって",
      "屁だって",
    ],
    yomikataAlts: [
      "めがって",
      "みがって",
      "もがって",
      "むがって",
    ],
    patterns: [{
      sentence: "次の n1 を | n2 に | SOL | ください。",
      inserts: {
        n1: [ "信号", "交差点", ],
        n2: [ "左", "右" ],
      }
    }]
  }],
  "参": [{
    kanji: "参ります",
    yomikata: "まいります",
    kanjiAlts: [
      "加ります",
      "毎ります",
      "枚ります",
    ],
    yomikataAlts: [
      "まりります",
      "まにります",
      "ままります",
    ],
    patterns: [{
      sentence: "申し訳ございません！ | すぐに SOL ！",
    }]
  }],
  "要": [{
    kanji: "要る",
    yomikata: "いる",
    kanjiAlts: [
      "欲る",
      "有る",
      "居る",
    ],
    yomikataAlts: [
      "ある",
      "くる",
      "たのる",
    ],
    patterns: [{
      sentence: "N_alcohol 、 SOL ？"
    }]
  }]
}

export default patterns;

const empty = [{
  kanji: "",
  yomikata: "",
  kanjiAlts: [
    "",
    "",
    "",
  ],
  yomikataAlts: [
    "",
    "",
    "",
  ],
  patterns: [{
    sentence: ""
  }]
}]
;