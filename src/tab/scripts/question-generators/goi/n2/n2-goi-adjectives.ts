const patterns = {
  だるい: [{
    answer: "だるい",
    alts: [
      "ゲロっぽい",
      "みっともない",
      "えぐい",
    ],
    patterns: [{
      sentence: "o1 | 体が | ~ 。",
      inserts: {
        o1: [ "今日すごく | 二日酔いで", "昨日 | 飲みすぎたので" ]
      }
    }]
  }],
  なさけない: [{
    answer: "なさけない",
    alts: [
      "えらい",
      "えろい",
      "おしい",
      "あやしい",
    ],
    patterns: [{
      sentence: "一生懸命頑 | 張ったと | 言ったのに、 | これしか | できてない？ | ~ よ！",
    }]
  }]
}

export default patterns;
