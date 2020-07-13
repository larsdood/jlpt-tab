import { getRandomElement } from "../../../../utils/get-random-element";

const n5Shop = [
  "スーパー",
  "コンビニ",
];

export const getShop = (level: number, qualifier?: string) => {
  return getRandomElement(n5Shop);
}