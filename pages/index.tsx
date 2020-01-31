import React, {useLayoutEffect, useState, useEffect} from 'react'
import fetch from 'node-fetch'
import Grid from '@material-ui/core/Grid'

import {FoodData} from 'backend/domain'
import DishCard from '../components/dish-card'
import {Fonts} from '../utils/fonts'
import InputSlider from '../components/input-slider'
import Box from '@material-ui/core/Box'

const MAX_KCAL = 1500
const MAX_CARBS = 200
const MAX_FAT = 200
const MAX_PROTEIN = 100

const Home = (props: { dishes: FoodData[] }) => {
  useLayoutEffect(() => Fonts(), [])
  const [kcalRange, setKcalRange] = useState<number[]>([0, MAX_KCAL])
  const [carbRange, setCarbRange] = useState<number[]>([0, MAX_CARBS])
  const [fatRange, setFatRange] = useState<number[]>([0, MAX_FAT])
  const [proteinRange, setProteinRange] = useState<number[]>([0, MAX_PROTEIN])
  const [renderedItems, setRenderedItems] = useState<FoodData[]>(props.dishes)

  useEffect(() => setRenderedItems(props.dishes
    .filter(({kcal}) => kcal >= kcalRange[0] && kcal <= kcalRange[1])
    .filter(({carbohydrate: carb}) => carb >= carbRange[0] && carb <= carbRange[1])
    .filter(({fat}) => fat >= fatRange[0] && fat <= fatRange[1])
    .filter(({protein}) => protein >= proteinRange[0] && protein <= proteinRange[1]),
  ), [kcalRange, carbRange])

  return (
    <div>
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
        step={5}/>
      <Box pt={5}>
        <Grid container spacing={6}>
          {renderedItems.map((dish: FoodData) => (
            <DishCard dish={dish} key={dish.name} />
          ))}
        </Grid>
      </Box>
    </div>
  ) 
}

Home.getInitialProps = async function() {
  return {
    dishes: await fetch(process.env.API_ENDPOINT + 'beresalexandra/next').then(res => res.json()),
  }
}

export default Home