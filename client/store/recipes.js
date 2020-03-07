import axios from 'axios'

const GOT_RECIPES_BY_TYPE = 'GOT_RECIPES_BY_TYPE'
const GOT_RECIPE_BY_ID = 'GOT_RECIPE_BY_ID'

const initialState = {
  recipes: [],
  recipe: {}
}

//create an action creator
export const gotRecipesByType = recipes => ({
  type: GOT_RECIPES_BY_TYPE,
  recipes
})
export const gotRecipeById = recipe => ({type: GOT_RECIPE_BY_ID, recipe})

export const getRecipe = (str = '', max = 10) => async dispatch => {
  try {
    const res = await axios.get(`/api/recipes/?str=${str}&max=${max}`)
    dispatch(gotRecipesByType(res.data))
  } catch (error) {
    console.error(error)
  }
}
export const getRecipeById = id => async dispatch => {
  try {
    const res = await axios.get(`/api/recipes/recipeId/${id}`)
    console.log(res)
    dispatch(gotRecipeById(res.data))
  } catch (error) {
    console.error(error)
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_RECIPES_BY_TYPE:
      return {...state, recipes: action.recipes}
    case GOT_RECIPE_BY_ID:
      return {...state, recipe: action.recipe}
    default:
      return state
  }
}
