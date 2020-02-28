import React from 'react'
import {render, fireEvent, waitForElement} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Index from './index'
import {FoodData} from '../backend/domain/food-data'
import {Course, Site} from 'backend/domain'

test('load index', async() => {
  const {getByText, getByRole} = render(<Index  
    currentWeekDishes={CurrentWeekDishes()}
    maxCarb={10}
    maxFat={10}
    maxKcal={10}
    maxProtein={10}
    nextWeekDishes={NextWeekDishes()}
  />)
  expect(true).toBe(true)
})

function CurrentWeekDishes(): FoodData[] {
  return [Dish(1), Dish(2)]
}

function NextWeekDishes(): FoodData[] {
  return [Dish(10), Dish(11)]
}

function Dish(i = 0): FoodData {
  return {
    carbohydrate: i,
    date: new Date(i),
    fat: i,
    kcal: i,
    name: 'name' + i,
    price: i,
    protein: i,
    site: Site.BeresAlexandra,
    type: Course.Fozelek,
  }
}