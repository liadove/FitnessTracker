import React from 'react'
import {connect} from 'react-redux'
import {getDailyCheckProps} from '../../store/dailyCheck'
import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Legend
} from 'devextreme-react/pie-chart'

class WaterBalance extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      waterDrunk: 0
    }

    this.pointClickHandler = this.pointClickHandler.bind(this)
    this.legendClickHandler = this.legendClickHandler.bind(this)
  }

  async componentDidMount() {
    let data = await this.props.getDailyCheckProps(this.props.userId)
    console.log(data)
  }

  render() {
    return (
      <PieChart
        id="pie"
        dataSource={[
          {
            argument: 'Recommended amount water per day',
            value: this.props.recommendedWater
          },
          {argument: 'Water drunk', value: 22}
        ]}
        palette="Bright"
        title="Water balance"
        onPointClick={this.pointClickHandler}
        onLegendClick={this.legendClickHandler}
      >
        <Series argumentField="argument" valueField="value">
          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
          itemTextPosition="left"
          rowCount={2}
        />

        <Size width={400} />
        {/* <Export enabled={false} /> */}
      </PieChart>
    )
  }

  pointClickHandler(e) {
    this.toggleVisibility(e.target)
  }

  legendClickHandler(e) {
    let arg = e.target
    let item = e.component.getAllSeries()[0].getPointsByArg(arg)[0]

    this.toggleVisibility(item)
  }

  toggleVisibility(item) {
    item.isVisible() ? item.hide() : item.show()
  }
}

const mapState = state => {
  return {
    recommendedWater: state.user.recommendedWaterPerDay,
    userId: state.user.id,
    waterDrunk: state.dailyCheck.waterDrunk
  }
}

const mapDispatch = dispatch => {
  return {
    getDailyCheckProps: userId => dispatch(getDailyCheckProps(userId))
  }
}

export default connect(mapState, mapDispatch)(WaterBalance)
