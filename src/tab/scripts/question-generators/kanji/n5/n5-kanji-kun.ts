const patterns = {
  "今年": [{
    kanji: "今年",
    yomikata: "ことし",
    kanjiAlts: [
      "今才",
      "年今",
      "才今",
    ],
    yomikataAlts: [
      "いまねん",
      "ことねん",
      "いまとし",
    ],
    patterns: [{
      sentence: "SOL N_country に | 行きたい。"
    }]
  }],
  // Not really kunyomi, but need separation?
  "今日": [{
    kanji: "今日",
    yomikata: "きょう",
    kanjiAlts: [
      "今目",
      "目今",
      "日今",
    ],
    yomikataAlts: [
      "いまにち",
      "いまひ",
      "いまび",
      "きゅう",
      "ほんじつ",
    ],
    patterns: [{
      sentence: "SOL は | いい天気 | ですね！"
    }]
  }],
  "母": [{
    kanji: "母",
    yomikata: "はは",
    kanjiAlts: [
      "毎",
      "目",
      "日",
    ],
    yomikataAlts: [
      "ちち",
      "まま",
      "ぱぱ",
      "あね",
      "あに"
    ],
    patterns: [{
      sentence: "SOL は | 日本人 | e1 。",
      inserts: {
        e1: ["です", "じゃありません"]
      }
    }]
  }],
  "父": [{
    kanji: "父",
    yomikata: "ちち",
    kanjiAlts: [
      "母",
      "姉",
      "兄",
      "妹",
      "弟",
    ],
    yomikataAlts: [
      "はは",
      "まま",
      "ぱぱ",
      "あね",
      "あに",
    ],
    patterns: [{
      sentence: "SOL は | 日本人 | e1 。",
      inserts: {
        e1: ["です", "じゃありません"]
      }
    }]
  }],
  "車": [{
    kanji: "車",
    yomikata: "くるま",
    kanjiAlts: [
      "重",
      "思",
      "電",
    ],
    yomikataAlts: [
      "ぐるま",
      "しゃ",
      "ちゃ",
    ],
    patterns: [{
      sentence: "SOL で | 行きましょうか？"
    }]
  }],
  
}

export default patterns;