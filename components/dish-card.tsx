import React from 'react'
import {makeStyles, createStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Paper from '@material-ui/core/Paper'
import {purple, lightBlue, teal, yellow} from '@material-ui/core/colors'

import {FoodData} from 'backend/domain'


const DishCard = (props: {dish: FoodData}) => {
  const classes = useStyles(props)
  return (
    <Grid item className={classes.root}>
      <Card raised={true}>
        <CardContent>
          <h3 className="name">
            {props.dish.name}
          </h3>
          {/* <Grid container spacing={2}> */}
          {['kcal', 'carbohydrate', 'fat', 'protein'].map(key => 
          // <Grid  item key={key}>
            <Paper key={key} variant="outlined" className={key}>
              {`${key === 'carbohydrate' ? 'carb' : key}: ${props.dish[key]}`}
            </Paper>,
            // </Grid>,
          )}
          {/* </Grid> */}
        </CardContent>
      </Card>
    </Grid>
  )
}

export default DishCard

const useStyles = makeStyles((theme) =>
  createStyles({ 
    root: {
      '& .kcal': {
        backgroundColor: purple['A100'],
        'padding': theme.spacing(0.5),
        'margin-top': theme.spacing(0.5),
        'margin-bottom': theme.spacing(0.5),
      },
      '& .carbohydrate': {
        backgroundColor: lightBlue['A100'],
        'padding': theme.spacing(0.5),
        'margin-top': theme.spacing(0.5),
        'margin-bottom': theme.spacing(0.5),
      },
      '& .fat': {
        backgroundColor: teal['A100'],
        'padding': theme.spacing(0.5),
        'margin-top': theme.spacing(0.5),
        'margin-bottom': theme.spacing(0.5),
      },
      '& .protein': {
        backgroundColor: yellow['A100'],
        'padding': theme.spacing(0.5),
        'margin-top': theme.spacing(0.5),
        'margin-bottom': theme.spacing(0.5),
      },
    },
  }),
)