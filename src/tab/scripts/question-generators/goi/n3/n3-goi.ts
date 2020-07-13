import verbPatterns from './n3-goi-verbs';
import nounPatterns from './n3-goi-nouns';
import phrasesWords from './n3-goi-phrases-words';
import { GoiCategory } from '../goi-category.enum';
import { QuestionType } from '../../common/question-type.enum';

const patternTypes = [
  {
    type: GoiCategory.VERB,
    patterns: verbPatterns,
    questionType: QuestionType.FILL_BLANK,
  },
  {
    type: GoiCategory.NOUN,
    patterns: nounPatterns,
    questionType: QuestionType.FILL_BLANK,
  },
  {
    type: GoiCategory.PHRASE_OR_WORD,
    patterns: phrasesWords,
    questionType: QuestionType.FILL_BLANK,
  }
];

export default patternTypes;
