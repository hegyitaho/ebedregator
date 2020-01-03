/* eslint-disable require-atomic-updates */
import {NextApiRequest, NextApiResponse} from 'next'
import mem from 'mem'
import {nextSiteMenu} from '../../../backend/beresalexandra'
import {oneDayInMilis} from './_time'

const beresalexandraNextMenu = mem(nextSiteMenu,  {maxAge: oneDayInMilis})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await beresalexandraNextMenu())
}
