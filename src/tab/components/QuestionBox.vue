<template>
  <div class="question-content">
    <div v-bind:class="questionType + '-box content-box'">
      <div class="question-header">
        {{title}}
      </div>
      <div class="question-text-wrapper">
        <div id="kanji-question">
          <span class="question-text-block" v-for="questionSubText in questionTextElements" v-bind:key="questionSubText[0]">
            {{ questionSubText[0] }}<u>{{ questionSubText[1] }}</u>{{ questionSubText[2] }}
          </span>
        </div>
      </div>
      <div class="answer-buttons-wrapper">
        <button v-bind:class="questionType + '-answer answer-button'" v-for="alt in alts" v-bind:key="alt">
          {{ alt }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { shuffle } from '../scripts/utils/shuffle';
export default {
  props: [
    'questionSet',
    'questionType'
  ],
  watch: {
    questionSet: {
      handler: function(value) {
        console.log(value);
        this.questionTextElements = value.questionText.replace('~', '（　）').split('|').map(substring => substring.split('_'));
        console.log(this.questionTextElements);
        const alts = [
          value.correct,
          ...value.alts,
        ];
        this.alts = shuffle(alts);
      }
    }
  },
  data: function() {
    const titleLookup = {
      kanji: '漢字',
      goi: 'ごい',
      bunpou: '文法'
    }
    return {
      questionTextElements: [],
      alts: [],
      title: titleLookup[this.questionType]
    }
  }
}
</script>

<style scoped>
.question-content {
  height: 200px;
  font-size: 2em;
  margin: 18px 0;
}

.content-box {
  height: 100%;
  width: 350px;
  border-radius: 8px;
  padding: 8px;

  text-align: center;
}
.kanji-box {
  background-color: #FF9AA2;
}
.goi-box {
  background-color: #C7CEEA;
}
.bunpou-box {
  background-color: #E2F0CB;
}
.answer-buttons-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 8px;
  padding: 12px;
}
.answer-button {
  font-size: 0.75em;
  background-color: white;
  border: none;
  cursor: pointer;
}
.answer-button:hover {
  font-size: 0.75em;
  border: none;
}
.kanji-answer {
  color: #b3000e;
  border-bottom: solid 4px #e60012;
}
.kanji-answer:hover {
  color: #4d0006;
  background-color: #ffe5e8;
  border-bottom: solid 4px #ff1a2c;
}
.goi-answer {
  color: #314182;
  border-bottom: solid 4px #3f53a7;
}
.goi-answer:hover {
  color: #151c38;
  background-color: #eceff8;
  border-bottom: solid 4px #586dc0;
}
.bunpou-answer {
  color: #658b28;
  border-bottom: solid 4px #82b233;
}
.bunpou-answer:hover {
  color: #2b3b11;
  background-color: #f4f9eb;
  border-bottom: solid 4px #9ccc4d;
}
.question-text-block {
  display: inline-block;
}
.question-text-wrapper {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 4px;
}
</style>