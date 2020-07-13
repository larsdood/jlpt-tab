import conjugationPatterns from './n3-bunpou-conjugation';
import particlesPatterns from './n3-bunpou-particles';
import sentenceEndingsPatterns from './n3-bunpou-sentence-ender';
import { BunpouCategory } from '../bunpou-category.enum';
import { QuestionType } from '../../common/question-type.enum';

const patternTypes = [
  {
    type: BunpouCategory.SENTENCE_ENDER,
    patterns: sentenceEndingsPatterns,
    questionType: QuestionType.FILL_BLANK,
  },
  {
    type: BunpouCategory.CONJUGATION,
    patterns: conjugationPatterns,
    questionType: QuestionType.FILL_BLANK,
  },
  {
    type: BunpouCategory.PARTICLE,
    patterns: particlesPatterns,
    questionType: QuestionType.FILL_BLANK,
  }
];

export default patternTypes;
