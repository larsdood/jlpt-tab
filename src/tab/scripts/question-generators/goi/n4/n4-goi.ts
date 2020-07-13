import contextPatterns from './n4-goi-context';
import nounPatterns from './n4-goi-nouns'
import synonymPatterns from './n4-goi-synonym';
import { GoiCategory } from '../goi-category.enum';
import { QuestionType } from '../../common/question-type.enum';

const patternTypes = [
  {
    type: GoiCategory.CONTEXT,
    patterns: contextPatterns,
    questionType: QuestionType.FILL_BLANK,
  },
  {
    type: GoiCategory.NOUN,
    patterns: nounPatterns,
    questionType: QuestionType.FILL_BLANK,
  },
  {
    type: GoiCategory.SYNONYM,
    patterns: synonymPatterns,
    questionType: QuestionType.REPLACE,
  }
];

export default patternTypes;
