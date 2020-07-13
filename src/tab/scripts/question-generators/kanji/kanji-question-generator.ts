import { n1KanjiPatterns } from './n1-kanji-questions';
import { n3KanjiPatterns } from './n3-kanji-questions';
import { n5KanjiPatterns } from './n5-kanji-questions';
import n1patterns from './n1/n1-kanji';
import n2patterns from './n2/n2-kanji';
import n3patterns from './n3/n3-kanji';
import n4patterns from './n4/n4-kanji';
import n5patterns from './n5/n5-kanji';

import { getRandomElement, getRandomElements } from '../../utils/get-random-element';
import { parseToken } from '../common/parse-token';

const patternGroupsDict = {
  1: n1patterns,
  2: n2patterns,
  3: n3patterns,
  4: n4patterns,
  5: n5patterns,
}

const patternList = [
  n1KanjiPatterns,
  undefined,
  n3KanjiPatterns,
  undefined,
  n5KanjiPatterns
]

const getPatternList = (level: number) => {
  return patternList[level - 1];
}

export const getKanjiQuestion = (level: 1|2|3|4|5) => {
  // if (level === 1 || level === 2 || level === 3 || level === 4) {
    const patternGroup = patternGroupsDict[level];

    const patternType = getRandomElement(patternGroup);
    let selectedMondai;
    if (patternType.patterns) {
      const selectedKanji = getRandomElement(Object.values(patternType.patterns));

      selectedMondai = getRandomElement(selectedKanji);
    } else if(patternType.patternFunction) {
      selectedMondai = patternType.patternFunction();
    }
    

    return generateQuestion(selectedMondai, level);
  // } else {
  //   const sourceList = getPatternList(level);

  //   let selectedKanji = getRandomElement(Object.values(sourceList));
  
  //   // should be random
  //   let selectedMondai = getRandomElement(selectedKanji);
  
  //   return generateQuestion(selectedMondai, level);
  // }
}

const generateQuestion = (questionObject: any, level: number) => {
  
  // should be random
  let pattern = getRandomElement(questionObject.patterns);
  if (pattern.sentence.includes('　')) {
    throw new Error('includes Japanese full-width space! Delete please: ' + pattern.sentence);
  }
  
  

  if (questionObject.alts) {
    let resultString = pattern.sentence.split(' ').reduce((sentence: string, token: string) => {
      return sentence += parseToken(token, questionObject, pattern, level);
    }, '');

    if (questionObject.alts.some((val: string) => !val)) {
      throw new Error('alts contains empty element: ' + questionObject.alts.join(','));
    }

    const alts = getRandomElements(questionObject.alts, 3);
    
    return {
      questionText: resultString,
      correct: questionObject.yomikata,
      alts
    };
  } else {
    if (questionObject.yomikataAlts.some((val: string) => !val)) {
      throw new Error('yomikataAlts contains empty element: ' + questionObject.yomikataAlts.join(','));
    }
    if (questionObject.kanjiAlts.some((val: string) => !val)) {
      throw new Error('kanjiAlts contains empty element: ' + questionObject.kanjiAlts.join(','));
    }
    const useKanji = Math.random() >= 0.5;
    const solution = useKanji ? questionObject.kanji : questionObject.yomikata;
    let resultString = pattern.sentence.split(' ').reduce((sentence: string, token: string) => {
      return sentence += parseToken(token, questionObject, pattern, level, solution);
    }, '');
    let correct;
    let alts;
    if (useKanji) {
      correct = questionObject.yomikata;
      alts = getRandomElements(questionObject.yomikataAlts, 3);
    } else {
      correct = questionObject.kanji;
      alts = getRandomElements(questionObject.kanjiAlts, 3);
    }

    return {
      questionText: resultString,
      correct,
      alts
    };
  }
}
