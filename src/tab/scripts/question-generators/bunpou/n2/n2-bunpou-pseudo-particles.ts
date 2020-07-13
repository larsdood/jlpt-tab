const patterns = {
  'だけに': [{
    //@todo flere varianter: n2 s23
    answer: "だけに",
    alts: [
      "くらいに", "について", "よう", "ほどに", "ごろ"
    ],
    patterns: [
      {
        sentence: 'N_name は | N_country:english 育ち ~、 | 英語が | 上手だ。'
      }
    ]
  }],
  "にあたって": [{
    //@todo flere varianter: n2 s26
    answer: "にあたり",
    alts: [
      "にしても", "にわたり", "にとって", "によると", "にたまらなくて"
    ],
    patterns: [
      {
        sentence: "n1 する ~ 、 | 色々な | n2 を | したほうがいい。",
        inserts: {
          n1: [ "結婚", "婚約", "同棲", "同居", "共同生活" ],
          n2: [ "話", "相談",  ]
        }
      }
    ]
  }],
  "につれて": [{
    answer: "につれて",
    alts: [
      "ばかり",
      "としないと",
      "について",
      "にとっては"
    ],
    patterns: [{
      sentence: "日本語が | 上手になる | ~ 、 | 日本人の n1 も | できるようになる。",
      inserts: {
        n1: [ "友達", "友人", "恋人" ]
      }
    }]
  }]
}

export default patterns;
