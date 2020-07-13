import { getRandomElement } from "../../../utils/get-random-element";
import { getPlaceToGo } from "./nouns/placeToGo";
import { getFood } from "./nouns/food";
import { getDrink } from "./nouns/drink";
import { getCountryName } from "./nouns/country";
import { getFamilyMember } from "./nouns/family-member";
import { getShop } from "./nouns/shop";
import { getWholeNumber } from "./nouns/whole-number";
import { getBuilding } from "./nouns/building";
import { getName, getNameOrPronoun } from "./nouns/name";
import { getJapaneseCity } from "./nouns/japaneseCity";
import { getAlcohol } from "./nouns/alcohol";
import { getFamousPerson } from "./nouns/famousPerson";
import { getTransportation } from "./nouns/transportation";
import { getTrainStation } from "./nouns/train-station";

const heShePronouns = [
  "かれ",
  "彼",
  "かのじょ",
  "彼女",
]

export const getPronouns = (self: boolean = false, you: boolean = true, he: boolean = true, she: boolean = true) => {
  return getRandomElement(heShePronouns);
}

const sports = [
  "テニス", "バスケ", "サッカー", "野球", "スキー", "スノーボード"
]

export const getSport = (level: number) => {
  return getRandomElement(sports);
}

const workSchoolUniversityNouns = [
  "仕事",
  "会社",
  "学校",
  "大学"
]

export const getWorkSchoolUniversity = (level: number) => {
  return getRandomElement(workSchoolUniversityNouns);
}

const plantNouns = [
  "さくら",
  "桜",
  "ツバキ",
  "もも",
  "桃"
]

export const getPlant = (level: number) => {
  return getRandomElement(plantNouns)
}

const tokenFunctionMapping: { [key: string]: (level: number, qualifier?: string ) => string} = {
  alcohol: getAlcohol,
  building: getBuilding,
  country: getCountryName,
  drink: getDrink,
  familyMember: getFamilyMember,
  famousPerson: getFamousPerson,
  food: getFood,
  japaneseCity: getJapaneseCity,
  name: getName,
  nameOrPronoun: getNameOrPronoun,
  placeToGo: getPlaceToGo,
  plant: getPlant,
  shop: getShop,
  sport: getSport,
  trainStation: getTrainStation,
  transportation: getTransportation,
  wholeNumber: getWholeNumber,
  workSchoolUniversity: getWorkSchoolUniversity,
}

export const fillNoun = (token: string, level: number, qualifier?: string) => {
  token = token.substr(2);

  const getFunction = tokenFunctionMapping[token];

  if (!getFunction) {
    throw new Error(`Undefined noun generator function for token: ${token}`);
  }

  return getFunction(level, qualifier);
}