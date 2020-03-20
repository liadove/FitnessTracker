import React from 'react'

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

    this.pointClickHandler = this.pointClickHandler.bind(this)
    this.legendClickHandler = this.legendClickHandler.bind(this)
  }

  render() {
    return (
      <PieChart
        id="pie"
        dataSource={[{argument: 2, value: 20}, {argument: 3, value: 30}]}
        palette="Bright"
        title="Water balance"
        onPointClick={this.pointClickHandler}
        onLegendClick={this.legendClickHandler}
      >
        <Series argumentField="argument" valueField="value">
          <Label visible={true}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="left"
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

export default WaterBalance
