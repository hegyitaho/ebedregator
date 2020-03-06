import React from 'react'
import {render, getByText} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Index from './index'
import {FoodData} from '../backend/domain/food-data'
import {Course, Site} from '../backend/domain'

test('load index', async() => {
  const {getByText: getByTextInIndex} = render(<Index  
    currentWeekDishes={CurrentWeekDishes()}
    maxCarb={100}
    maxFat={100}
    maxKcal={100}
    maxProtein={100}
    nextWeekDishes={NextWeekDishes()}
  />)
  const firstCard = getByTextInIndex('name-11').parentElement.parentElement
  expectAllToExist(firstCard, ['fat: 11', 'kcal: 22', 'protein: 33', 'carb: 44'])
  // expectAllToExist(firstCard, ['price: 55'])
})

function CurrentWeekDishes(): FoodData[] {
  return [Dish(1), Dish(2)]
}

function NextWeekDishes(): FoodData[] {
  return [Dish(10), Dish(11)]
}

function Dish(i = 0): FoodData {
  return {
    name: 'name-' + i,
    fat: i,
    kcal: i * 2,
    protein: i * 3,
    carbohydrate: i * 4,
    price: i * 5,
    date: new Date(i),
    site: Site.BeresAlexandra,
    type: Course.Fozelek,
  }
}

function expectAllToExist(wrapper: HTMLElement, shouldContainThese: string[]) {
  shouldContainThese.forEach(text => 
    expect(getByText(wrapper, text)).toBeInTheDocument(),
  )
}