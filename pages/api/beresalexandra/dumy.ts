/* eslint-disable require-atomic-updates */
import {NextApiRequest, NextApiResponse} from 'next'
import mem from 'mem'

import {dummyFoodDataForAWeek} from '../scraping/beresalexandra/utils/test-utils'

const beresalexandraCurrentMenu = mem(dummyFoodDataForAWeek)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await beresalexandraCurrentMenu())
}

