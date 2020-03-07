import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getRecipe, getRecipeById} from '../../store/recipes'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Title from '../Title'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import InputAdornment from '@material-ui/core/InputAdornment'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 2px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  root1: {
    padding: '30px 30px',
    display: 'flex',
    alignItems: 'left',
    width: 400,
    flexDirection: 'column'
  },
  link: {
    padding: '5px 0px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 12
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  seeMore: {
    marginTop: theme.spacing(3)
  }
}))
const RecipePage = () => {
  const classes = useStyles()
  const recipes = useSelector(state => state.recipes.recipes)
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(getRecipeById(1949037))
    dispatch(getRecipe())
  }, [])
  const [value, setValue] = useState('')
  const [Value, SetValue] = useState('')
  const [count, setCount] = useState(10)
  async function handleSubmit() {
    console.log(value, Value)
    if (recipes && value === Value) {
      setCount(count + 10)
      SetValue(value)
      await dispatch(getRecipe(value, count + 10))
    }
    if (value !== Value) {
      setCount(10)
      SetValue(value)
      await dispatch(getRecipe(value, 10))
    }
  }
  return (
    <div>
      <TextField
        id="standard-basic"
        onChange={e => setValue(e.target.value)}
        name="search"
        label="Search"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton
                type="submit"
                onClick={handleSubmit}
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />

      <Grid item xs={12}>
        <Paper className={classes.paper}>
          {Value === '' ? '' : <Title>Recipes for "{Value}"</Title>}
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Calories</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recipes.map(recipe => (
                <TableRow key={recipe.recipe_id}>
                  <TableCell>
                    <Link
                      href={`/home/recipes/${recipe.recipe_id}`}
                      variant="body2"
                    >
                      {recipe.recipe_name}
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    {recipe.recipe_nutrition.calories}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className={classes.seeMore}>
            <Link color="primary" href="#" onClick={handleSubmit}>
              See more recipes
            </Link>
          </div>
        </Paper>
      </Grid>
    </div>
  )
}
export default RecipePage
// {<Typography className={classes.root1}>
// {recipes.map(recipe=> <Link className={classes.link} href="#" /*onClick={preventDefault}*/ color="inherit" key={recipe.recipe_id}>{recipe.recipe_description}</Link>
// )}
// </Typography>}
