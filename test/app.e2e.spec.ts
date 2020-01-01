/* eslint-disable jest/expect-expect */
import Joi from '@hapi/joi'

import {Course, Site} from '../backend/domain'
import current from '../pages/api/beresalexandra/current'
import next from '../pages/api/beresalexandra/next'

describe('AppController (e2e)', () => {
  let req
  let res

  beforeEach(() => {
    req = jest.fn()
    res = {status: jest.fn(() => res), json: jest.fn()}
  })
  it('beresalexandra returns food data for current week', async () => {
    await current(req, res)
    await responseSchema.validateAsync(res.json.mock.calls[0][0])
  })

  it('beresalexandra returns food data for next week', async () => {
    await next(req, res)
    await responseSchema.validateAsync(res.json.mock.calls[0][0])
  })
})


const FoodDataSchema = Joi.object({
  carbohydrate: Joi.number().required(),
  date: Joi.date().required(),
  fat: Joi.number().required(),
  kcal: Joi.number().required(),
  name: Joi.string().required(),
  price: Joi.number().required(), 
  protein: Joi.number().required(),
  type: Joi.valid(...Object.values(Course)),
  site: Joi.valid(...Object.values(Site)),
})

const responseSchema = Joi.array().items(FoodDataSchema)
