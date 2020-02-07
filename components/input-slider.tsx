import React, {Dispatch, SetStateAction} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import Input from '@material-ui/core/Input'
import Box from '@material-ui/core/Box'



export default function InputSlider({label, maxLimit, value, setValue, step}: PersonProps) {
  const styledClasses = useStyles({})

  function handleSliderChange(_event, newValue:  number[]) {
    const converted = newValue
      .map(val =>  val * maxLimit / 100)
      .map(Math.floor)
    setValue([Math.min(...converted), Math.max(...converted)])
  }

  function handleMaxKcal(event: React.ChangeEvent<HTMLInputElement>) {
    const newMaxKcal = Math.max(0, Number(event.target.value))
    setValue([value[0], Math.max(value[0], newMaxKcal)])
  }

  function handleMinKcal(event: React.ChangeEvent<HTMLInputElement>) {
    const newMinKcal = Math.min(maxLimit, Number(event.target.value))
    setValue([Math.max(0, newMinKcal), value[1]])
  }
  
  return (
    <div className={styledClasses.root}>
      <Typography id="input-slider">
        <b>{label}</b>
      </Typography>
      <Box pl={1}>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <Input
              className={styledClasses.input}
              value={value[0]}
              margin="dense"
              onChange={handleMinKcal}
              inputProps={{
                step: 50,
                min: 0,
                max: maxLimit,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
          <Grid item xs>
            <Slider
              step={step * 100 / maxLimit}
              value={value.map(val =>  val * 100 / maxLimit)}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item>
            <Input
              className={styledClasses.input}
              value={value[1]}
              margin="dense"
              onChange={handleMaxKcal}
              inputProps={{
                step: 50,
                min: 0,
                max: maxLimit,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    minWidth: 400,
    '& #input-slider': {
      textAlign: 'center',
    },
  },
  input: {
    '& input': {
      textAlign: 'center',
    },
    width: 60,
  },
})

type PersonProps = {
  label: string;
  maxLimit: number;
  value: number[];
  setValue: Dispatch<SetStateAction<number[]>>; 
  classes?: [];
  step: number;
}