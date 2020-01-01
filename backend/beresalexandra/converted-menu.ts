import * as R from 'ramda'
import cheerio from 'cheerio'
import fetch from 'node-fetch'

import {startOfWeek, getTextForFoodTypeForWeek, convertToFoodData} from './utils/conversion'
import {Course, FoodData, Site} from '../domain'
import {fozelekSelectorsForTheWeek} from './food-types/fozelek'
import {mainCourseSelectorsForTheWeek} from './food-types/main-course'


export function loadSite(body: string | Buffer): CheerioStatic {
  return cheerio.load(body)
}

export function siteMenu() {
  return rawSiteContent('aktualis_etlap')
    .then(loadSite)
    .then(menu)
}

export function nextSiteMenu() {
  return rawSiteContent('kovetkezo_etlap')
    .then(loadSite)
    .then(menu)
}

export async function menu($: CheerioStatic) {
  return [...fozelek($), ...mainCourse($)].filter(Boolean)
}

export function processRawTextOfFoodTypeForTheWeek($, selectors: string[][], type: Course): FoodData[] {
  const addDaysToStartOfTheWeek = R.curry(addDaysToDate)(startOfWeek($))
  return getTextForFoodTypeForWeek($, selectors)
    .map((dailyFoods, dayOfTheWeek) => 
      dailyFoods.map(dailyFood => 
        convertToFoodData(dailyFood, type, addDaysToStartOfTheWeek(dayOfTheWeek))))
    .flat(Infinity)
}

export function fozelek($: CheerioStatic): FoodData[] {
  return processRawTextOfFoodTypeForTheWeek($, fozelekSelectorsForTheWeek(), Course.Fozelek)
}

export function mainCourse($: CheerioStatic): FoodData[] {
  return processRawTextOfFoodTypeForTheWeek($, mainCourseSelectorsForTheWeek(), Course.MainCourse)
}

function rawSiteContent(currentOrNextPath) {
  return fetch(`https://www.beresalexandra.hu/${currentOrNextPath}/nyomtatas`)
    .then(res => res.text())
}

function addDaysToDate(date: Date, days: number): Date {
  const nextDate = new Date(date.valueOf())
  nextDate.setDate(date.getDate() + days)
  return nextDate
}
