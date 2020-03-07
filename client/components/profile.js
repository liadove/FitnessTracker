import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import {makeStyles} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Link from '@material-ui/core/Link'
import {connect} from 'react-redux'
import {editUser} from '../store/user'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1.5),
    minWidth: 155
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))
export function Profile(props) {
  const classes = useStyles()
  const [gender, setGender] = useState('')
  const [weightGoal, setWeightGoal] = useState('')
  const {user, handleSubmit} = props
  const handleSubmitHelper = evt => {
    evt.preventDefault()
    handleSubmit(gender, weightGoal, user.id, evt)
  }
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Edit profile
      </Typography>
      <form
        className={classes.form}
        noValidate
        onSubmit={handleSubmitHelper}
        id={user.id}
      >
        <Grid container justify="flex-end">
          <Link href="#">Save</Link>
        </Grid>
        <Grid container direction="column">
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" gutterBottom>
              First Name
            </Typography>
            <TextField
              required
              id="firstName"
              name="firstName"
              label={user.firstName}
              fullWidth
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" gutterBottom>
              Last Name
            </Typography>
            <TextField
              required
              id="lastName"
              name="lastName"
              label={user.lastName}
              fullWidth
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h5" gutterBottom>
              Weight
            </Typography>
            <TextField
              required
              id="weight"
              name="weight"
              label={user.weight}
              fullWidth
              autoComplete="weight"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h5" gutterBottom>
              Height
            </Typography>
            <TextField
              required
              id="height"
              name="height"
              label={user.height}
              fullWidth
              autoComplete="height"
            />
          </Grid>
          <FormControl className={classes.formControl}>
            <Typography variant="h5" gutterBottom>
              Gender
            </Typography>
            {/* <InputLabel id="gender">Gender</InputLabel> */}
            <Select
              labelId="gender"
              id="gender"
              value={user.gender}
              onChange={e => {
                setGender(e.target.value)
              }}
            >
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <Typography variant="h5" gutterBottom>
              Weight goal
            </Typography>
            {/* <InputLabel id="weightGoal">Weight goal</InputLabel> */}
            <Select
              labelId="weightGoal"
              id="weightGoal"
              value={user.weightGoal}
              onChange={e => {
                setWeightGoal(e.target.value)
              }}
            >
              <MenuItem value="Loss">Female</MenuItem>
              <MenuItem value="Gain">Male</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </form>
    </React.Fragment>
  )
}

const mapProfile = state => {
  return {
    user: state.user
  }
}

const mapDispatchProfile = dispatch => {
  return {
    handleSubmit(gender, weightGoal, id, evt) {
      console.log('in handlesubmit')
      const firstName = evt.target.firstName.value
        ? evt.target.firstName.value
        : ''
      const lastName = evt.target.lastName.value
        ? evt.target.lastName.value
        : ''
      const weight = evt.target.weight.value ? evt.target.weight.value : ''
      const height = evt.target.height.value ? evt.target.height.value : ''

      const user = {firstName, lastName, weight, height, gender, weightGoal}
      dispatch(editUser(user, id))
    }
  }
}

export default connect(mapProfile, mapDispatchProfile)(Profile)
