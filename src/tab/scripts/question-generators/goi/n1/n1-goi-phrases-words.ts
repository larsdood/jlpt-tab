import { PatternDict } from "../../../../types/PatternDict";

const patternDict: PatternDict = {
  すんなり: [{
    answer: "すんなり",
    alts: [
      "きっかり",
      "きっぱり",
      "はっきり",
      "がっしり",
    ],
    patterns: [{
      sentence: "N_name は | さすが | ~ | n1 | できました。",
      inserts: {
        n1: [ "入社", "入学", ],
      }
    }]
  }],
  無茶: [{
    answer: "無茶",
    alts: [
      "有茶",
      "紅茶",
      "緑茶",
    ],
    patterns: [{
      sentence: "英語を | 勉強せず | 一人旅行するって、 | ~ | だよ！",
    }]
  }]
}

export default patternDict;
