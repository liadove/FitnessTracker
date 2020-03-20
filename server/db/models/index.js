const User = require('./user')
const DailyCheck = require('./dailyCheck')
const Workout = require('./workout')
const WorkoutDone = require('./workoutDone')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

DailyCheck.belongsTo(User)
DailyCheck.belongsToMany(Workout, {
  through: 'workoutDones'
})
Workout.belongsToMany(DailyCheck, {
  through: 'workoutDones'
})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  DailyCheck,
  Workout,
  WorkoutDone
}
