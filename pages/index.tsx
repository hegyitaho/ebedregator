import React, {useLayoutEffect, useState, useEffect} from 'react'
import fetch from 'node-fetch'
import Grid from '@material-ui/core/Grid'

import {FoodData} from 'backend/domain'
import DishCard from '../components/dish-card'
import {Fonts} from '../utils/fonts'
import InputSlider from '../components/input-slider'
import Box from '@material-ui/core/Box'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import {currentSiteMenu, nextSiteMenu} from '../backend/beresalexandra/converted-menu'

const MAX_KCAL = 1500
const MAX_CARBS = 200
const MAX_FAT = 200
const MAX_PROTEIN = 100

const Home = ({currentWeekDishes, nextWeekDishes}: {currentWeekDishes: FoodData[]; nextWeekDishes: FoodData[]}) => {
  useLayoutEffect(() => Fonts(), [])

  const [showCurrentWeek, setShowCurrentWeek] = useState<boolean>(true)
  const [selectedWeekDishes, setSelectedWeekDishes] = useState<FoodData[]>(currentWeekDishes)
  const [kcalRange, setKcalRange] = useState<number[]>([0, MAX_KCAL])
  const [carbRange, setCarbRange] = useState<number[]>([0, MAX_CARBS])
  const [fatRange, setFatRange] = useState<number[]>([0, MAX_FAT])
  const [proteinRange, setProteinRange] = useState<number[]>([0, MAX_PROTEIN])
  const [renderedItems, setRenderedItems] = useState<FoodData[]>(currentWeekDishes)

  useEffect(() => setSelectedWeekDishes(showCurrentWeek ? currentWeekDishes : nextWeekDishes), [showCurrentWeek])

  useEffect(() => setRenderedItems(selectedWeekDishes
    .filter(({kcal}) => kcal >= kcalRange[0] && kcal <= kcalRange[1])
    .filter(({carbohydrate: carb}) => carb >= carbRange[0] && carb <= carbRange[1])
    .filter(({fat}) => fat >= fatRange[0] && fat <= fatRange[1])
    .filter(({protein}) => protein >= proteinRange[0] && protein <= proteinRange[1]),
  ), [kcalRange, carbRange, proteinRange, fatRange, selectedWeekDishes])

  return (
    <React.Fragment>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Next week</Grid>
          <Grid item>
            <Switch
              checked={showCurrentWeek}
              onChange={handleCurrentNextSwitch}
              value={showCurrentWeek}
            />
          </Grid>
          <Grid item>Current week</Grid>
        </Grid>
      </Typography>
      <Box display="flex" flexWrap="wrap">
        <Box display="flex" flexWrap="wrap" flexGrow="1">
          <InputSlider 
            label="kcal" 
            maxLimit={MAX_KCAL} 
            value={kcalRange} 
            setValue={setKcalRange}
            step={50}/>
          <InputSlider 
            label="carbs" 
            maxLimit={MAX_CARBS} 
            value={carbRange} 
            setValue={setCarbRange}
            step={5}/>
        </Box>
        <Box display="flex" flexWrap="wrap" flexGrow="1">
          <InputSlider 
            label="protein" 
            maxLimit={MAX_PROTEIN} 
            value={proteinRange} 
            setValue={setProteinRange}
            step={5}/>
          <InputSlider 
            label="fat" 
            maxLimit={MAX_FAT} 
            value={fatRange} 
            setValue={setFatRange}
            step={10}/>
        </Box>
      </Box>
      <Box pt={5}>
        <Grid container spacing={6}>
          {renderedItems.map((dish: FoodData) => (
            <DishCard dish={dish} key={dish.name} />
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  )

  function handleCurrentNextSwitch() {
    setShowCurrentWeek(!showCurrentWeek)
  }
}

Home.getInitialProps = async function() {
  const [currentWeekDishes, nextWeekDishes] = await Promise.all([
    fetch(process.env.API_ENDPOINT + 'beresalexandra/next').then(res => res.json()),
    fetch(process.env.API_ENDPOINT + 'beresalexandra/current').then(res => res.json()),
  ])
  return {
    currentWeekDishes,
    nextWeekDishes,
  }
}

export default Home