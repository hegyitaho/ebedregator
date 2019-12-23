import {
  startOfWeek, convertToFoodData, FoodType, getTextForFoodTypeForWeek,
} from './conversion'
import {fozelekSelectorsForTheWeek} from 'src/scraping/beresalexandra/food-types/fozelek'
import {loadBeresAlexandraTestDouble} from 'src/scraping/beresalexandra/utils/test-utils'

describe('conversion utils', () => {
  let $: CheerioStatic
  beforeAll(() => {
    $ = loadBeresAlexandraTestDouble()
  })
  test('start date of the week parsed correctly', () => {
    const startDate = startOfWeek($)
    expect(startDate.getFullYear()).toEqual(2019)
    expect(startDate.getMonth()).toEqual(4)
    expect(startDate.getDate()).toEqual(27)
  })

  test('get text for food type', async () => {
    expect(getTextForFoodTypeForWeek($, fozelekSelectorsForTheWeek())).toEqual([
      [
        'Parajfőzelék (154 kcal,21 g szénhidrát, 10 g fehérje, 3 g zsír) - 580 Ft',
        'Parajfőzelék, sült mozzarella (417 kcal,22 g szénhidrát, 31 g fehérje, 23 g zsír) - 950 Ft',
      ],
      [
        'Gyömbéres-tárkonyos tökfőzelék (170 kcal,21 g szénhidrát, 5 g fehérje, 7 g zsír) - 580 Ft',
        'Gyömbéres-tárkonyos tökfőzelék, sült csirkemell (170 kcal,21 g szénhidrát, 5 g fehérje, 7 g zsír) - 1050 Ft',
      ], 
      [
        'Mentás-kókusztejes zöldborsófőzelék (257 kcal,33 g szénhidrát, 16 g fehérje, 6 g zsír) - 580 Ft',
        'Mentás-kókusztejes zöldborsófőzelék, vasalt csirkecombfilé (458 kcal,34 g szénhidrát, 44 g fehérje, 16 g zsír) - 1050 Ft',
      ], 
      [
        'Lencsefőzelék (309 kcal,45 g szénhidrát, 21 g fehérje, 5 g zsír) - 580 Ft',
        'Lencsefőzelék, sült virsli (462 kcal,45 g szénhidrát, 28 g fehérje, 18 g zsír) - 950 Ft',
      ], 
      [
        'Zöldbabfőzelék (157 kcal,19 g szénhidrát, 7 g fehérje, 6 g zsír) - 580 Ft', 
        'Zöldbabfőzelék, rozmaringos pulykamell (311 kcal,19 g szénhidrát, 36 g fehérje, 9 g zsír) - 1050 Ft',
      ],
    ])
  })

  test('convert text info to key value pairs', () => {
    expect(convertToFoodData('Zöldbabfőzelék, rozmaringos pulykamell (311 kcal,19 g szénhidrát, 36 g fehérje, 9 g zsír) - 1050 Ft', FoodType.Fozelek, new Date(2019, 4, 27)))
      .toEqual({
        carbohydrate: '19',
        fat: '9',
        kcal: '311',
        name: 'Zöldbabfőzelék, rozmaringos pulykamell',
        price: '1050',
        protein: '36',
        type: 'FOZELEK',
        date: new Date(2019, 4, 27),
      })
  })
})
