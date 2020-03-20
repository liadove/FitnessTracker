import React from 'react'
import Paper from '@material-ui/core/Paper'
import WaterBalance from './waterBalance'
import CalorieCounter from './calorieCounter'
import Activity from './activity'
import WeightCheck from './weightCheck'

class YourProgress extends React.Component {
  render() {
    return (
      <Paper>
        <WaterBalance />
        <CalorieCounter />
        <Activity />
        <WeightCheck />
      </Paper>
    )
  }
}

export default YourProgress
