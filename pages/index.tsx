import React, {useLayoutEffect} from 'react'
import fetch from 'node-fetch'
import Grid from '@material-ui/core/Grid'

import {FoodData} from 'backend/domain'
import DishCard from '../components/dish-card'
import {Fonts} from '../utils/fonts'


const Home = (props: { dishes: FoodData[] }) => {
  useLayoutEffect(() => Fonts(), [])

  return (
    <div>
      <Grid container spacing={6}>
        {props.dishes.map((dish: FoodData) => (
          <DishCard dish={dish} key={dish.name} />
        ))}
      </Grid>
    </div>
  ) 
}

Home.getInitialProps = async function() {
  return {
    dishes: await fetch(process.env.API_ENDPOINT + 'beresalexandra/next').then(res => res.json()),
  }
}

export default Home
