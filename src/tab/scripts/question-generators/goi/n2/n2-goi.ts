import adjectivePatterns from './n2-goi-adjectives';
import phrasesWordsPatterns from './n2-goi-phrases-words';
import singleKanjiPatterns from './n2-goi-single-kanji';
import verbPatterns from './n2-goi-verbs';
import { GoiCategory } from '../goi-category.enum';
import { QuestionType } from '../../common/question-type.enum';

const patternTypes = [
  {
    type: GoiCategory.ADJECTIVE,
    patterns: adjectivePatterns,
    questionType: QuestionType.FILL_BLANK,
  },
  {
    type: GoiCategory.PHRASE_OR_WORD,
    patterns: phrasesWordsPatterns,
    questionType: QuestionType.FILL_BLANK,
  },
  {
    type: GoiCategory.SINGLE_KANJI,
    patterns: singleKanjiPatterns,
    questionType: QuestionType.FILL_BLANK,
  },
  {
    type: GoiCategory.VERB,
    patterns: verbPatterns,
    questionType: QuestionType.FILL_BLANK,
  },
]

export default patternTypes;
