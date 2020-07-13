const patterns = {
  ふざけんな: [{
    answer: "ふざけんな",
    alts: [
      "ふざけて",
      "ぶざけて",
      "はずけんな",
      "はずけて"
    ],
    patterns: [{
      sentence: "お前、 | 彼女 | できた？ ~ よ！",
    }]
  }],
  様子: [{
    answer: "様子を見よう",
    alts: [
      "様子を聞こう",
      "様子を出そう",
      "様子を離れよう",

    ],
    patterns: [{
      sentence: "どうすればいいか | まだ | わからない | から、 | しばらく | ~ と思う。",
    }]
  }]
}

export default patterns;
