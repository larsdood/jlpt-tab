const patterns = {
  "付ける": [{
    answer: "つけましょう",
    alts: [
      "あけましょう",
      "つきましょう",
      "あいてましょう",
    ],
    patterns: [{
      sentence: "くらいですね。| あかりを | ~ 。"
    }]
  }],
  "乾く": [{
    answer: "かわいた",
    alts: [
      "かわった",
      "こわいた",
      "こわった",
    ],
    patterns: [{
      sentence: "のどが ~ 。 | N_drink を | 飲みたい。"
    }]
  }],
  "貸す": [{
    answer: "かして",
    alts: [
      "かえして",
      "かりて",
      "くって",
    ],
    patterns: [{
      sentence: "やばい！ | さいふ | わすれた！ | 千円 | ~ くれない？"
    }]
  }],
  "着く": [{
    answer: "つきます。",
    alts: [
      "つくます",
      "こます",
      "いきます",
    ],
    patterns: [{
      sentence: "まもなく | N_trainStation:shinkansen に ~ 。"
    }]
  }]
}

export default patterns;
