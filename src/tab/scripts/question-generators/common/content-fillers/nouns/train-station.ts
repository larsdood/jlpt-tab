import { getRandomElement } from "../../../../utils/get-random-element";


const trainStations = [
  {
    text: 'とうきょう',
    qualifiers: [
      "yamanote",
      "shinkansen"
    ],
    levels: "5"
  },
  {
    text: '東京',
    qualifiers: [
      "yamanote",
      "shinkansen"
    ],
    levels: "1234"
  },
  {
    text: 'しながわ',
    qualifiers: [
      "yamanote",
      "shinkansen"
    ],
    levels: "5"
  },
  {
    text: '品川',
    qualifiers: [
      "yamanote",
      "shinkansen"
    ],
    levels: "1234"
  },
  {
    text: 'しんよこはま',
    qualifiers: [
      "shinkansen"
    ],
    levels: "45"
  },
  {
    text: '新横浜',
    qualifiers: [
      "shinkansen"
    ],
    levels: "123"
  },
  {
    text: 'しんふじ',
    qualifiers: [
      "shinkansen"
    ],
    levels: "45"
  },
  {
    text: '新富士',
    qualifiers: [
      "shinkansen"
    ],
    levels: "123"
  },
  {
    text: 'しずおか',
    qualifiers: [
      "shinkansen"
    ],
    levels: "45"
  },
  {
    text: '静岡',
    qualifiers: [
      "shinkansen"
    ],
    levels: "123"
  },
  {
    text: 'なごや',
    qualifiers: [
      "shinkansen"
    ],
    levels: "45"
  },
  {
    text: '名古屋',
    qualifiers: [
      "shinkansen"
    ],
    levels: "123"
  },
  {
    text: 'きょうと',
    qualifiers: [
      "shinkansen"
    ],
    levels: "5"
  },
  {
    text: '京都',
    qualifiers: [
      "shinkansen"
    ],
    levels: "1234"
  },
  {
    text: 'しんおおさか',
    qualifiers: [
      "shinkansen"
    ],
    levels: "5"
  },
  {
    text: '新大阪',
    qualifiers: [
      "shinkansen"
    ],
    levels: "1234"
  },
  {
    text: 'しんこうべ',
    qualifiers: [
      "shinkansen"
    ],
    levels: "45"
  },
  {
    text: '新神戸',
    qualifiers: [
      "shinkansen"
    ],
    levels: "123"
  },
  {
    text: 'ひめじ',
    qualifiers: [
      "shinkansen"
    ],
    levels: "345"
  },
  {
    text: '姫路',
    qualifiers: [
      "shinkansen"
    ],
    levels: "12"
  },
  {
    text: 'おかやま',
    qualifiers: [
      "shinkansen"
    ],
    levels: "45"
  },
  {
    text: '岡山',
    qualifiers: [
      "shinkansen"
    ],
    levels: "123"
  },
  {
    text: 'ひろしま',
    qualifiers: [
      "shinkansen"
    ],
    levels: "5"
  },
  {
    text: '広島',
    qualifiers: [
      "shinkansen"
    ],
    levels: "1234"
  },
  {
    text: 'はかた',
    qualifiers: [
      "shinkansen"
    ],
    levels: "345"
  },
  {
    text: '博多',
    qualifiers: [
      "shinkansen"
    ],
    levels: "12"
  },
]

export const getTrainStation = (level: number, qualifiersStr?: string) => {
  let candidates;
  
  if (qualifiersStr) {
    const qualifiers = qualifiersStr.split('&');
    candidates = trainStations.filter(entry => entry.levels.includes(`${level}`) && qualifiers.every(qualifier => entry.qualifiers.includes(qualifier))).map(entry => entry.text);
  } else {
    candidates = trainStations.filter(entry => entry.levels.includes(`${level}`)).map(entry => entry.text);
  }
  
  if (candidates.length === 0) {
    throw new Error(`getTrainStation with level ${level} and qualifiers ${qualifiersStr} gives empty result.`);
  }

  return getRandomElement(candidates);
};