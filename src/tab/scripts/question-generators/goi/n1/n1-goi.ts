import adjectivePatterns from './n1-goi-adjectives';
import adverbPatterns from './n1-goi-adverbs';
import nounPatterns from './n1-goi-nouns';
import phrasesWordsPatterns from './n1-goi-phrases-words';
import verbPatterns from './n1-goi-verbs';
import { GoiCategory } from '../goi-category.enum';
import { QuestionType } from '../../common/question-type.enum';
import { PatternSet } from '../../../../types/PatternSet';

const patternTypes: PatternSet[] = [
  {
    type: GoiCategory.ADJECTIVE,
    patterns: adjectivePatterns,
    questionType: QuestionType.FILL_BLANK,
  },
  {
    type: GoiCategory.ADVERBS,
    patterns: adverbPatterns,
    questionType: QuestionType.FILL_BLANK,
  },
  {
    type: GoiCategory.NOUN,
    patterns: nounPatterns,
    questionType: QuestionType.FILL_BLANK,
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
  }
];

export default patternTypes;
