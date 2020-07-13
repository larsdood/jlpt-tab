import { getRandomElement } from "../../../../utils/get-random-element";

const residentialBuildings = [
  "家",
  "一軒家",
  "マンション",
  "アパート"
];

export const getBuilding = (level: number, qualifier?: string) => {
  if (qualifier === 'residential') {
    return getRandomElement(residentialBuildings);
  }
  else {
    throw new Error("Implement getBuilding that are not residential");
  }
}