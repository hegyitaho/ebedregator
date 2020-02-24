import * as R from 'ramda'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import dayjs from 'dayjs'

import {startOfWeek, getTextForFoodTypeForWeek, convertBeresalexandraToFoodData} from './conversion'
import {Course, FoodData} from '../domain'
import {fozelekSelectorsForTheWeek} from './food-types/fozelek'
import {mainCourseSelectorsForTheWeek} from './food-types/main-course'


export function loadSite(body: string | Buffer): CheerioStatic {
  return cheerio.load(body)
}

export function currentSiteMenu() {
  return getSiteMenu('aktualis_etlap')
}

export function nextSiteMenu() {
  return getSiteMenu('kovetkezo_etlap')
}

function getSiteMenu(path) {
  return rawSiteContent(path)
    .then(loadSite)
    .then(menu)
}

export async function menu($: CheerioStatic): Promise<FoodData[]> {
  return [
    ...fozelek($), 
    ...mainCourse($),
  ]
    .filter(Boolean)
}

export function processRawTextOfFoodTypeForTheWeek($, selectors: string[][], type: Course): FoodData[] {
  const addDaysToStartOfTheWeek = addDaysTo(startOfWeek($))
  return getTextForFoodTypeForWeek($, selectors)
    .map((dailyFoods, dayOfTheWeek) => 
      dailyFoods.map(dailyFood => 
        convertBeresalexandraToFoodData(dailyFood, type, addDaysToStartOfTheWeek(dayOfTheWeek))))
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

function addDaysTo(date: Date) {
  return daysToAdd => dayjs(date)
    .add(daysToAdd, 'day')
    .toDate()
}
