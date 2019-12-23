/* eslint-disable require-atomic-updates */
import {FoodData} from '../scraping/beresalexandra/utils/FoodData'
import {getSiteMenu} from '../scraping/beresalexandra/converted-menu'

export async function handler(event, context) {
  return {
    statusCode: 200,
    body: await beresalexandraCurrentMenu(),
  }
}

let currentMenu: FoodData[]

async function beresalexandraCurrentMenu() {
  if (!currentMenu) {
    currentMenu = await getSiteMenu()
  }
  return currentMenu
}
