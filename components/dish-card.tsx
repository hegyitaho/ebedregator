import React from 'react'
import {makeStyles, createStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import {purple, lightBlue, teal, yellow} from '@material-ui/core/colors'

import {FoodData} from 'backend/domain'


const DishCard = (props: {dish: FoodData}) => {
  const classes = useStyles(props)
  return (
    <Grid item className={classes.root}>
      <Card raised={true} className={classes.stretchHeight100} >
        <CardContent className={classes.stretchHeight90}>
          <Box display="flex" flexDirection="column" justifyContent="space-between" className={classes.stretchHeight90}>
            <h3 className="name">
              {props.dish.name}
            </h3>
            <Box display="flex" justifyContent="space-between">
              {['kcal', 'carbohydrate', 'fat', 'protein'].map(key => 
                <Paper key={key} variant="outlined" className={key}>
                  {`${key === 'carbohydrate' ? 'carb' : key}: ${props.dish[key]}`}
                </Paper>,
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default DishCard

const useStyles = makeStyles((theme) =>
  createStyles({ 
    root: {
      'width': 450,
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
    stretchHeight100: {
      height: '100%',
    },
    stretchHeight90: {
      height: '90%',
    },
  }),
)