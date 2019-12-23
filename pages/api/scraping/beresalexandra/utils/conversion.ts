import {FoodData} from './FoodData'

export function startOfWeek($: CheerioStatic): Date  {
  const startOfTheWeekSelector = '#menutable_print > thead:nth-child(1) > tr:nth-child(2) > td:nth-child(2)'
  const [year, month, day]: number[] = ($(startOfTheWeekSelector)
    .text()
    .match(/(\d+)/g) || ['0','0','0'])
    .map(Number) 
  return new Date(year, month-1, day)
}

export function getTextForFoodTypeForWeek($: CheerioStatic, selectors: string[][]): string[][] {
  return selectors.map(dailySelectors => 
    dailySelectors.map(selector => 
      $(selector)
        .text()
        .replace(/\s+/g, ' ')
        .trim(),
    ),
  )
}

export function convertToFoodData(foodDescription: string, type: FoodType, date: Date): FoodData {
  try {
    const beresAlexandraFoodDescriptionRegex = 
    /(?<name>.+)\((?<kcal>\d+)\D*(?<carbohydrate>\d+)\D*(?<protein>\d+)\D*(?<fat>\d+)\D*(?<price>\d+)/
    const {groups: {name, kcal, carbohydrate, protein, fat, price}} = beresAlexandraFoodDescriptionRegex.exec(foodDescription) as any
    return {name: name.trim(), kcal, carbohydrate, protein, fat, price, type, date}
  } catch (error) {
    console.log(`missing food type for ${date.toUTCString()} - ${FoodType}`)
    return null as FoodData
  }
}

export enum FoodType {
  Fozelek = 'FOZELEK',
  MainCourse = 'MAIN_COURSE'
}
