/* eslint-disable require-atomic-updates */
import {Context, SNSEvent} from 'aws-lambda'
import {FoodData} from '../scraping/beresalexandra/utils/FoodData'
import {dummyFoodDataForAWeek} from '../scraping/beresalexandra/utils/test-utils'

export async function handler(event: SNSEvent, context: Context) {
  return {
    statusCode: 200,
    body: await dummy(),
  }
}

let dummyMenu: FoodData[]

async function dummy() {
  if (!dummyMenu) {
    await dummyFoodDataForAWeek()
  }
  return dummyMenu
}
