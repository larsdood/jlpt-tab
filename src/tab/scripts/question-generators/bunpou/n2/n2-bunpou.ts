import conjugationPatterns from './n2-bunpou-conjugation';
import postfixPatterns from './n2-bunpou-postfix';
import pseudoParticlesPatterns from './n2-bunpou-pseudo-particles';
import { BunpouCategory } from '../bunpou-category.enum';
import { QuestionType } from '../../common/question-type.enum';

const patternTypes = [
  {
    type: BunpouCategory.POSTFIX,
    patterns: postfixPatterns,
    questionType: QuestionType.FILL_BLANK,
  },
  {
    type: BunpouCategory.CONJUGATION,
    patterns: conjugationPatterns,
    questionType: QuestionType.FILL_BLANK,
  },
  {
    type: BunpouCategory.PSEUDO_PARTICLES,
    patterns: pseudoParticlesPatterns,
    questionType: QuestionType.FILL_BLANK,
  }
];

export default patternTypes;