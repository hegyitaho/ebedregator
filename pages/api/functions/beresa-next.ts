/* eslint-disable require-atomic-updates */
import {Context, SNSEvent} from 'aws-lambda'
import {FoodData} from '../scraping/beresalexandra/utils/FoodData'
import {getSiteMenu} from '../scraping/beresalexandra/converted-menu'

export async function handler(event: SNSEvent, context: Context) {
  return {
    statusCode: 200,
    body: await beresalexandraNextMenu(),
  }
}

let nextMenu: FoodData[]

async function beresalexandraNextMenu() {
  if (!nextMenu) {
    nextMenu = await getSiteMenu({next: true})
  }
  return nextMenu
}
