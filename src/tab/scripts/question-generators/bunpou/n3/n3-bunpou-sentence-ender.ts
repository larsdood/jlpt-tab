const patterns = {
  "たものだ": [{
    answer: "ものだ",
    alts: [
      "ことか", "ことがある", "ものか", "ものが"
    ],
    patterns: [
      {
        sentence: "n1 の n2 、 | よくコンサートに | 行った ~ 。",
        inserts: {
          n1: [ "学校", "中学校", "高校", "少年" ],
          n2: [ "とき", "時代", ]
        }
      }
    ]
  }],
  "だろうと思う": [{
    answer: "だろう",
    alts: [
      "だろ",
      "だに",
      "だな",
    ],
    patterns: [{
      sentence: "皆来れる | ~ と思う。"
    }]
  },
  {
    answer: "できない",
    alts: [
      "できよう",
      "でき",
      "でこう"
    ],
    patterns: [{
      sentence: "デートに誘うのが | ~ だろうと | 思う。"
    }]
  }
],
  "つもりだったが": [{
    answer: "つもりだった",
    alts: [
      "つもりだ",
      "つもった",
      "つもりした",
    ],
    patterns: [{
      sentence: "合コンキャンセル？！ | v1 ~ が・・・",
      inserts: {
        v1: [ "行く", "参加する", ]
      }
    }]
  }]
}

export default patterns;
