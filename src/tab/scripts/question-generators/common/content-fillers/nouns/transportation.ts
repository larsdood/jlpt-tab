import { getRandomElement } from "../../../../utils/get-random-element";

const transportation = [
  {
    text: "バス",
    qualifiers: [
      "shortRange",
      "public"
    ],
    levels: '12345'
  },
  {
    text: "くるま",
    qualifiers: [
      "shortRange"
    ],
    levels: '345'
  },
  {
    text: "車",
    qualifiers: [
      "shortRange"
    ],
    levels: '1234'
  },
  {
    text: 'じてんしゃ',
    qualifiers: [
      "shortRange"
    ],
    levels: '5'
  },
  {
    text: "自転車",
    qualifiers: [
      "shortRange"
    ],
    levels: '1234'
  },
  {
    text: "でんしゃ",
    qualifiers: [
      "shortRange",
      "mediumRange",
      "longRange",
      "public",
    ],
    levels: '5'
  },
  {
    text: "電車",
    qualifiers: [
      "shortRange",
      "mediumRange",
      "longRange",
      "public",
    ],
    levels: '1234'
  },
  {
    text: "しんかんせん",
    qualifiers: [
      "mediumRange",
      "longRange",
      "public",
    ],
    levels: '45'
  },
  {
    text: "しんかんせん",
    qualifiers: [
      "mediumRange",
      "longRange",
      "public",
    ],
    levels: '123'
  },
  {
    text: "ひこうき",
    qualifiers: [
      "longRange",
      "public",
    ],
    levels: '45'
  },
  {
    text: "飛行機",
    qualifiers: [
      "longRange",
      "public",
    ],
    levels: '123'
  },
];

export const getTransportation = (level: number, qualifiersStr?: string) => {
  let candidates;
  
  if (qualifiersStr) {
    const qualifiers = qualifiersStr.split('&');
    candidates = transportation.filter(entry => entry.levels.includes(`${level}`) && qualifiers.every(qualifier => entry.qualifiers.includes(qualifier))).map(entry => entry.text);
  } else {
    candidates = transportation.filter(entry => entry.levels.includes(`${level}`)).map(entry => entry.text);
  }
  
  if (candidates.length === 0) {
    throw new Error(`getTransportation with level ${level} and qualifiers ${qualifiersStr} gives empty result.`);
  }

  return getRandomElement(candidates);
};