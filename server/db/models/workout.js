const Sequelize = require('sequelize')
const db = require('../db')

const Workout = db.define('workout', {
  name: {
    type: Sequelize.STRING
  },
  duration: {
    type: Sequelize.TIME
  },
  caloriesBurned: {
    type: Sequelize.INTEGER
  },
  linkToWorkout: {
    type: Sequelize.STRING
  }
})

module.exports = Workout
