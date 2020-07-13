const patterns = {
  "だれか": [{
    answer: "だれか",
    alts: [
      "だれが",
      "だれも",
      "だれでも",
    ],
    patterns: [
      {
        sentence: "~ | 手伝って | ください。"
      }
    ]
  }]
}

export default patterns;
