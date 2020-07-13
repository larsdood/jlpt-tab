import { BunpouCategory } from "../bunpou-category.enum";
import conjugationPatterns from './n4-bunpou-conjugation';
import pseudoParticlesPatterns from './n4-bunpou-pseudo-particles';
import { QuestionType } from "../../common/question-type.enum";

const patternTypes = [
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
