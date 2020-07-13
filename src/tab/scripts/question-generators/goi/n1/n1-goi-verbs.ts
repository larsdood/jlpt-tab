const patternDict = {
  交える: [{
    answer: "交えて",
    alts: [
      "超えて",
      "冷えて",
      "増えて",
    ],
    patterns: [{
      sentence: "身振りを | ~ | 話す。",
    }]
  }],
  滞る: [{
    answer: "滞っている",
    alts: [
      "異なっている",
      "サボっている",
      "乱れている",
    ],
    patterns: [{
      sentence: "コロナの影響で | シフトが | 少なくなってきたので、 | n1 は | ~ 。",
      inserts: {
        n1: [ "部屋代", "電気代",  ]
      }
    }]
  }]
}

export default patternDict;
