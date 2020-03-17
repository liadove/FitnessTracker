const Sequelize = require('sequelize')
const db = require('../db')

const WorkoutDone = db.define('workoutDone', {
  userId: {
    type: Sequelize.INTEGER
  }
})

module.exports = WorkoutDone
