export default {
  "しらせて": [
    {
      answer: "おしえて",
      alts: [
        'すてて', 'きめて', 'なおして', 'わすれて', 'えらんで'
      ],
      patterns: [
        {
          sentence: "電話番号を | _しらせて_ | V1 。",
          inserts: {
            "V1": [ "ください", "いただけますか" ]
          }
        }
      ]
    }
  ]
}