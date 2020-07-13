const timeEntries = [
  [ "いちじ", "一時" ],
  [ "にじ", "二時" ],
  [ "さんじ", "三時" ],
  [ "よじ", "四時" ],
  [ "ごじ", "五時" ],
  [ "ろくじ", "六時" ],
  [ "しちじ", "七時" ],
  [ "はちじ", "八時" ],
  [ "くじ", "九時" ],
  [ "じゅうじ", "十時" ],
  [ "じゅういちじ", "十一時" ],
  [ "じゅうにじ", "十二時" ],
];

export const generateTimeMondai = () => {
  const timeEntriesCopy = [ ...timeEntries];

  const [ selectedMondai ] = timeEntriesCopy.splice(Math.floor(Math.random() * (timeEntriesCopy.length)), 1);

  let altEntries = [];

  while(altEntries.length < 3) {
    altEntries.push(timeEntriesCopy.splice(Math.floor(Math.random() * (timeEntriesCopy.length)), 1)[0]);
  }

  const mondai = {
    kanji: selectedMondai[1],
    yomikata: selectedMondai[0],
    kanjiAlts: altEntries.map(([_, kanji]) => kanji),
    yomikataAlts: altEntries.map(([yomikata]) => yomikata),
    patterns: [{
      sentence: "今 SOL です。"
    },
    {
      sentence: "でんしゃが SOL に | きます。"
    },
    {
      sentence: "SOL に | かえります。"
    },
    {
      sentence: "SOL に | n1 であいましょう！",
      inserts: {
        n1: [ "えいがかん", "としょかん", "えき" ]
      }
    }]
  }

  return mondai;
}


