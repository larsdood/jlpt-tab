import { getRndInteger } from "../../../../utils/random-number";


export const getWholeNumber = (level: number, qualifier?: string) => {
  let min, max;
  if (qualifier) {
    [min, max] = qualifier.split('-').map(Number);
    console.log(min, max);
    return getRndInteger(min, max);
  } else {
    throw new Error('getWholeNumber called without qualifier; need range for numbers');
  }

}