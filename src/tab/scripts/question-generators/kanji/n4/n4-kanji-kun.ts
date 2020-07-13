import { KanjiQuestion } from '../kanji-question.d';

const patterns: { [kanji: string]: KanjiQuestion[]} = {
  '通': [{
    kanji: "通って",
    readingType: 'kun',
    yomikata: 'かよって',
    alts: [
      'むかって', 'いって', 'わたって', 'もどって', 'かって'
    ],
    patterns: [
      {
        sentence: 'N_name は | N_transportation で | N_workSchoolUniversity に | SOL います。'
      }
    ]
  }],
  "駅": [{
    kanji: "駅",
    yomikata: "えき",
    kanjiAlts: [
      "馬",
      "馬刺",
      "馬兄",
    ],
    yomikataAlts: [
      "えび",
      "えり",
      "えひ",
    ],
    patterns: [{
      sentence: "すみません！ | SOL は | どこですか？"
    }]
  }],
  "今朝": [{
    kanji: "今朝",
    yomikata: "けさ",
    kanjiAlts: [
      "本朝",
      "合朝",
      "毎朝",
    ],
    yomikataAlts: [
      "こんあさ",
      "かさ",
      "いまさ",
    ],
    patterns: [{
      sentence: "SOL 何時 | 起きた？"
    }]
  }],
  "明るい": [{
    kanji: "明るい",
    yomikata: "あかるい",
    kanjiAlts: [
      "優るい",
      "光るい",
      "笑るい",
    ],
    yomikataAlts: [
      "あけるい",
      "えかるい",
      "えけるい",
    ],
    patterns: [{
      sentence: "SOL 人は | タイプ | です。"
    }]
  }],
  "帰る": [{
    kanji: "帰る",
    yomikata: "かえる",
    kanjiAlts: [
      "買える",
      "帰える",
      "買る",
    ],
    yomikataAlts: [
      "かる",
      "けある",
      "ける",
    ],
    patterns: [{
      sentence: "n1 | SOL よ。",
      inserts: {
        n1: [
          "そろそろ",
          "ごはんを | 食べたあと",
          "もうすぐ",
          "六時に",
          "五時に",
          "授業の後に",
        ]
      }
    }]
  }],
  "妹": [{
    kanji: "妹",
    yomikata: "いもうと",
    kanjiAlts: [
      "姉",
      "女",
      "妻",
      "女市",
      "母",
    ],
    yomikataAlts: [
      "いもと",
      "あね",
      "あねえ",
    ],
    patterns: [{
      sentence: "n1 | SOL と | n2 した。",
      inserts: {
        n1: [ 
          "先週",
          "日曜日に",
          "土曜日に",
          "昨日",
        ],
        n2: [
          "ゲーム",
          "宿題",
          "ジョギング",
          "運動",
          "料理",
        ],
      }
    }]
  }],
  "姉": [{
    kanji: "姉",
    yomikata: "あね",
    kanjiAlts: [
      "妹",
      "女",
      "妻",
      "女市",
      "母",
    ],
    yomikataAlts: [
      "いもと",
      "いもうと",
      "あねえ",
    ],
    patterns: [{
      sentence: "n1 | SOL と | n2 した。",
      inserts: {
        n1: [ 
          "先週",
          "日曜日に",
          "土曜日に",
          "昨日",
        ],
        n2: [
          "ゲーム",
          "宿題",
          "ジョギング",
          "運動",
          "料理",
        ],
      }
    }]
  }]
}

export default patterns;
