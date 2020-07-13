import { getRandomElement } from "../../../../utils/get-random-element";

const names = [
  "田中",
  "高川",
  "川田",
  "高田",
  "山田",
  "桐山",
  "鈴木",
  "佐々木",
  "有吉",
  "松田",
]

export const getName = (level: number, qualifier?: string) => {
  let suffix = 'さん'
  
  if (qualifier === "self") {
    suffix = "";
  }
  if (qualifier === "formal") {
    suffix = "様"
  }
  
  // implement cutoff: easy names for easy levels
  return getRandomElement(names) + suffix;
}

export const getNameOrPronoun = (level: number) => {
  // implement random maybe name?
  return getName(level);
}
