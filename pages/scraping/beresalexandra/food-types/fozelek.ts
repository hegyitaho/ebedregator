import * as R from 'ramda'
import {getTextForFoodTypeForWeek} from '../utils/conversion'

export function fozelekDishes($: CheerioStatic): string[][] {
  return getTextForFoodTypeForWeek($, fozelekSelectorsForTheWeek())
}

export function fozelekSelectorsForTheWeek(): string[][] {
  return R.range(1,6).map((day: number) => 
    R.range(1,3).map((subType: number) => `#menu_F${subType} > .menucol_${day}`),
  )
}
