import fs from 'fs'

import {loadSite, menu} from '../backend/beresalexandra/converted-menu'

export function loadBeresAlexandraTestDouble(): CheerioStatic {
  const body = fs.readFileSync('test/beresalexandra-aktualis-etlap.html')
  return loadSite(body)
}

export function dummyFoodDataForAWeek() {
  return menu(loadBeresAlexandraTestDouble())
}