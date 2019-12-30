/* eslint-disable require-atomic-updates */
import {NextApiRequest, NextApiResponse} from 'next'
import mem from 'mem'

import {siteMenu} from '../scraping/beresalexandra'
import {maxMage} from './utils'

const beresalexandraCurrentMenu = mem(siteMenu, {maxAge: maxMage})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await beresalexandraCurrentMenu())
}
