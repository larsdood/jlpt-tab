import { getRandomElement } from "../../../../utils/get-random-element"

const n5drinks = {
  inclUpper: [
    "コカ・コーラ"
  ],
  exclUpper: [
    "おちゃ"
  ]
}

export const getDrink = (level: number) => {
  return getRandomElement([...n5drinks.inclUpper, ...n5drinks.exclUpper])
}