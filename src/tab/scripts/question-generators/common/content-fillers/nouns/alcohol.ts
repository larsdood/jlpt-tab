import { getRandomElement } from "../../../../utils/get-random-element"

const alcohols = [
  "ビール",
  "日本酒",
  "焼酎",
  "ワイン",
  "ウィスキー",
  "ハイボール",
  "レモンサワー",
]

export const getAlcohol = (level: number, qualifier: string) => {
  return getRandomElement(alcohols);
}