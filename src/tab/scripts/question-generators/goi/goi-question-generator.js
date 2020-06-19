import { n1GoiPatterns } from './n1-goi-questions';
import { getRandomElement, getRandomElements } from '../../utils/get-random-element';

export const getGoiQuestion = (level) => {
  let sourceList = n1GoiPatterns;

  let selectedGoi = getRandomElement(Object.values(sourceList));

  let selectedMondai = getRandomElement(selectedGoi);

  return generateQuestion(selectedMondai);
  
  return {
    questionText: "~言葉で|話しかけてくる|営業マンに、|注意しよう。",
    correct: "なれなれしい",
    alts: [
      "すがすがしい", "はなばなしい", "そうぞうしい"
    ]
  }
}

const generateQuestion = (questionObject) => {
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
    correct: questionObject.answer,
    alts
  };
}

const parseToken = (token, questionObject, pattern) => {
  if (token.match(/[\u3000-\u303f\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/)) {
    return token;
  } else {
    if (token === '|' || token === '~') return token;
    switch(token) {
      case 'SOL':
        return `_${questionObject.answer}_`;
      default:
        // should be random
        return getRandomElement(pattern[token]);
    }
  }
}