import { BunpouCategory } from "../bunpou-category.enum";
import conjugationPatterns from "./n5-bunpou-conjugations";
import particlePatterns from './n5-bunpou-particles';
import pseudoparticlesPatterns from './n5-bunpou-pseudo-particles';
import sentencePatterns from './n5-bunpou-sentences';
import { QuestionType } from "../../common/question-type.enum";

const patternTypes = [
  {
    type: BunpouCategory.CONJUGATION,
    patterns: conjugationPatterns,
    questionType: QuestionType.FILL_BLANK,
  },
  {
    type: BunpouCategory.SENTENCE_ORDER,
    patterns: sentencePatterns,
    questionType: QuestionType.SENTENCE_ORDER
  },
  {
    type: BunpouCategory.PSEUDO_PARTICLES,
    patterns: pseudoparticlesPatterns,
    questionType: QuestionType.FILL_BLANK,
  },
  {
    type: BunpouCategory.PARTICLE,
    patterns: particlePatterns,
    questionType: QuestionType.FILL_BLANK,
  },
];

export default patternTypes;

