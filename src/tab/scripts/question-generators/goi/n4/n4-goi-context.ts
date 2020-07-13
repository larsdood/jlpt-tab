const patterns = {
  "レシート": [
    {
      answer: "レシート",
      alts: [
        "レジ", "おつり", "さいふ", "ふくろ", "げんきん"
      ],
      patterns: [
        {
          sentence: "N_shop で | もらった ~ を | V1 と、 | 何を | 買ったか | V2",
          inserts: {
            "V1": [ "見る" ],
            "V2": [
              "わかる", "わかります"
            ]
          }
        }
      ]
    }
  ]
}

export default patterns;