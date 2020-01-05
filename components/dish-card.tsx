import React from 'react'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'

import {FoodData} from 'backend/domain'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import {withStyles} from '@material-ui/core/styles'

import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 'column',
    },
    name: {
      height: 140,
      width: 100,
    },
    site: {
      padding: theme.spacing(2),
    },
  }),
)

const DishCard = (props: {dish: FoodData}) => {
  const classes = useStyles(props)
  return (
    <Grid item>
      <Card raised={true}>
        <CardContent>
          <h3 className="name">
            {props.dish.name}
          </h3>
          <Grid container spacing={2}>
            {['kcal', 'carbohydrate', 'fat', 'protein'].map(key => 
              <Grid item key={key}>
                <Card > 
                  <CardContent>
                    {`${key}: ${props.dish[key]}`}
                  </CardContent>
                </Card>
              </Grid>,
            )}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default DishCard