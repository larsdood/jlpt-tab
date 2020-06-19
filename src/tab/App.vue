<template>
  <div class="main-wrapper">
    <h1 class="title">JLPT N{{ level }}</h1>
    <QuestionBox questionType="kanji" v-bind:question-set="kanjiQuestionSet"></QuestionBox>
    <QuestionBox questionType="goi" v-bind:question-set="goiQuestionSet"></QuestionBox>
    <QuestionBox questionType="bunpou" v-bind:question-set="bunpouQuestionSet"></QuestionBox>
  </div>
</template>

<script>
import { generateTestSet } from './scripts/test-set';
import QuestionBox from './components/QuestionBox';

export default {

  created() {
    console.log('is created')
    this.getLevelFromStorage();
  },
  data () {
    return {
      level: undefined,
      kanjiQuestionSet: {},
      goiQuestionSet: {},
      bunpouQuestionSet: {},
    }
  },
  methods: {
    getLevelFromStorage() {
      chrome.storage.local.get("level", (res) => {
        let level;
        if (!res.level) {
          level = 5;
          chrome.storage.local.set({ level }, () => {});
        } else {
          level = res.level;
        }
        this.level = level;
        const testSet = generateTestSet();
        console.log(generateTestSet());
        // this.kanjiQuestion = testSet.kanji.questionText;
        this.kanjiQuestionSet = testSet.kanji;
        this.goiQuestionSet =  testSet.goi;
        this.bunpouQuestionSet = testSet.bunpou;
      });
    }
  },
  components: {
    QuestionBox
  }
}
</script>

<style scoped>
@font-face {
  font-family: "KosugiRegular";
  src: url("MPLUS1p-Medium.ttf");
  }
.main-wrapper {
  font-family: "KosugiRegular";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333
}
p {
  font-size: 20px;
}


.main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333
}

.title {
  justify-self: center;
}
</style>