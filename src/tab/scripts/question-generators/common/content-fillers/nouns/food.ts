import { getRandomElement } from "../../../../utils/get-random-element"

const n5foods = {
  inclUpper: [
    "バナナ", "ピザ", "りんご"
  ],
  exclUpper: [
    "すし", "やきにく"
  ]
}

export const getFood = (level: number) => {
  return getRandomElement([ ...n5foods.inclUpper, ...n5foods.exclUpper]);
}
