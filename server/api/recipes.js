const router = require('express').Router()
const fatApi = new (require('fatsecret'))(
  'f7633265ca0640c9b47f3621b1a966c1',
  '986ac9152da1438a97ee6bf7a910af65'
)
module.exports = router

router.get('/recipeId/:id', (req, res, next) => {
  let id = req.params.id
  fatApi
    .method('recipe.get', {
      recipe_id: id
    })
    .then(function(result) {
      console.log(result)
      res.send(result.recipe)
    })
    .catch(err => console.error(err))
})

router.get('/', (req, res, next) => {
  let str = req.query.str
  let max = req.query.max
  fatApi
    .method('recipes.search', {
      search_expression: str,
      max_results: max
    })
    .then(function(results) {
      res.send(results.recipes.recipe)
    })
    .catch(err => console.error(err))
})
