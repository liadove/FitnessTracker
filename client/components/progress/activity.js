import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import FormLabel from '@material-ui/core/FormLabel'

export default function Activity(props) {
  return (
    // <Link to='/progress/addworkout'>
    //   <button type='button'>Add workout</button>
    // </Link>
    <div>
      <FormLabel>Activity</FormLabel>
      <Button
        component={Link}
        to="/my_route"
        variant="contained"
        color="primary"
      >
        Add workout
      </Button>
    </div>
  )
}
