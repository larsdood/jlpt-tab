import { PatternDict } from "../../../../types/PatternDict";

const patternDict: PatternDict = {
  いちじるしく: [{
    answer: "いちじるしく",
    alts: [
      "こまかく",
      "さびしく",
      "なつかしく",
    ],
    patterns: [
      {
        sentence: "新型コロナウイルスの | 影響で | n1 は | ~ | ダメージ | されました。",
        inserts: {
          n1: [ "弊社", "我が国の経済", "政府", "私の仕事", ]
        }
      }
    ]
  }],
  とっさに: [{
    answer: "とっさに",
    alts: [
      "ばらばら",
      "かりに",
      "久しぶりに",
    ],
    patterns: [{
      sentence: "ハッキングされたと | わかったと | ~ | 電気を | 切った。"
    }]
  }]
}

export default patternDict;
