import adjectivePatterns from './n5-goi-adjective';
import katakanaPatterns from './n5-goi-katakana';
import phrasesWordsPatterns from './n5-goi-phrases-words';
import verbPatterns from './n5-goi-verb';
import { getRandomElement } from '../../../utils/get-random-element';
import { GoiCategory } from '../goi-category.enum';
import { QuestionType } from '../../common/question-type.enum';

const patternTypes = [
  {
    type: GoiCategory.ADJECTIVE,
    patterns: adjectivePatterns,
    questionType: QuestionType.FILL_BLANK
  },
  {
    type: GoiCategory.KATAKANA,
    patterns: katakanaPatterns,
    questionType: QuestionType.REPLACE,
  },
  {
    type: GoiCategory.PHRASE_OR_WORD,
    patterns: phrasesWordsPatterns,
    questionType: QuestionType.FILL_BLANK,
  },
  {
    type: GoiCategory.VERB,
    patterns: verbPatterns,
    questionType: QuestionType.FILL_BLANK,
  },
]

export default patternTypes;

export const getN5GoiMondai = () => {
  const patternType = getRandomElement(patternTypes);

  const selectedGoi = getRandomElement(Object.values(patternType.patterns));

  const selectedMondai = getRandomElement(selectedGoi);

  return {
    ...selectedMondai,
    questionType: patternType.questionType
  };
}