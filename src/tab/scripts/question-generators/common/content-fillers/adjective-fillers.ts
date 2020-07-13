import { getRandomElement } from "../../../utils/get-random-element";

const buildingQualifiers = [
  "いい",
  "ゆうめい",
  "ふるい",
  "たかい"
];

export const getBuildingQualifiers = (level: number) => {
  return getRandomElement(buildingQualifiers);
}