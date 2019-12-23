/* eslint-disable jest/expect-expect */
import request from 'supertest'
import Joi from '@hapi/joi'
import {FoodType} from '../src/scraping/beresalexandra/utils/conversion'
import {app} from '../src/express/server'
import {Server} from 'http'

describe('AppController (e2e)', () => {  
  let server: Server
  beforeEach(async () => {
    server = app.listen()
  })
  afterEach(() => {
    server.close()
  })

  it('beresalexandra returns food data for current week', async () => {
    const {body} = await request(server)
      .get('/.netlify/functions/server/beresalexandra/current')
      .expect(200)
    return await responseSchema.validateAsync(body)
  })

  it('beresalexandra returns food data for next week', async () => {
    const {body} = await request(server)
      .get('/.netlify/functions/server/beresalexandra/next')
      .expect(200)
    return await responseSchema.validateAsync(body)
  })

  it('beresalexandra test resource has same schema as current and next', async () => {
    const {body} = await request(server)
      .get('/.netlify/functions/server/beresalexandra/dummy')
      .expect(200)
    return await responseSchema.validateAsync(body)
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
  type: Joi.valid(...Object.values(FoodType)),
})

const responseSchema = Joi.array().items(FoodDataSchema)
