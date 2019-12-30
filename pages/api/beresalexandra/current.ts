/* eslint-disable require-atomic-updates */
import {NextApiRequest, NextApiResponse} from 'next'
import mem from 'mem'

import {siteMenu} from '../../../backend/beresalexandra'
import {oneDayInMilis} from './utils'

const beresalexandraCurrentMenu = mem(siteMenu, {maxAge: oneDayInMilis})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await beresalexandraCurrentMenu())
}
