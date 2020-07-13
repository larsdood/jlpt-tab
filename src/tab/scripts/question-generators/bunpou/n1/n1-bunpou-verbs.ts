const patterns = {
  "兼ねて": [
    {
      answer: 'かねて',
      alts: [
        'かなり', 'かてね', 'かまらなくて', 'かまって', 'かんが', 'かんじ'
      ],
      patterns: [
        {
          sentence: 'N_name は | 友達作りと | 恋愛を | ~ n1 | に行ってる。',
          inserts: {
            n1: [ '合コン', 'デート', "ブラインドデート" ]
          }
        }
      ]
    }
  ],
}

export default patterns;
