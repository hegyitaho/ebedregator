/* eslint-disable require-atomic-updates */
import {NextApiRequest, NextApiResponse} from 'next'
import mem from 'mem'
import {nextSiteMenu} from '../scraping/beresalexandra'

const beresalexandraNextMenu = mem(nextSiteMenu)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await beresalexandraNextMenu())
}
