import n5patterns from './n5/n5-goi';
import n4patterns from './n4/n4-goi';
import n3patterns from './n3/n3-goi';
import n2patterns from './n2/n2-goi';
import n1patterns from './n1/n1-goi';
import { getRandomElement, getRandomElements } from '../../utils/get-random-element';
import { parseToken } from '../common/parse-token';
import { QuestionType } from '../common/question-type.enum';

const patternGroupsDict = {
  5: n5patterns,
  4: n4patterns,
  3: n3patterns,
  2: n2patterns,
  1: n1patterns,
}

export const getGoiQuestion = (level: 1|2|3|4|5) => {
    const patternGroup = patternGroupsDict[level];

    const patternType = getRandomElement(patternGroup);

    let selectedGoi;
    try {
      selectedGoi = getRandomElement(Object.values(patternType.patterns));
    } catch(e) {
      throw new Error(patternType.type + e);
    }

    const selectedMondai = getRandomElement(selectedGoi);

    return generateQuestion(selectedMondai, level);
}

const generateQuestion = (questionObject: any, level: number) => {
  if (questionObject.questionType === QuestionType.SENTENCE_ORDER) {
    console.log(questionObject)
    let sentence = questionObject.sentence;
  
    if (sentence.includes('　')) {
      throw new Error('includes Japanese full-width space! Delete please: ' + sentence);
    }
  
    let resultString = sentence.split(' ').reduce((sentence: string, token: string) => {
      return sentence += parseToken(token, questionObject, sentence, level);
    }, '');
    
    const alts = [ questionObject.p1, questionObject.p2, questionObject.p3, questionObject.p4 ].map(
      token => parseToken(token, {}, sentence, level)
    );
    const indexToQuery = Math.floor(Math.random()*(4));

    const [ correct ] = alts.splice(indexToQuery, 1);

    console.log(resultString);

    let insertString = '';

    // HACK OF THE YEAR!
    // want to use string value as key, but as invisible
    const spaces = [
      '    ',
      '    ',
      '    ',
    ];
    for (let i = 0, j = 0; i < 4; i++, j++) {
      if (i === indexToQuery) {
        insertString += '_★_';
        --j;
      } else {
        insertString += `_${spaces[j]}_`;
      }
      if (i < 3) {
        insertString += " |  "
      }
    }

    resultString = resultString.replace('*', insertString);

    return {
      questionText: resultString,
      correct,
      alts
    };
  } else {
    console.log(questionObject)
    let pattern = getRandomElement(questionObject.patterns);
  
    if (pattern.sentence.includes('　')) {
      throw new Error('includes Japanese full-width space! Delete please: ' + pattern.sentence);
    }
  
    let resultString = pattern.sentence.split(' ').reduce((sentence: string, token: string) => {
      return sentence += parseToken(token, questionObject, pattern, level);
    }, '');
  
  
    const alts = getRandomElements(questionObject.alts, 3);
  
    return {
      questionText: resultString,
      correct: questionObject.answer,
      alts
    };
  }
  
}
