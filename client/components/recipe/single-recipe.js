import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import {getRecipeById} from '../../store/recipes'

const SingleRecipe = props => {
  console.log(props)
  // const recipe = useSelector(state=> state.recipes.recipe);
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(getRecipeById(1949037))
  // }, [])
  return <div />
}
export default SingleRecipe
