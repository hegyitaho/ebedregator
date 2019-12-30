import fs from 'fs'
import {loadSite, menu} from '../converted-menu'

export function loadBeresAlexandraTestDouble(): CheerioStatic {
  const body = fs.readFileSync('test-resources/beresalexandra-aktualis-etlap.html')
  return loadSite(body)
}

export function dummyFoodDataForAWeek() {
  return menu(loadBeresAlexandraTestDouble())
}
