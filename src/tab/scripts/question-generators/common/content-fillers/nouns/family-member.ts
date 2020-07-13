import { getRandomElement } from "../../../../utils/get-random-element";

const old = [
  "おじいさん",
  "おじ",
  "おばあさん",
  "おば",
]

const sibling = [
  "あね",
  "あに",
  "いもうと",
  "おとうと",
  "きょうだい"
];

export const getFamilyMember = (level: number, qualifier?: string) => {
  if (qualifier === "sibling") {
    return getRandomElement(sibling);
  }
  if (qualifier === "old") {
    return getRandomElement(old);
  }
  return getRandomElement(sibling);
};
