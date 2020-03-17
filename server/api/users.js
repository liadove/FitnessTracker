const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

function calculateAge(dob) {
  var diff_ms = Date.now() - dob.getTime()
  var age_dt = new Date(diff_ms)

  return Math.abs(age_dt.getUTCFullYear() - 1970)
}

function waterBalance(age, weight) {
  let recommendedWaterPerDay = weight / 2.2
  switch (true) {
    case age < 30:
      recommendedWaterPerDay *= 40
      break
    case age > 55:
      recommendedWaterPerDay *= 30
      break
    case age <= 55 && age >= 30:
      recommendedWaterPerDay *= 35
      break
    default:
      recommendedWaterPerDay *= 35
      break
  }
  recommendedWaterPerDay /= 28.3
  return recommendedWaterPerDay
}

function calorieBalance(
  gender,
  weight,
  heightFeet,
  heightInches,
  age,
  activity
) {
  if (gender === 'Female') {
    let calories =
      (655.1 +
        4.35 * weight +
        4.7 * (heightFeet * 12 + parseInt(heightInches)) -
        4.7 * age) *
      activity
    return calories
  } else
    return (
      (66 +
        6.23 * weight +
        12.7 * (heightFeet * 12 + parseInt(heightInches)) -
        6.76 * age) *
      activity
    )
}

router.post('/:id', async (req, res, next) => {
  try {
    const newUser = req.body
    const age = calculateAge(new Date(newUser.birthday))
    newUser.recommendedWaterPerDay = waterBalance(age, newUser.weight)
    newUser.caloriesRecommendedPerDay = calorieBalance(
      newUser.gender,
      newUser.weight,
      newUser.heightFeet,
      newUser.heightInches,
      age,
      newUser.activity
    )
    const user = await User.findOne({where: {id: req.params.id}})
    console.log(newUser)

    await user.update(newUser)
    res.json(user)
  } catch (err) {
    next(err)
  }
})
