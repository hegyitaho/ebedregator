/* eslint-disable require-atomic-updates */
import {NextApiRequest, NextApiResponse} from 'next'
import mem from 'mem'

import {siteMenu} from '../scraping/beresalexandra/converted-menu'

const beresalexandraCurrentMenu = mem(siteMenu)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await beresalexandraCurrentMenu())
}
