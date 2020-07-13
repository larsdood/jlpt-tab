export default {
  "に": [{
    answer: "に",
    alts: [
      "が", "は", "を", "も"
    ],
    patterns: [
      {
        sentence: "わたしは | あした N_placeToGo ~ | V1 。",
        inserts: {
          V1: [ "いきます", "いきたいです", "いく", "いきたい" ]
        }
      }
    ]
  }],
  "を": [{
    answer: "を",
    alts: [
      "に", "が", "へ", "で"
    ],
    patterns: [
      {
        sentence: "N_food ~ | V1 。",
        inserts: {
          V1: [
            "たべます",
            "たべました",
            "たべたい",
            "たべたいです"
          ]
        }
      },
      {
        sentence: "N_drink ~ | V1 。",
        inserts: {
          V1: [
            "のみます",
            "のみました",
            "のみたいです",
            "のみたい"
          ]
        }
      },
      {
        sentence: "この道 ~ | まっすぐ | 行ってください。"
      }
    ]
  }],
  'が': [
    {
      answer: 'が',
      alts: [ "を", "に", "から", "の" ],
      patterns: [
        {
          sentence: "N_name は | N_familyMember:sibling ~ いますか？"
        }
      ]
    }
  ],
  "で": [
    {
      answer: "で",
      alts: [ "を", "に", "へ", "が" ],
      patterns: [
        {
          sentence: "N_transportation:shortRange ~ | 行きます。"
        }
      ]
    }
  ],
  "と": [
    {
      answer: "と",
      alts: [ "を", "で", "に", ],
      patterns: [
        {
          sentence: "N_name ~ | けっこんします！"
        }
      ]
    }
  ],
  "か": [
    {
      answer: "か",
      alts: [ "や", "を", "と", "も", "が" ],
      patterns: [
        {
          sentence: "N_drink ~ N_alcohol 、 | どっち飲む？",
        }
      ]
    }
  ]
}