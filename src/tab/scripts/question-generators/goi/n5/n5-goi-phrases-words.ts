const patterns = {
  "あのう": [{
    answer: "あのう",
    alts: [
      "すみます",
      "あなた",
      "へーい",
      "やほー",
      "こら",
      "ほら",
    ],
    patterns: [{
      sentence: "~ , | N_placeToGo:campus は | どこ | ですか？",
    }]
  }]
}

export default patterns;
