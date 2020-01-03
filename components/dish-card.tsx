import React from 'react'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'

import {FoodData} from 'backend/domain'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
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
      <Card>
        <CardContent>
          <div className="name">
            {props.dish.name}
          </div>
          <Grid>
            {['kcal', 'carbohydrate', 'fat', 'protein'].map(key => 
              <Grid key={key} item>
                <Card> 
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