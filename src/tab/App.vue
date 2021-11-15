<template>
  <div class="main-wrapper">
    <div class="level-buttons">
      <button
        v-bind:class="'level-button level-button-'+ levelChoice + ' ' + (levelChoice === level ? 'chosen' : 'not-chosen')"
        v-for="levelChoice in levelChoices"
        v-bind:key="levelChoice"
        v-on:click="setLevel(levelChoice)"
      >
        N{{ levelChoice }}
      </button>
    </div>
    <GoogleSearch v-if="chosenCount >= 3"></GoogleSearch>

    <QuestionBox
      questionType="kanji"
      v-bind:question-set="kanjiQuestionSet"
      v-on:alternativeChosen="alternativeChosen"
      ></QuestionBox>
    <QuestionBox
      questionType="goi"
      v-bind:question-set="goiQuestionSet"
      v-on:alternativeChosen="alternativeChosen"
      ></QuestionBox>
    <QuestionBox
      questionType="bunpou"
      v-bind:question-set="bunpouQuestionSet"
      v-on:alternativeChosen="alternativeChosen"
      ></QuestionBox>
    <button
      v-on:click="again()"
      class="again-button">↻ また</button>
    
  </div>
</template>
<script>

import { generateTestSet } from './scripts/test-set';
import QuestionBox from './components/QuestionBox.vue';
import LevelPicker from './components/LevelPicker.vue';
import GoogleSearch from './components/GoogleSearch.vue';

export default {

  created() {
    this.getLevelFromStorage();
  },
  data () {
    return {
      level: undefined,
      levelChoices: [ 5, 4, 3, 2, 1 ],
      kanjiQuestionSet: {},
      goiQuestionSet: {},
      bunpouQuestionSet: {},
      chosenCount: 0,
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
        this.generateTestSet(this.level);
      });
    },

    setLevel(levelChoice) {
      if (this.level === levelChoice) {
        return;
      }
      chrome.storage.local.set({ level: levelChoice }, () => {
        this.level = levelChoice;
        this.generateTestSet(this.level);
      });
      this.chosenCount = 0;
    },

    generateTestSet(level) {
      const testSet = generateTestSet(level);
      this.kanjiQuestionSet = testSet.kanji;
      this.goiQuestionSet = testSet.goi;
      this.bunpouQuestionSet = testSet.bunpou;
    },

    again() {
      this.chosenCount = 0;
      this.generateTestSet(this.level);
    },

    alternativeChosen() {
      this.chosenCount += 1;
    }
  },
  components: {
    QuestionBox,
    LevelPicker,
    GoogleSearch,
  }
}
</script>

<style scoped lang="scss">
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
  color: #333;
}
p {
  font-size: 20px;
}

button {
  outline: none;
}

.main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333;
}

.title {
  justify-self: center;
}

.level-buttons {
  margin: 16px 0 4px;
  width: 366px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.level-button {
  padding: 4px 20px;
  background-color: #efefef;
  cursor: pointer;
  border: none;
  font-size: 1.5em;
  border-bottom: 4px solid gray;

  &.not-chosen:not(:hover) {
    color: #333;
    background-color: #efefef;
    border-bottom: 4px solid gray;
  }
  &:hover {
    filter: brightness(92%);
  }
}
.level-button-1 {
  color: #36797d;
  background-color: #edf7f7;
  border-bottom: 4px solid #5fb5ba;
}
.level-button-2 {
  color: #a33c10;
  background-color: #fdeee8;
  border-bottom: 4px solid #eb662e;
}
.level-button-3 {
  color: #473d75;
  background-color: #f0eef6;
  border-bottom: 4px solid #7568b0;
}
.level-button-4 {
  color: #b10101;
  background-color: #ffe6e6;
  border-bottom: 4px solid #fd1b1b;
}
.level-button-5 {
  color: #02337e;
  background-color: #e6f0ff;
  border-bottom: 4px solid #1c75fc;
}
.again-button {
  margin-top: 8px;
  width: 100px;
  border: none;
  border-bottom: 4px solid #df3a7c;
  font-size: 1.5em;
  padding: 4px;
  color: #6e1237;
  background-color: #fbe9f0;
  &:hover {
    filter: brightness(92%);
    cursor: pointer;
  }
}
@media only screen and (max-width: 389px) {
  .level-buttons {
    width: 100%;
  }
  .level-button {
    padding: 4px 0;
    width: 100%;
  }
}
</style>

<style>
@media only screen and (max-width: 389px) {
  body {
    margin: 8px 0;
  }
}
</style>
