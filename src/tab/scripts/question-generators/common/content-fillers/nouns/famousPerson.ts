import { getRandomElement } from "../../../../utils/get-random-element";

const painters = [
  "ムネ",
  "ダヴィンチ",
  "ムンク",
  "ミケランジェロ",
  "ファン・ゴッホ",
  "ダヴィッド",
];

export const getFamousPerson = (level: number, qualifier: string) => {
  if (qualifier === "painter") {
    return getRandomElement(painters);
  } else {
    throw new Error("famous person that's not painter not implemented")
  }
}