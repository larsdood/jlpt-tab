import { n1KanjiPatterns } from './n1-kanji-questions';
import { getRandomElement, getRandomElements } from '../../utils/get-random-element';

export const getKanjiQuestion = (level) => {
  let sourceList = n1KanjiPatterns;

  let selectedKanji = getRandomElement(Object.values(sourceList));

  // should be random
  let selectedMondai = getRandomElement(selectedKanji);

  return generateQuestion(selectedMondai)
}

const generateQuestion = (questionObject) => {
  
  // should be random
  let pattern = getRandomElement(questionObject.patterns);
  if (pattern.sentence.includes('　')) {
    throw new Error('includes Japanese full-width space! Delete please: ' + pattern.sentence);
  }
  
  let resultString = pattern.sentence.split(' ').reduce((sentence, token) => {
    return sentence += parseToken(token, questionObject, pattern);
  }, '');


  const alts = getRandomElements(questionObject.alts, 3);

  return {
    questionText: resultString,
    correct: questionObject.yomikata,
    alts
  };
}

const parseToken = (token, questionObject, pattern) => {
  if (token.match(/[\u3000-\u303f\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/)) {
    return token;
  } else {
    if (token === '|') return token;
    switch(token) {
      case 'SOL':
        return `_${questionObject.kanjiText}_`;
      default:
        // should be random
        return getRandomElement(pattern[token]);
    }
  }
}