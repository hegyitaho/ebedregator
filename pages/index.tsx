import React from 'react'
import fetch from 'node-fetch'
import getConfig from 'next/config'
import Grid from '@material-ui/core/Grid'

import {FoodData} from 'backend/domain'
import DishCard from '../components/dish-card'

const {publicRuntimeConfig} = getConfig()

const Home = (props: {dishes: FoodData[]}) => (
  <div>
    <Grid container spacing={6}>
      {props.dishes.map((dish: FoodData) => (
        <DishCard dish={dish} key={dish.name}/>
      ))}
    </Grid>
  </div>
)

Home.getInitialProps = async function() {
  const nextMenu = await fetch(publicRuntimeConfig.API_ENDPOINT + 'beresalexandra/next').then(res=> res.json())
  return {
    dishes: nextMenu,
  }
}

export default Home
