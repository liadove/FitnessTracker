const router = require('express').Router()
const {DailyCheck, User} = require('../db/models')
module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const date = req.query.date.slice(0, 10)
    const userId = req.params.userId
    let user = await User.findOne({
      where: {
        id: userId
      }
    })
    let data = await DailyCheck.findOrCreate({
      where: {
        date: date,
        userId: userId
      },
      defaults: {
        date: date,
        userId: userId,
        waterDrunk: 0,
        caloriesAte: 0,
        weight: user.dataValues.weight
      }
    })
    // await data.update({
    //   date: date,
    //   userId: userId,
    //   waterDrunk: 0,
    //   caloriesAte: 0,
    //   weight: user.dataValues.weight
    // })
    res.json(data)
  } catch (error) {
    next(error)
  }
})
