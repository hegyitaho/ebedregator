/* eslint-disable require-atomic-updates */
import {NextApiRequest, NextApiResponse} from 'next'
import mem from 'mem'

import {maxMage} from './utils'
import {dummyFoodDataForAWeek} from '../scraping/beresalexandra'

const beresalexandraCurrentMenu = mem(dummyFoodDataForAWeek, {maxAge: maxMage})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await beresalexandraCurrentMenu())
}
