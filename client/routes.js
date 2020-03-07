import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {UserHome} from './components'
import SignInSide from './components/sign-in-side'
import SignUpSide from './components/sign-up-side'
import {me} from './store'
import RecipePage from './components/recipe/recipe-page'
import SingleRecipe from './components/recipe/single-recipe'
import Profile from './components/profile'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }
  render() {
    const {isLoggedIn} = this.props
    console.log('isLoggedIn?', isLoggedIn)
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        {/* <Route path="/signup" component={Signup} /> */}
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
            <Route path="/home/recipes" component={RecipePage} />
            <Route path="/home/recipes/:id" component={SingleRecipe} />
            <Route path="/home/profile" component={Profile} />
            <Route path="/" component={UserHome} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route path="/signin" component={SignInSide} />
        <Route path="/signup" component={SignUpSide} />
        <Route path="/" component={SignInSide} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
