// Implement: hvert klokkeslett som oppgave
import kunyomiPatterns from './n5-kanji-kun';
import onyomiPatterns from './n5-kanji-on';
import { KanjiCategory } from "../kanji-category.enum";
import { QuestionType } from "../../common/question-type.enum";
import { generateTimeMondai } from "./n5-kanji-time";
import { generateDateMondai } from "./n5-kanji-date";

const patternTypes = [
  {
    type: KanjiCategory.KUNYOMI,
    patterns: kunyomiPatterns,
    questionType: QuestionType.REPLACE
  },
  {
    type: KanjiCategory.ONYOMI,
    patterns: onyomiPatterns,
    questionType: QuestionType.REPLACE
  },
  {
    type: KanjiCategory.OTHER,
    patternFunction: generateTimeMondai,
    questionType: QuestionType.REPLACE
  },
  {
    type: KanjiCategory.OTHER,
    patternFunction: generateDateMondai,
    questionType: QuestionType.REPLACE,
  },
]

export default patternTypes;
