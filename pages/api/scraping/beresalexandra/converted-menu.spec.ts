import {fozelek, mainCourse} from './converted-menu'
import {loadBeresAlexandraTestDouble} from './utils/test-utils'

describe('beresalexandra integration', () => {
  let $: CheerioStatic
  beforeAll(() => {
    $ = loadBeresAlexandraTestDouble()
  })
  test('fozelek food data from site', () => {
    expect(fozelek($)).toEqual([
      {'carbohydrate': '21', 'date': new Date(2019, 4, 27), 'fat': '3', 'kcal': '154', 'name': 'Parajfőzelék', 'price': '580', 'protein': '10', 'type': 'FOZELEK'},
      {'carbohydrate': '22', 'date': new Date(2019, 4, 27), 'fat': '23', 'kcal': '417', 'name': 'Parajfőzelék, sült mozzarella', 'price': '950', 'protein': '31', 'type': 'FOZELEK'},
      {'carbohydrate': '21', 'date': new Date(2019, 4, 28), 'fat': '7', 'kcal': '170', 'name': 'Gyömbéres-tárkonyos tökfőzelék', 'price': '580', 'protein': '5', 'type': 'FOZELEK'},
      {'carbohydrate': '21', 'date': new Date(2019, 4, 28), 'fat': '7', 'kcal': '170', 'name': 'Gyömbéres-tárkonyos tökfőzelék, sült csirkemell', 'price': '1050', 'protein': '5', 'type': 'FOZELEK'},
      {'carbohydrate': '33', 'date': new Date(2019, 4, 29), 'fat': '6', 'kcal': '257', 'name': 'Mentás-kókusztejes zöldborsófőzelék', 'price': '580', 'protein': '16', 'type': 'FOZELEK'},
      {'carbohydrate': '34', 'date': new Date(2019, 4, 29), 'fat': '16', 'kcal': '458', 'name': 'Mentás-kókusztejes zöldborsófőzelék, vasalt csirkecombfilé', 'price': '1050', 'protein': '44', 'type': 'FOZELEK'},
      {'carbohydrate': '45', 'date': new Date(2019, 4, 30), 'fat': '5', 'kcal': '309', 'name': 'Lencsefőzelék', 'price': '580', 'protein': '21', 'type': 'FOZELEK'},
      {'carbohydrate': '45', 'date': new Date(2019, 4, 30), 'fat': '18', 'kcal': '462', 'name': 'Lencsefőzelék, sült virsli', 'price': '950', 'protein': '28', 'type': 'FOZELEK'},
      {'carbohydrate': '19', 'date': new Date(2019, 4, 31), 'fat': '6', 'kcal': '157', 'name': 'Zöldbabfőzelék', 'price': '580', 'protein': '7', 'type': 'FOZELEK'},
      {'carbohydrate': '19', 'date': new Date(2019, 4, 31), 'fat': '9', 'kcal': '311', 'name': 'Zöldbabfőzelék, rozmaringos pulykamell', 'price': '1050', 'protein': '36', 'type': 'FOZELEK'},
    ])
  })
  test('main course food data from site', () => {
    expect(mainCourse($)).toEqual([
      {'carbohydrate': '18','date': new Date(2019, 4, 27),'fat': '14','kcal': '379','name': 'Pulykamell füstölt sajttal és póréhagymával sütve, provance-i párolt zöldségek','price': '1290','protein': '42','type': 'MAIN_COURSE'},
      {'carbohydrate': '7','date': new Date(2019, 4, 27),'fat': '15','kcal': '324','name': 'Sovány sajttal sonkával tekert csirkemell, tzatziki saláta','price': '1190','protein': '40','type': 'MAIN_COURSE'},
      {'carbohydrate': '25','date': new Date(2019, 4, 27),'fat': '3','kcal': '158','name': 'Joghurtos-almás céklasaláta snidlinggel szórva, csirke gyros','price': '1090','protein': '5','type': 'MAIN_COURSE'},
      {'carbohydrate': '41','date': new Date(2019, 4, 27),'fat': '19','kcal': '474','name': 'Kókuszos-kurkumás csirkemellcsíkok, bulgurral','price': '1190','protein': '36','type': 'MAIN_COURSE'},
      {'carbohydrate': '48','date': new Date(2019, 4, 27),'fat': '14','kcal': '438','name': 'Pikáns barackos csirkecombfilé, cukkinis-répás jázmin rizs','price': '1090','protein': '30','type': 'MAIN_COURSE'},
      {'carbohydrate': '12','date': new Date(2019, 4, 27),'fat': '11','kcal': '194','name': 'Zöldséges vadrizssaláta feta sajttal','price': '1190','protein': '13','type': 'MAIN_COURSE'},
      {'carbohydrate': '57','date': new Date(2019, 4, 27),'fat': '16','kcal': '531','name': 'Vargányás szarvasragu, durum tarhonyával','price': '1390','protein': '38','type': 'MAIN_COURSE'},
      {'carbohydrate': '62','date': new Date(2019, 4, 27),'fat': '14','kcal': '562','name': 'Csirkemell Sztroganoff módra (gombás-joghurtos-csemegeuborkás), bulgur','price': '1190','protein': '50','type': 'MAIN_COURSE'},
      {'carbohydrate': '53','date': new Date(2019, 4, 27),'fat': '14','kcal': '455','name': 'Garnélás sült paprikás tortiglioni','price': '1490','protein': '30','type': 'MAIN_COURSE'},
      {'carbohydrate': '55','date': new Date(2019, 4, 27),'fat': '8','kcal': '441','name': 'Gyümölcsös csirkecurry, jázmin rizzsel','price': '1190','protein': '36','type': 'MAIN_COURSE'},
      {'carbohydrate': '17','date': new Date(2019, 4, 28),'fat': '8','kcal': '289','name': 'Pestos csirkemell, grill mediterrán zöldségek','price': '1290','protein': '37','type': 'MAIN_COURSE'},
      {'carbohydrate': '12','date': new Date(2019, 4, 28),'fat': '18','kcal': '355','name': 'Spanyol csirkecombfilé, paradicsomsaláta','price': '1190','protein': '35','type': 'MAIN_COURSE'},
      {'carbohydrate': '9','date': new Date(2019, 4, 28),'fat': '11','kcal': '284','name': 'Rózsaborsos csirkemell steak, őszibarackos kerti saláta camamberttel','price': '1290','protein': '38','type': 'MAIN_COURSE'},
      {'carbohydrate': '30','date': new Date(2019, 4, 28),'fat': '11','kcal': '366','name': 'Pármai pulykamell, zelleres édesburgonyapüré','price': '1290','protein': '34','type': 'MAIN_COURSE'},
      {'carbohydrate': '51','date': new Date(2019, 4, 28),'fat': '12','kcal': '432','name': 'Szárnyas húsgombóc, paradicsommártás, olivás barnarizs','price': '1090','protein': '30','type': 'MAIN_COURSE'},
      {'carbohydrate': '43','date': new Date(2019, 4, 28),'fat': '15','kcal': '466','name': 'Csirkemellcsíkok vadasan Súlykontroll módra, zabgaluskával','price': '1090','protein': '38','type': 'MAIN_COURSE'},
      {'carbohydrate': '56','date': new Date(2019, 4, 28),'fat': '19','kcal': '605','name': 'Fetasajtos bazsalikomos pulykamell, jázmin rizs','price': '1290','protein': '51','type': 'MAIN_COURSE'},
      {'carbohydrate': '45','date': new Date(2019, 4, 28),'fat': '10','kcal': '454','name': 'Rakott kelkáposzta','price': '1190','protein': '42','type': 'MAIN_COURSE'},
      {'carbohydrate': '5','date': new Date(2019, 4, 28),'fat': '16','kcal': '250','name': 'Lazacos cézársaláta','price': '1490','protein': '20','type': 'MAIN_COURSE'},
      {'carbohydrate': '15','date': new Date(2019, 4, 28),'fat': '10','kcal': '296','name': 'Tandoori csirkenyársak, káposzta salátával','price': '1080','protein': '35','type': 'MAIN_COURSE'},
      {'carbohydrate': '16','date': new Date(2019, 4, 29),'fat': '15','kcal': '364','name': 'Fetasajttal töltött csirkemell, almás zellersaláta','price': '1190','protein': '38','type': 'MAIN_COURSE'},
      {'carbohydrate': '19','date': new Date(2019, 4, 29),'fat': '12','kcal': '353','name': 'Csirkemell Rockefeller módra (sajttal parajjal rakott), Súlykontroll francia saláta','price': '1190','protein': '41','type': 'MAIN_COURSE'},
      {'carbohydrate': '12','date': new Date(2019, 4, 29),'fat': '9','kcal': '238','name': 'Székelykáposzta pulykacombból Súlykontroll módra','price': '1090','protein': '28','type': 'MAIN_COURSE'},
      {'carbohydrate': '51','date': new Date(2019, 4, 29),'fat': '10','kcal': '439','name': 'Pikáns csirkemell jázmin rizzsel ropogós lila hagymával','price': '1190','protein': '35','type': 'MAIN_COURSE'},
      {'carbohydrate': '22','date': new Date(2019, 4, 29),'fat': '18','kcal': '365','name': 'Hortobágyi húsos hajdina palacsinta','price': '1290','protein': '29','type': 'MAIN_COURSE'},
      {'carbohydrate': '39','date': new Date(2019, 4, 29),'fat': '15','kcal': '405','name': 'Szárnyas brassói édesburgonyával','price': '1250','protein': '28','type': 'MAIN_COURSE'},
      {'carbohydrate': '29','date': new Date(2019, 4, 29),'fat': '13','kcal': '547','name': 'Olasz marharagu sporttésztával','price': '1190','protein': '48','type': 'MAIN_COURSE'},
      {'carbohydrate': '64','date': new Date(2019, 4, 29),'fat': '17','kcal': '591','name': 'Sült csirkecombfalatok, fűszeres lencsés barnarizs','price': '1090','protein': '45','type': 'MAIN_COURSE'},
      {'carbohydrate': '46','date': new Date(2019, 4, 29),'fat': '28','kcal': '548','name': 'Paprikás lime-os lazac, csípős paradicsomos rizzsel','price': '1490','protein': '27','type': 'MAIN_COURSE'},
      {'carbohydrate': '23','date': new Date(2019, 4, 29),'fat': '10','kcal': '333','name': 'Csirke Tikka Masala, édes-zöldségcurryvel','price': '1290','protein': '37','type': 'MAIN_COURSE'},
      {'carbohydrate': '22','date': new Date(2019, 4, 30),'fat': '21','kcal': '384','name': 'Sült light camembert, almás-körtés rukkolasalátával, erdei gyümölcsöntettel','price': '1290','protein': '26','type': 'MAIN_COURSE'},
      {'carbohydrate': '11','date': new Date(2019, 4, 30),'fat': '13','kcal': '360','name': 'Mézes citromos pácban sült csirkemell, almás joghurtos sajtsaláta','price': '1190','protein': '43','type': 'MAIN_COURSE'},
      {'carbohydrate': '13','date': new Date(2019, 4, 30),'fat': '23','kcal': '373','name': 'Ropogós kacsacomb, barackbefőtt','price': '1490','protein': '29','type': 'MAIN_COURSE'},
      {'carbohydrate': '54','date': new Date(2019, 4, 30),'fat': '21','kcal': '501','name': 'Zöldséges ricottás lasagne Súlykontroll módra','price': '1090','protein': '24','type': 'MAIN_COURSE'},
      {'carbohydrate': '40','date': new Date(2019, 4, 30),'fat': '16','kcal': '450','name': 'Prosciuttoba göngyölt csirkemell pestos szószban vadizzsel','price': '1190','protein': '38','type': 'MAIN_COURSE'},
      {'carbohydrate': '48','date': new Date(2019, 4, 30),'fat': '8','kcal': '403','name': 'Édes-savanyú csirkecsíkok, basmati rizs','price': '1190','protein': '35','type': 'MAIN_COURSE'},
      {'carbohydrate': '61','date': new Date(2019, 4, 30),'fat': '19','kcal': '518','name': 'Gombapaprikás Súlykontroll módra, zabgaluska','price': '1090','protein': '25','type': 'MAIN_COURSE'},
      {'carbohydrate': '57','date': new Date(2019, 4, 30),'fat': '19','kcal': '570','name': 'Póréhagymás kacsamáj, zöldséges diós rizstészta','price': '1190','protein': '43','type': 'MAIN_COURSE'},
      {'carbohydrate': '32','date': new Date(2019, 4, 30),'fat': '24','kcal': '471','name': 'Roston sült lazacfilé, zöldséges quinoa','price': '1590','protein': '28','type': 'MAIN_COURSE'},
      {'carbohydrate': '48','date': new Date(2019, 4, 30),'fat': '14','kcal': '457','name': 'Bombay marhacurry, sült rizzsel','price': '1190','protein': '32','type': 'MAIN_COURSE'},
      {'carbohydrate': '14','date': new Date(2019, 4, 31),'fat': '28','kcal': '419','name': 'Hoi sin csirkeszárny, mediterrán káposztasaláta','price': '1150','protein': '27','type': 'MAIN_COURSE'},
      {'carbohydrate': '21','date': new Date(2019, 4, 31),'fat': '12','kcal': '345','name': 'Csirkemell parmezánbundában, olivás sárgarépasaláta','price': '1190','protein': '38','type': 'MAIN_COURSE'},
      {'carbohydrate': '20','date': new Date(2019, 4, 31),'fat': '14','kcal': '326','name': 'Barbecue csirkecombfilé, Korianderes tojásos ceruzababsaláta','price': '1190','protein': '39','type': 'MAIN_COURSE'},
      {'carbohydrate': '35','date': new Date(2019, 4, 31),'fat': '24','kcal': '464','name': 'Juhtúrós zöldséges rakott édesburgonya','price': '1180','protein': '25','type': 'MAIN_COURSE'},
      {'carbohydrate': '25','date': new Date(2019, 4, 31),'fat': '14','kcal': '384','name': 'Kukoricás csirkés egytál','price': '1180','protein': '36','type': 'MAIN_COURSE'},
      {'carbohydrate': '42','date': new Date(2019, 4, 31),'fat': '16','kcal': '461','name': 'Kakukkfüves csirkecombfilé pulykakolbásszal töltve, basmati rizs','price': '1090','protein': '38','type': 'MAIN_COURSE'},
      {'carbohydrate': '41','date': new Date(2019, 4, 31),'fat': '39','kcal': '662','name': 'Tex-mex csirkecomb, olivás chilis kukorica','price': '1190','protein': '35','type': 'MAIN_COURSE'},
      {'carbohydrate': '42','date': new Date(2019, 4, 31),'fat': '41','kcal': '696','name': 'Csáki göngyölt csirkecomb paprikamártással, zabgaluska','price': '1190','protein': '39','type': 'MAIN_COURSE'},
      {'carbohydrate': '31','date': new Date(2019, 4, 31),'fat': '10','kcal': '395','name': 'Fokhagymás sült tilápia, sült édesburgonya','price': '1590','protein': '44','type': 'MAIN_COURSE'},
      {'carbohydrate': '56','date': new Date(2019, 4, 31),'fat': '13','kcal': '418','name': 'Zöldség korma,sárgaborsópüré vöröslencsével','price': '1080','protein': '20','type': 'MAIN_COURSE',
      },
    ])
  })
})
