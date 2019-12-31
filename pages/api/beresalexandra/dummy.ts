/* eslint-disable require-atomic-updates */
import {NextApiRequest, NextApiResponse} from 'next'
import mem from 'mem'

import {oneDayInMilis} from '../utils/time'
import {dummyFoodDataForAWeek} from '../../../backend/beresalexandra'

const beresalexandraDummyMenu = mem(dummyFoodDataForAWeek, {maxAge: oneDayInMilis})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await beresalexandraDummyMenu())
}

