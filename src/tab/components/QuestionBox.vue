<template>
  <div class="question-content">
    <div v-bind:class="questionType + '-box content-box'">
      <div class="question-header">
        {{title}}
      </div>
      <div class="question-text-wrapper">
        <div id="kanji-question">
          <span class="question-text-block" v-for="questionSubText in questionTextElements" v-bind:key="questionSubText[0]+questionSubText[1]+questionSubText[2]">
            {{ questionSubText[0] }}<u>{{ questionSubText[1] }}</u>{{ questionSubText[2] }}
          </span>
        </div>
      </div>
      <div 
        v-if="!chosen"
        class="answer-buttons-wrapper">
        <button
          v-bind:class="questionType + '-answer answer-button active'"
          v-for="alt in alts"
          v-bind:key="alt"
          v-on:click="chooseAlternative(alt)"
          :disabled="!!chosen"
        >
          {{ alt }}
        </button>
      </div>
      <div 
        v-if="!!chosen"
        class="answer-buttons-wrapper">
        <button
          v-bind:class="(alt === correct ? 'correct' : 'incorrect') + ' ' + (alt === chosen ? 'chosen' : '' ) + ' answer-button'"
          v-for="alt in alts"
          v-bind:key="alt"
          disabled="true"
        >
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
        console.log(value.questionText);
        this.questionTextElements = value.questionText
          .replace('~', '（　）')
          .split('|')
          .map((substring) => substring.split('_'));
        console.log(this.questionTextElements)
        if (value.alts.includes(value.correct)) {
          throw new Error('correct value ' + value.correct + ' is contained in alts: ' + alts.join(','));
        }
        const alts = [
          value.correct,
          ...value.alts,
        ];
        this.alts = shuffle(alts);
        this.correct = value.correct;
        this.chosen = undefined;
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
      title: titleLookup[this.questionType],
      chosen: undefined,
      correct: undefined
    }
  },
  methods: {
    chooseAlternative(val) {
      console.log(val);
      this.chosen = val;
      this.$emit('alternativeChosen', this.questionType);
    }
  }
}
</script>

<style scoped lang="scss">
button {
  outline:none
}
.question-content {
  font-size: 2em;
  margin: 8px 0;
}
.question-header {
  margin-bottom: 4px;
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
  &.active {
    cursor: pointer;
  }
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
  &:hover {
    color: #151c38;
    background-color: #eceff8;
    border-bottom: solid 4px #586dc0;
  }
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
.correct {
  color: #333;
  border-bottom: solid 4px black;
  &:hover {
    border-bottom: solid 4px black;
  }
}
.incorrect {
  border-bottom: solid 4px #888;
  &.chosen {
    color: red;
    border-bottom: solid 4px red;
    &:hover {
      border-bottom: solid 4px red;
  }
  }
  &:hover {
    border-bottom: solid 4px #888;
  }
}

.question-text-block {
  display: inline-block;
}
.question-text-wrapper {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 4px;
}

@media only screen and (max-width: 389px) {
  .question-content {
    width: 100%;
  }
  .content-box {
    width: 100%;
    border-radius: 0px;
    padding: 8px 0;
  }
  .question-text-wrapper {
    border-radius: 0;
  }
}
</style>