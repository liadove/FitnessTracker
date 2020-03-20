import React from 'react'
import FormLabel from '@material-ui/core/FormLabel'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

export default function weightCheck(props) {
  return (
    // <Link to='/progress/addworkout'>
    //   <button type='button'>Add workout</button>
    // </Link>
    <div>
      <Typography>Weight Check</Typography>
      <TextField
        id="weight"
        name="weight"
        label="Enter your weight"
        // placeholder="Weight Check"
        // defaultValue={user.weight || ''}
        fullWidth
        autoComplete="weight"
      />
    </div>
  )
}
