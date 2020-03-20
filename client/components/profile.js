import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import {connect} from 'react-redux'
import {editUser} from '../store/user'
import Button from '@material-ui/core/Button'
import FormLabel from '@material-ui/core/FormLabel'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 50
  },
  selectEmpty: {
    marginTop: theme.spacing(0)
  }
}))
export function Profile(props) {
  const classes = useStyles()
  const {user, handleSubmit} = props
  const [gender, setGender] = useState(user.gender || '')
  const [weightGoal, setWeightGoal] = useState(user.weightGoal || '')
  const [activity, setActivity] = useState(user.activity || 0)
  const handleSubmitHelper = evt => {
    evt.preventDefault()
    handleSubmit(
      gender || user.gender,
      weightGoal || user.weightGoal,
      activity || user.activity,
      user.id,
      evt
    )
  }
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Edit profile
      </Typography>
      <form
        className={classes.form}
        noValidate
        onSubmit={handleSubmitHelper}
        id={user.id}
      >
        <Grid container direction="column">
          <Grid item xs={9}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              placeholder="Email"
              defaultValue={user.email || ''}
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              placeholder="First Name"
              defaultValue={user.firstName || ''}
              fullWidth
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              placeholder="Last Name"
              defaultValue={user.lastName || ''}
              fullWidth
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              id="birthday"
              label="Birthday"
              type="date"
              fullWidth
              defaultValue={user.birthday ? user.birthday.slice(0, 10) : ''}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              required
              id="weight"
              name="weight"
              label="Weight"
              placeholder="Weight in lbs."
              defaultValue={user.weight || ''}
              fullWidth
              autoComplete="weight"
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              required
              id="weightTarget"
              name="weightTarget"
              label="Weight Target"
              placeholder="Weight Target in lbs."
              defaultValue={user.weightTarget || ''}
              fullWidth
              autoComplete="weightTarget"
            />
          </Grid>

          <Grid sapcing={2} container direction="row">
            <FormLabel>Height</FormLabel>
            <Grid item>
              <TextField
                required
                id="heightFeet"
                name="heightFeet"
                placeholder="ft."
                defaultValue={user.heightFeet || ''}
                fullWidth
                autoComplete="heightFeet"
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="heightInches"
                name="heightInches"
                placeholder="in."
                defaultValue={user.heightInches || ''}
                fullWidth
                autoComplete="heightInches"
              />
            </Grid>
          </Grid>
          <InputLabel id="gender">Gender</InputLabel>
          <Select
            labelId="gender"
            id="gender"
            value={gender || user.gender || ''}
            onChange={e => {
              setGender(e.target.value)
            }}
          >
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
          </Select>
          <InputLabel id="weightGoal">Weight goal</InputLabel>
          <Select
            labelId="weightGoal"
            id="weightGoal"
            value={weightGoal || user.weightGoal || ''}
            onChange={e => {
              setWeightGoal(e.target.value)
            }}
          >
            <MenuItem value="Loss">Loss</MenuItem>
            <MenuItem value="Gain">Gain</MenuItem>
          </Select>
          <InputLabel id="activity">Level of activity</InputLabel>
          <Select
            labelId="activity"
            id="activity"
            value={activity || user.activity || ''}
            onChange={e => {
              setActivity(e.target.value)
            }}
          >
            <MenuItem value={1.2}>Rarely exercise</MenuItem>
            <MenuItem value={1.375}>Exercise 1 to 3 days per week</MenuItem>
            <MenuItem value={1.55}>Exercise 3 to 5 days per week</MenuItem>
            <MenuItem value={1.725}>Exercise 6 to 7 days per week</MenuItem>
            <MenuItem value={1.9}>
              Exercise every day and have a physical job or if you often
              exercise twice a day
            </MenuItem>
            <MenuItem value={1.9}>Often exercise twice a day</MenuItem>
          </Select>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
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
    handleSubmit(gender, weightGoal, activity, id, evt) {
      const email = evt.target.email.value || ''
      const firstName = evt.target.firstName.value || ''
      const lastName = evt.target.lastName.value || ''
      const weight = evt.target.weight.value || ''
      const birthday = evt.target.birthday.value || ''
      const heightFeet = evt.target.heightFeet.value || ''
      const heightInches = evt.target.heightInches.value || ''
      const weightTarget = evt.target.weightTarget.value || ''

      const user = {
        birthday,
        email,
        firstName,
        lastName,
        weight,
        heightFeet,
        heightInches,
        weightTarget,
        gender,
        weightGoal,
        activity
      }
      dispatch(editUser(user, id))
    }
  }
}

export default connect(mapProfile, mapDispatchProfile)(Profile)
