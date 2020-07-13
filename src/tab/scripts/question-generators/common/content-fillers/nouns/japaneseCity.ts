import { getRandomElement } from "../../../../utils/get-random-element";

const japaneseCities = [
  "東京",
  "京都",
  "大阪",
  "広島",
  "福岡",
];

export const getJapaneseCity = (level: number, qualifier: string) => {
  return getRandomElement(japaneseCities);
}