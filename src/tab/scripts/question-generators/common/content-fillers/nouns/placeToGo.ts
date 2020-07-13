import { getRandomElement } from "../../../../utils/get-random-element"

const n5Places = {
  inclUpper: [
    
  ] as string[],
  exclUpper: [
    "ぎんこう",
    "こうえん",
    "しごと",
    "がっこう"
  ]
}


export const getPlaceToGo = (level: number, qualifier?: string) => {
  if (qualifier === 'campus') {
    return getRandomElement(["としょかん", "ジム", "りょう"])
  }
  return getRandomElement(n5Places.exclUpper)
  
}