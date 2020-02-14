import React from 'react'
import {makeStyles, createStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import {purple, teal, deepOrange, blue} from '@material-ui/core/colors'

import {FoodData} from 'backend/domain'


const DishCard = (props: {dish: FoodData}) => {
  const classes = useStyles(props)
  return (
    <Grid item className={classes.root}>
      <Card raised={true} className={classes.stretchHeight100} >
        <CardContent className={classes.stretchHeight90}>
          <Box display="flex" flexDirection="column" justifyContent="space-between" className={classes.stretchHeight90}>
            <div>
              <h3 className="name">
                {props.dish.name}
              </h3>
              <a className="link" href={props.dish.site} target="_blank" rel="noopener noreferrer">{props.dish.site}</a>
            </div>
            <Box display="flex" justifyContent="space-between" className='macro-box'>
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
      '& .name': {
        marginTop: 0,
      },
      'width': 450,
      '& .macro-box': {
        'margin-top': theme.spacing(2),
        '& > *': {
          color: 'white',
          padding: theme.spacing(0.5),
          'margin-top': theme.spacing(0.5),
          'margin-bottom': theme.spacing(0.5),
        },
      },
      '& .kcal': {
        backgroundColor: purple['700'],
      },
      '& .carbohydrate': {
        backgroundColor: blue['700'],
      },
      '& .fat': {
        backgroundColor: teal['700'],
      },
      '& .protein': {
        backgroundColor: deepOrange['700'],
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