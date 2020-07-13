import { KanjiQuestion } from './kanji-question.d';

export const n3KanjiPatterns: { [kanji: string]: KanjiQuestion[]} = {
  '代表': [{
    kanji: "代表",
    readingType: 'on',
    yomikata: 'だいひょう',
    alts: [
      'たいひょう', 'だいひょ', 'たいひょ',
    ],
    patterns: [
      {
        sentence: 'N_name は | オリンピックで | 日本の SOL として | 参加しました。'
      }
    ]
  }]
}