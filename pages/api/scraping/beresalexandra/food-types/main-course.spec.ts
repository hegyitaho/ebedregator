import {loadBeresAlexandraTestDouble} from 'src/scraping/beresalexandra/utils/test-utils'
import {mainCourseSelectorsForTheWeek, mainCourseDishes} from './main-course'
import * as R from 'ramda'

describe('main course', () => {
  let $: CheerioStatic
  beforeAll(() => {
    $ = loadBeresAlexandraTestDouble()
  })
  test('main course selectors', () => {
    expect(mainCourseSelectorsForTheWeek()).toEqual(
      R.range(1,6).map(day => 
        ['1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', 'HAL', 'NK'].map(menuSelectorSuffix => 
          `#menu_${menuSelectorSuffix} > .menucol_${day}`,
        ),
      ),
    )
  })

  test('fozeklek raw text', () => {
    expect(mainCourseDishes($)).toEqual([
      [
        'Pulykamell füstölt sajttal és póréhagymával sütve, provance-i párolt zöldségek (379 kcal,18 g szénhidrát, 42 g fehérje, 14 g zsír) - 1290 Ft',
        'Sovány sajttal sonkával tekert csirkemell, tzatziki saláta (324 kcal,7 g szénhidrát, 40 g fehérje, 15 g zsír) - 1190 Ft',
        'Joghurtos-almás céklasaláta snidlinggel szórva, csirke gyros (158 kcal,25 g szénhidrát, 5 g fehérje, 3 g zsír) - 1090 Ft',
        'Kókuszos-kurkumás csirkemellcsíkok, bulgurral (474 kcal,41 g szénhidrát, 36 g fehérje, 19 g zsír) - 1190 Ft',
        'Pikáns barackos csirkecombfilé, cukkinis-répás jázmin rizs (438 kcal,48 g szénhidrát, 30 g fehérje, 14 g zsír) - 1090 Ft',
        'Zöldséges vadrizssaláta feta sajttal (194 kcal,12 g szénhidrát, 13 g fehérje, 11 g zsír) - 1190 Ft',
        'Vargányás szarvasragu, durum tarhonyával (531 kcal,57 g szénhidrát, 38 g fehérje, 16 g zsír) - 1390 Ft',
        'Csirkemell Sztroganoff módra (gombás-joghurtos-csemegeuborkás), bulgur (562 kcal,62 g szénhidrát, 50 g fehérje, 14 g zsír) - 1190 Ft',
        'Garnélás sült paprikás tortiglioni (455 kcal,53 g szénhidrát, 30 g fehérje, 14 g zsír) - 1490 Ft',
        'Gyümölcsös csirkecurry, jázmin rizzsel (441 kcal,55 g szénhidrát, 36 g fehérje, 8 g zsír) - 1190 Ft',
      ],
      [
        'Pestos csirkemell, grill mediterrán zöldségek (289 kcal,17 g szénhidrát, 37 g fehérje, 8 g zsír) - 1290 Ft',
        'Spanyol csirkecombfilé, paradicsomsaláta (355 kcal,12 g szénhidrát, 35 g fehérje, 18 g zsír) - 1190 Ft',
        'Rózsaborsos csirkemell steak, őszibarackos kerti saláta camamberttel (284 kcal,9 g szénhidrát, 38 g fehérje, 11 g zsír) - 1290 Ft',
        'Pármai pulykamell, zelleres édesburgonyapüré (366 kcal,30 g szénhidrát, 34 g fehérje, 11 g zsír) - 1290 Ft',
        'Szárnyas húsgombóc, paradicsommártás, olivás barnarizs (432 kcal,51 g szénhidrát, 30 g fehérje, 12 g zsír) - 1090 Ft',
        'Csirkemellcsíkok vadasan Súlykontroll módra, zabgaluskával (466 kcal,43 g szénhidrát, 38 g fehérje, 15 g zsír) - 1090 Ft',
        'Fetasajtos bazsalikomos pulykamell, jázmin rizs (605 kcal,56 g szénhidrát, 51 g fehérje, 19 g zsír) - 1290 Ft',
        'Rakott kelkáposzta (454 kcal,45 g szénhidrát, 42 g fehérje, 10 g zsír) - 1190 Ft',
        'Lazacos cézársaláta (250 kcal,5 g szénhidrát, 20 g fehérje, 16 g zsír) - 1490 Ft',
        'Tandoori csirkenyársak, káposzta salátával (296 kcal,15 g szénhidrát, 35 g fehérje, 10 g zsír) - 1080 Ft',
      ],
      [
        'Fetasajttal töltött csirkemell, almás zellersaláta (364 kcal,16 g szénhidrát, 38 g fehérje, 15 g zsír) - 1190 Ft',
        'Csirkemell Rockefeller módra (sajttal parajjal rakott), Súlykontroll francia saláta (353 kcal,19 g szénhidrát, 41 g fehérje, 12 g zsír) - 1190 Ft',
        'Székelykáposzta pulykacombból Súlykontroll módra (238 kcal,12 g szénhidrát, 28 g fehérje, 9 g zsír) - 1090 Ft',
        'Pikáns csirkemell jázmin rizzsel ropogós lila hagymával (439 kcal,51 g szénhidrát, 35 g fehérje, 10 g zsír) - 1190 Ft',
        'Hortobágyi húsos hajdina palacsinta (365 kcal,22 g szénhidrát, 29 g fehérje, 18 g zsír) - 1290 Ft',
        'Szárnyas brassói édesburgonyával (405 kcal,39 g szénhidrát, 28 g fehérje, 15 g zsír) - 1250 Ft',
        'Olasz marharagu sporttésztával (547 kcal,29 g szénhidrát, 48 g fehérje, 13 g zsír) - 1190 Ft',
        'Sült csirkecombfalatok, fűszeres lencsés barnarizs (591 kcal,64 g szénhidrát, 45 g fehérje, 17 g zsír) - 1090 Ft',
        'Paprikás lime-os lazac, csípős paradicsomos rizzsel (548 kcal,46 g szénhidrát, 27 g fehérje, 28 g zsír) - 1490 Ft',
        'Csirke Tikka Masala, édes-zöldségcurryvel (333 kcal,23 g szénhidrát, 37 g fehérje, 10 g zsír) - 1290 Ft',
      ],
      [
        'Sült light camembert, almás-körtés rukkolasalátával, erdei gyümölcsöntettel (384 kcal,22 g szénhidrát, 26 g fehérje, 21 g zsír) - 1290 Ft',
        'Mézes citromos pácban sült csirkemell, almás joghurtos sajtsaláta (360 kcal,11 g szénhidrát, 43 g fehérje, 13 g zsír) - 1190 Ft',
        'Ropogós kacsacomb, barackbefőtt (373 kcal,13 g szénhidrát, 29 g fehérje, 23 g zsír) - 1490 Ft',
        'Zöldséges ricottás lasagne Súlykontroll módra (501 kcal,54 g szénhidrát, 24 g fehérje, 21 g zsír) - 1090 Ft',
        'Prosciuttoba göngyölt csirkemell pestos szószban vadizzsel (450 kcal,40 g szénhidrát, 38 g fehérje, 16 g zsír) - 1190 Ft',
        'Édes-savanyú csirkecsíkok, basmati rizs (403 kcal,48 g szénhidrát, 35 g fehérje, 8 g zsír) - 1190 Ft',
        'Gombapaprikás Súlykontroll módra, zabgaluska (518 kcal,61 g szénhidrát, 25 g fehérje, 19 g zsír) - 1090 Ft',
        'Póréhagymás kacsamáj, zöldséges diós rizstészta (570 kcal,57 g szénhidrát, 43 g fehérje, 19 g zsír) - 1190 Ft',
        'Roston sült lazacfilé, zöldséges quinoa (471 kcal,32 g szénhidrát, 28 g fehérje, 24 g zsír) - 1590 Ft',
        'Bombay marhacurry, sült rizzsel (457 kcal,48 g szénhidrát, 32 g fehérje, 14 g zsír) - 1190 Ft',
      ],
      [
        'Hoi sin csirkeszárny, mediterrán káposztasaláta (419 kcal,14 g szénhidrát, 27 g fehérje, 28 g zsír) - 1150 Ft',
        'Csirkemell parmezánbundában, olivás sárgarépasaláta (345 kcal,21 g szénhidrát, 38 g fehérje, 12 g zsír) - 1190 Ft',
        'Barbecue csirkecombfilé, Korianderes tojásos ceruzababsaláta (326 kcal,20 g szénhidrát, 39 g fehérje, 14 g zsír) - 1190 Ft',
        'Juhtúrós zöldséges rakott édesburgonya (464 kcal,35 g szénhidrát, 25 g fehérje, 24 g zsír) - 1180 Ft',
        'Kukoricás csirkés egytál (384 kcal,25 g szénhidrát, 36 g fehérje, 14 g zsír) - 1180 Ft',
        'Kakukkfüves csirkecombfilé pulykakolbásszal töltve, basmati rizs (461 kcal,42 g szénhidrát, 38 g fehérje, 16 g zsír) - 1090 Ft',
        'Tex-mex csirkecomb, olivás chilis kukorica (662 kcal,41 g szénhidrát, 35 g fehérje, 39 g zsír) - 1190 Ft',
        'Csáki göngyölt csirkecomb paprikamártással, zabgaluska (696 kcal,42 g szénhidrát, 39 g fehérje, 41 g zsír) - 1190 Ft',
        'Fokhagymás sült tilápia, sült édesburgonya (395 kcal,31 g szénhidrát, 44 g fehérje, 10 g zsír) - 1590 Ft',
        'Zöldség korma,sárgaborsópüré vöröslencsével (418 kcal,56 g szénhidrát, 20 g fehérje, 13 g zsír) - 1080 Ft',
      ],
    ])
  })
})
