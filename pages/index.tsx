import React, {useLayoutEffect, useState, useEffect} from 'react'
import fetch from 'node-fetch'
import Grid from '@material-ui/core/Grid'

import {FoodData} from 'backend/domain'
import DishCard from '../components/dish-card'
import {Fonts} from '../utils/fonts'
import InputSlider from '../components/input-slider'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import WeekToggle from '../components/week-toggle'


const Home = ({currentWeekDishes, nextWeekDishes, maxFat, maxKcal, maxProtein, maxCarb}: HomeProps) => {
  useLayoutEffect(() => Fonts(), [])

  const [showNextWeek, setShowNextWeek] = useState<boolean>(false)
  const [selectedWeekDishes, setSelectedWeekDishes] = useState<FoodData[]>(currentWeekDishes)
  const [kcalRange, setKcalRange] = useState<number[]>([0, maxKcal])
  const [carbRange, setCarbRange] = useState<number[]>([0, maxCarb])
  const [fatRange, setFatRange] = useState<number[]>([0, maxFat])
  const [proteinRange, setProteinRange] = useState<number[]>([0, maxProtein])
  const [renderedItems, setRenderedItems] = useState<FoodData[]>(currentWeekDishes)

  useEffect(() => setSelectedWeekDishes(showNextWeek ? currentWeekDishes : nextWeekDishes), [showNextWeek])

  useEffect(() => setRenderedItems(selectedWeekDishes
    .filter(({kcal}) => kcal >= kcalRange[0] && kcal <= kcalRange[1])
    .filter(({carbohydrate: carb}) => carb >= carbRange[0] && carb <= carbRange[1])
    .filter(({fat}) => fat >= fatRange[0] && fat <= fatRange[1])
    .filter(({protein}) => protein >= proteinRange[0] && protein <= proteinRange[1]),
  ), [kcalRange, carbRange, proteinRange, fatRange, showNextWeek])

  return (
    <Typography component="div">
      <WeekToggle
        showNextWeek={showNextWeek}
        toggleWeekSelected={toggleWeekSelected}
      />
      <Box display="flex" flexWrap="wrap">
        <Box display="flex" flexWrap="wrap" flexGrow="1">
          <InputSlider 
            label="kcal" 
            maxLimit={maxKcal} 
            value={kcalRange} 
            setValue={setKcalRange}
            step={50}/>
          <InputSlider 
            label="carbs" 
            maxLimit={maxCarb} 
            value={carbRange} 
            setValue={setCarbRange}
            step={5}/>
        </Box>
        <Box display="flex" flexWrap="wrap" flexGrow="1">
          <InputSlider 
            label="protein" 
            maxLimit={maxProtein} 
            value={proteinRange} 
            setValue={setProteinRange}
            step={5}/>
          <InputSlider 
            label="fat" 
            maxLimit={maxFat} 
            value={fatRange} 
            setValue={setFatRange}
            step={5}/>
        </Box>
      </Box>
      <Box pt={5}>
        <Grid container spacing={6}>
          {renderedItems.map((dish: FoodData) => (
            <DishCard dish={dish} key={dish.name} />
          ))}
        </Grid>
      </Box>
    </Typography>
  )

  function toggleWeekSelected() {
    setShowNextWeek(!showNextWeek)
  }
}

Home.getInitialProps = async function() {
  const [currentWeekDishes, nextWeekDishes]: [FoodData[], FoodData[]]  = await Promise.all([
    fetch(process.env.API_ENDPOINT + 'beresalexandra/next').then(res => res.json()),
    fetch(process.env.API_ENDPOINT + 'beresalexandra/current').then(res => res.json()),
  ])
  return {
    currentWeekDishes,
    nextWeekDishes,
    ...maxMacros(currentWeekDishes, nextWeekDishes),
  }
}

export default Home



function maxMacros(currentWeekDishes: FoodData[], nextWeekDishes: FoodData[]): MaxMacros {
  return [...currentWeekDishes, ...nextWeekDishes]
    .reduce(({maxFat, maxKcal, maxProtein, maxCarb}, {fat, kcal, protein, carbohydrate}) => ({
      maxFat: Math.max(maxFat, fat),
      maxKcal: Math.max(maxKcal, kcal),
      maxProtein: Math.max(maxProtein, protein),
      maxCarb: Math.max(maxCarb, carbohydrate),
    }), {maxFat: 0, maxKcal: 0, maxProtein: 0, maxCarb: 0})
}

interface HomeProps {
  currentWeekDishes: FoodData[];
  nextWeekDishes: FoodData[];
  maxFat: number;
  maxKcal: number;
  maxProtein: number;
  maxCarb: number;
}

interface MaxMacros {
  maxFat: number;
  maxKcal: number;
  maxProtein: number;
  maxCarb: number;
}