interface KanjiPattern {
  sentence: string;
  inserts?: {
    [key: string]: string[];
  }
}

export interface KanjiQuestion {
  kanji: string;
  readingType?: 'kun' | 'on';
  yomikata: string;
  alts?: string[];
  // remove alts, make yomikata alts and/or kanjialts necessary
  yomikataAlts?: string[];
  kanjiAlts?: string[];
  form?: string;
  patterns: KanjiPattern[]
}