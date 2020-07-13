export default {
  '築': [{
    answer: "築",
    alts: [
      "軽", "過", "建", "不", "無", "非"
    ],
    patterns: [
      {
        sentence: "~ N_wholeNumber:15-30 年の N_building:residential だと | 家賃が | a1 | ですよ！",
        inserts: {
          a1: [ "安い", "低い" ]
        }
      },
      {
        sentence: "N_familyMember:old は | ~ N_wholeNumber:40-60 年の N_building:residential に | 住んでいます。"
      }
    ]
  }]
}