import React, {Dispatch, SetStateAction} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Switch from '@material-ui/core/Switch'



const WeekToggle = ({showNextWeek, toggleWeekSelected}: WeekToggleProps) => {
  return (
    <Grid component="label" container alignItems="center" spacing={1}>
      <Grid item>Current week</Grid>
      <Grid item>
        <Switch
          checked={showNextWeek}
          onChange={toggleWeekSelected}
          value={showNextWeek}
        />
      </Grid>
      <Grid item>Next week</Grid>
    </Grid>
  )
}

export default WeekToggle

interface WeekToggleProps{
  showNextWeek: boolean; 
	toggleWeekSelected: any;
}