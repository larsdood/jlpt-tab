import { getRandomElement } from "../../../utils/get-random-element"

export const getMust = (level: number) => {
  return getRandomElement([
    "なければならない", "ないといけない", "なければなりません", "ないといけません"
  ]);
}