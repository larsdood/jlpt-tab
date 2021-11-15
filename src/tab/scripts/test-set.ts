import { getKanjiQuestion } from './question-generators/kanji/kanji-question-generator';
import { getGoiQuestion } from './question-generators/goi/goi-question-generator';
import { getBunpouQuestion } from './question-generators/bunpou/bunpou-question-generator';

export const generateTestSet = (level: 1|2|3|4|5) => {
  const kanjiQuestion = getKanjiQuestion(level);
  const goiQuestion = getGoiQuestion(level);
  const bunpouQuestion = getBunpouQuestion(level);

  return {
    kanji: kanjiQuestion,
    goi: goiQuestion,
    bunpou: bunpouQuestion
  }
}