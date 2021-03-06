/* eslint-disable no-console */
import {FoodData, Course, Site} from '../domain'

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

export function convertBeresalexandraToFoodData(foodDescription: string, type: Course, date: Date): FoodData {
  try {
    const beresAlexandraFoodDescriptionRegex = 
    /(?<name>.+)\((?<kcal>\d+)\D*(?<carbohydrate>\d+)\D*(?<protein>\d+)\D*(?<fat>\d+)\D*(?<price>\d+)/
    const {groups: {name, kcal, carbohydrate, protein, fat, price}} = beresAlexandraFoodDescriptionRegex.exec(foodDescription) as any
    return {name: name.trim(), kcal, carbohydrate, protein, fat, price, type, date, site: Site.BeresAlexandra}
  } catch (error) {
    console.log(`missing food type for ${date} - ${Course}`)
    return null as FoodData
  }
}


