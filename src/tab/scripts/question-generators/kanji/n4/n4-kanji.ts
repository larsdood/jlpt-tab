import kunyomiPatterns from './n4-kanji-kun';
import onyomiPatterns from './n4-kanji-on';
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
  }
]

export default patternTypes;
