const days = [
  [ "ついたち", "一日" ],
  [ "ふつか", "二日" ],
  [ "みっか", "三日" ],
  [ "よっか", "四日" ],
  [ "いつか", "五日" ],
  [ "むいか", "六日" ],
  [ "なのか", "七日" ],
  [ "ようか", "八日" ],
  [ "ここのか", "九日" ],
  [ "とおか", "十日" ],
  [ "じゅういちにち", "十一日" ],
  [ "じゅうににち", "十二日" ],
  [ "じゅうさんにち", "十三日" ],
  [ "じゅうよっか", "十四日" ],
  [ "じゅうごにち", "十五日" ],
  [ "じゅうろくにち", "十六日" ],
  [ "じゅうしちにち", "十七日" ],
  [ "じゅうはっちにち", "十八日" ],
  [ "じゅうきゅうにち", "十九日" ],
  [ "はつか", "二十日" ],
  [ "にじゅういちにち", "二十一日" ],
  [ "にじゅうににち", "二十二日" ],
  [ "にじゅうさんにち", "二十三日" ],
  [ "にじゅうよっか", "二十四日" ],
  [ "にじゅうごにち", "二十五日" ],
  [ "にじゅうろくにち", "二十六日" ],
  [ "にじゅうしちにち", "二十七日" ],
  [ "にじゅうはちにち", "二十八日" ],
  [ "にじゅうきゅうにち", "二十九日" ],
  [ "さんじゅうにち", "三十日" ],
  [ "さんじゅういちにち", "三十一日" ],

];

const months = [
  [ "いちがつ", "一月" ],
  [ "にがつ", "二月" ],
  [ "さんがつ", "三月" ],
  [ "しがつ", "四月" ],
  [ "ごがつ", "五月" ],
  [ "ろくがつ", "六月" ],
  [ "しちがつ", "七月" ],
  [ "はちがつ", "八月" ],
  [ "くがつ", "九月" ],
  [ "じゅうがつ", "十月" ],
  [ "じゅういちがつ", "十一月" ],
  [ "じゅうにがつ", "十二月" ],
];

const getDaysPerMonth = (monthNumber: number) => {
  // change to 1-index
  monthNumber += 1;
  if (monthNumber === 2) {
    return 29;
  }

  if ([4, 6, 9, 11].includes(monthNumber)) {
    return 30;
  }

  return 31;
}

enum QuestionCategory {
  MONTH,
  DAY,
}

export const generateDateMondai = () => {
  const questionCategory = Math.random() < 0.5 ? QuestionCategory.DAY : QuestionCategory.MONTH;
  
  const selectedMonthIndex = Math.floor(Math.random() * 12);

  
  const daysInMonth = getDaysPerMonth(selectedMonthIndex);
  
  const selectedDayIndex = Math.floor(Math.random() * daysInMonth);
  
  
  const monthsCopy = [...months];
  const daysCopy = [...days];
  
  const [ selectedMonthEntry ] = monthsCopy.splice(selectedMonthIndex, 1);

  const [ selectedDayEntry ] = daysCopy.splice(selectedDayIndex, 1);

  let altEntries = [];
  let mondai;
  if (questionCategory === QuestionCategory.MONTH) {
    while(altEntries.length < 3) {
      altEntries.push(monthsCopy.splice(Math.floor(Math.random() * (monthsCopy.length)), 1)[0]);
    }

    mondai = {
      kanji: selectedMonthEntry[1],
      yomikata: selectedMonthEntry[0],
      kanjiAlts: altEntries.map(([_, kanji]) => kanji),
      yomikataAlts: altEntries.map(([yomikata]) => yomikata),
      patterns: [{
        sentence: `今日は | SOL | ${selectedDayEntry[1]} | です。`,
      },
      {
        sentence: `n1 は | SOL | ${selectedDayEntry[1]} | でした。`,
        inserts: {
          n1: [ 'きのう', 'おととい' ]
        }
      },
      {
        sentence: 'ことしの SOL に | N_country に | 帰ります。'
      },
    ]
    }

  } else {
    while(altEntries.length < 3) {
      altEntries.push(daysCopy.splice(Math.floor(Math.random() * (daysCopy.length)), 1)[0]);
    }

    mondai = {
      kanji: selectedDayEntry[1],
      yomikata: selectedDayEntry[0],
      kanjiAlts: altEntries.map(([_, kanji]) => kanji),
      yomikataAlts: altEntries.map(([yomikata]) => yomikata),
      patterns: [{
        sentence: `今日は | ${selectedMonthEntry[1]} | SOL | です。`,
      },
      {
        sentence: `n1 は | ${selectedMonthEntry[1]} | SOL | でした。`,
        inserts: {
          n1: [ 'きのう', 'おととい' ]
        }
      },
      {
        sentence: 'しけんは | SOL に | あります。'
      }]
    }
  }

  return mondai;
}