import { getKanjiQuestion } from './question-generators/kanji/kanji-question-generator';
import { getGoiQuestion } from './question-generators/goi/goi-question-generator';
import { getBunpouQuestion } from './question-generators/bunpou/bunpou-question-generator';

export const generateTestSet = (level = 1) => {
  const kanjiQuestion = getKanjiQuestion(1);
  const goiQuestion = getGoiQuestion(1);
  const bunpouQuestion = getBunpouQuestion(1);

  console.log(kanjiQuestion)
  return {
    kanji: kanjiQuestion,
    goi: goiQuestion,
    bunpou: bunpouQuestion
  }
}