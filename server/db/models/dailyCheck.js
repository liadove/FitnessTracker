const Sequelize = require('sequelize')
const db = require('../db')

const DailyCheck = db.define('dailyCheck', {
  date: {
    type: Sequelize.STRING
  },
  waterDrunk: {
    type: Sequelize.FLOAT
  },
  caloriesAte: {
    type: Sequelize.INTEGER
  },
  weight: {
    type: Sequelize.FLOAT
  }
})

module.exports = DailyCheck
