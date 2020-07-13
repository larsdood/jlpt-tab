
import { getRandomElement } from '../../utils/get-random-element';
import { fillNoun } from './content-fillers/noun-fillers';
import { getMust } from './content-fillers/conjugation-fillers';
import { getBuildingQualifiers } from './content-fillers/adjective-fillers';

export const parseToken = (token: string, questionObject: any, pattern: any, level: number, solution?: string) => {
  if (token.match(/[\u3000-\u303f\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f\~\|\*？！,。]/)) {
    return token;
  }　else if (token.match(/[A-Z]_/)) {
    const prefix = token.charAt(0);
    let qualifier;
    if (token.includes(':')) {
      qualifier = token.split(':')[1];
      token = token.split(':')[0];
    }
    if (prefix === 'N') {
      return fillNoun(token, level, qualifier);
    }
    switch(token) {
      case 'A_buildingQualifier':
        return getBuildingQualifiers(level);
      case 'C_must':
        return getMust(level);
      default:
        throw new Error('Unknown general token:' + token)
    }
  }
  else {
    console.log(token)
    switch(token) {
      case 'SOL':
        return `_${solution || questionObject.kanji}_`;
      default:
        return getRandomElement(pattern.inserts[token]);
    }
  }
}