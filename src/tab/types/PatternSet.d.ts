import { GoiCategory } from "../scripts/question-generators/goi/goi-category.enum";
import { BunpouCategory } from "../scripts/question-generators/bunpou/bunpou-category.enum";
import { KanjiCategory } from "../scripts/question-generators/kanji/kanji-category.enum";
import { QuestionType } from "../scripts/question-generators/common/question-type.enum";
import { PatternDict } from "./PatternDict";

export interface PatternSet {
  type: GoiCategory | BunpouCategory | KanjiCategory,
  patterns: PatternDict,
  questionType: QuestionType,
}