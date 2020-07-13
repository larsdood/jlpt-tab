import { getRandomElement } from "../../../../utils/get-random-element";

const n5Countries = {
  inclUpper: [
    "日本",
    "中国",
    "アメリカ",
    "タイ",
    "イギリス"
  ],
  exclUpper: [
    "かんこく",
  ]
};

const n4Countries = {
  inclUpper: [
    "米国",
    "韓国",
    "ノルウェー"
  ]
}

const n3Countries = {
  inclUpper: [
    "韓国",
    "ブラジル",
    "英国"
  ],
}

const n2Countries = {
  inclUpper: [
    "フィンランド"
  ]
}

const n1Countries = {
  inclUpper: [
    "アゼルバイジャン"
  ]
}

const countries = [
  n5Countries,
  n4Countries,
  n3Countries,
  n2Countries,
  n1Countries,
];

export const getCountryName = (level: number, qualifier?: string) => {
  if (qualifier === 'cold') {
    return getRandomElement([
      "ノルウェー",
      "ロシア",
      "カナダ",
    ])
  }

  if (qualifier === 'warm') {
    return getRandomElement([
      "シンガポール",
      "ガーナ",
      "コロンビア",
      "タイ",
      "ハワイイ",
    ])
  }
  if (qualifier === 'english') {
    return getRandomElement([
      'アメリカ',
      'ハワイイ',
      '英国',
      'イギリス',
      'オーストラリア',
      'ニュージーランド',
    ])
  }
  
  let selectionBase: string[];
  switch(level) {
    case 5:
      selectionBase = [...n5Countries.inclUpper, ...n5Countries.exclUpper];
      break;
    case 4:
      selectionBase = [ ...n5Countries.inclUpper, ...n4Countries.inclUpper];
      break;
    case 3:
      selectionBase =  [ ...n5Countries.inclUpper, ...n4Countries.inclUpper, ...n3Countries.inclUpper ];
      break;
    case 2:
      selectionBase = [ ...n5Countries.inclUpper, ...n4Countries.inclUpper, ...n3Countries.inclUpper, ...n2Countries.inclUpper ];
      break;
    case 1:
      selectionBase = [ ...n5Countries.inclUpper, ...n4Countries.inclUpper, ...n3Countries.inclUpper, ...n2Countries.inclUpper, ...n1Countries.inclUpper ];
  }

  return getRandomElement(selectionBase);
}