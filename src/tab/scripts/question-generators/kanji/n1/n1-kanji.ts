import kunyomiPatterns from './n1-kanji-kun';
import onyomiPatterns from './n1-kanji-on';
import otherPatterns from './n1-kanji-other';
import { KanjiCategory } from '../kanji-category.enum';
import { QuestionType } from '../../common/question-type.enum';

const patternTypes = [
  {
    type: KanjiCategory.KUNYOMI,
    patterns: kunyomiPatterns,
    questionType: QuestionType.REPLACE,
  },
  {
    type: KanjiCategory.ONYOMI,
    patterns: onyomiPatterns,
    questionType: QuestionType.REPLACE,
  },
  {
    type: KanjiCategory.OTHER,
    patterns: otherPatterns,
    questionType: QuestionType.REPLACE
  }
]

export default patternTypes;
