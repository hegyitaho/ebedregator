import fs from 'fs'
import path from 'path'

import {loadSite, menu} from '../converted-menu'

export function loadBeresAlexandraTestDouble(): CheerioStatic {
  const body = fs.readFileSync(dummyMenuPath)
  return loadSite(body)
}

export function dummyFoodDataForAWeek() {
  return menu(loadBeresAlexandraTestDouble())
}

const dummyMenuPath = process.env.PROJECT_DIRNAME ?
  path.join(process.env.PROJECT_DIRNAME, 'resources', 'beresalexandra-aktualis-etlap.html') :
  'resources/beresalexandra-aktualis-etlap.html'

console.log('resource path: ' + dummyMenuPath)
console.log('process.env.PROJECT_DIRNAME: ' + process.env.PROJECT_DIRNAME)