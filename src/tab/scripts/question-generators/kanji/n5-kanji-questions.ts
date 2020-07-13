import { KanjiQuestion } from './kanji-question.d';

export const n5KanjiPatterns: { [kanji: string]: KanjiQuestion[]} = {
  '新': [{
    kanji: "新しい",
    readingType: 'kun',
    yomikata: 'あたらしい',
    alts: [
      'あだらしい', 'あらたしい', 'あらだしい', 'だらしい', 'たらしい'
    ],
    patterns: [
      {
        sentence: 'その N1 は | SOL | ですか。',
        inserts: {
          N1: [
            "ジャケット", "くるま", "ぼうし", "シャツ"
          ],
        }
      }
    ]
  }]
}