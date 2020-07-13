import { PatternDict } from "../../../../types/PatternDict";

const patternDict: PatternDict = {
  推測: [
    {
      answer: "推測",
      alts: [ "観戦", "納得", "告白" ],
      patterns: [
        {
          sentence: "N_nameOrPronoun の年齢を | ~ できますか。"
        }
      ]
    }
  ],
  共稼ぎ: [
    {
      answer: "共稼ぎ",
      alts: [
        "恐喝",
        "平滑化",
        "研修",
      ],
      patterns: [
        {
          sentence: "日本で | n1 が | ~ するのは | ありふれた。",
          inserts: {
            n1: [ "家庭", "夫婦", "夫と妻", ]
          }
        }
      ]
    }
  ]
};

export default patternDict;
