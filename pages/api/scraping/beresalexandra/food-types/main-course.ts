import * as R from 'ramda'
import {getTextForFoodTypeForWeek} from '../utils/conversion'

export function mainCourseDishes($: CheerioStatic): string[][] {
  return getTextForFoodTypeForWeek($, mainCourseSelectorsForTheWeek())
}

export function mainCourseSelectorsForTheWeek(): string[][] {
  return R.range(1,6).map((day: number) => 
    rowSelectors().map((subType: string) => `#menu_${subType} > .menucol_${day}`),
  )
}

function rowSelectors() {
  return ['1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', 'HAL', 'NK']
}
