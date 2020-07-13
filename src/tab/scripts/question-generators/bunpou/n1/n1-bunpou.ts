import pseudoParticlesPatterns from './n1-bunpou-pseudo-particles';
import conjugationPatterns from './n1-bunpou-conjugation';
import sentenceEnderPatterns from './n1-bunpou-sentence-ender';
import verbsPatterns from './n1-bunpou-verbs';
import { BunpouCategory } from '../bunpou-category.enum';
import { QuestionType } from '../../common/question-type.enum';

const patternTypes = [
  {
    type: BunpouCategory.PSEUDO_PARTICLES,
    patterns: pseudoParticlesPatterns,
    questionType: QuestionType.FILL_BLANK,
  },
  {
    type: BunpouCategory.CONJUGATION,
    patterns: conjugationPatterns,
    questionType: QuestionType.FILL_BLANK,
  },
  {
    type: BunpouCategory.VERB,
    patterns: verbsPatterns,
    questionType: QuestionType.FILL_BLANK,
  },
  {
    type: BunpouCategory.SENTENCE_ENDER,
    patterns: sentenceEnderPatterns,
    questionType: QuestionType.FILL_BLANK,
  }
];

export default patternTypes;