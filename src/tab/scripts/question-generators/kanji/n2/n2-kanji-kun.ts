import { KanjiQuestion } from '../kanji-question.d';

const n2KanjiPatterns: { [kanji: string]: KanjiQuestion[]} = {
  '種': [{
    kanji: "種",
    readingType: 'kun',
    yomikata: 'たね',
    alts: [
      'だね', 'しゅ', 'じゅ',
    ],
    patterns: [
      {
        sentence: 'これは | N_plant の SOL です。'
      }
    ]
  }],
  '述': [{
    kanji: "述べた",
    readingType: 'kun',
    yomikata: 'のべた',
    alts: [
      'もべた',
      "むべた",
      "まべた",
      "みべた",
      "めべた",
      "ぬべた",
      "にべた",
      "なべた",
      "ねべた",
    ],
    patterns: [
      {
        sentence: "N_name は | 理由を | a1 | SOL 。",
        inserts: {
          a1: ["簡単に", "やさしく"]
        }
      }
    ]
  }],
  "薄": [{
    kanji: "薄めて",
    readingType: 'kun',
    yomikata: "うすめて",
    kanjiAlts: [
      "専めて",
      "蓬めて",
      "落めて"
    ],
    yomikataAlts: [
      "はくめて",
      "やすめて",
      "はすめて"
    ],
    patterns: [
      {
        sentence: "n1 を | n2 で | SOL | v1 。",
        inserts: {
          n1: [ "お茶", "コーヒー" ],
          n2: [ "お湯", "牛乳", "みず" ],
          v1: [ "くれませんか", "ください", "いただけませんか" ]
        }
      }
    ]
  }],
  "承": [{
    kanji: "承りました",
    readingType: 'kun',
    yomikata: "うけたまわりました",
    kanjiAlts: [
      "受りました",
      "了りました",
      "分りました"
    ],
    yomikataAlts: [
      "うかたまわりました",
      "わかりました",
      "わけたまわりました"
    ],
    patterns: [{
      sentence: "はい。 | SOL 。",
    }
    ]
  }],
  "祝": [{
    kanji: "お祝い",
    readingType: "kun",
    yomikata: "おいわい",
    kanjiAlts: [
      "お礼い", "お弟い", "お謝い"
    ],
    yomikataAlts: [
      "おわい", "おゆわい", "おにあい", "おねがい", "おきあい"
    ],
    patterns: [{
      sentence: "N_name の誕生日の | SOL に | 何 を v1 ？",
      inserts: {
        v1: [ "買う", "買いますか", "買うつもり", "買うつもりですか" ]
      }
    }
    ]
  }],
  "珍": [{
    kanji: "珍しい",
    readingType: "kun",
    yomikata: "めずらしい",
    kanjiAlts: [
      "寂しい", "惜しい", "優しい", "恋しい"
    ],
    yomikataAlts: [
      "ばらしい", "めらずしい", "すずしい",
    ],
    patterns: [{
      sentence: "N_country:warm では、| 雪が | 降るのは | SOL です。"
    }]
  }],
}

export default n2KanjiPatterns;
