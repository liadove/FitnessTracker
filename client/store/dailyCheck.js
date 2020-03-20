import axios from 'axios'

const GOT_DAILY_CHECK_PROPS = 'GOT_DAILY_CHECK_PROPS'

const initialState = {}

//create an action creator
export const gotDailyCheckProps = props => ({
  type: GOT_DAILY_CHECK_PROPS,
  props
})
export const getDailyCheckProps = (
  userId,
  date = new Date()
) => async dispatch => {
  try {
    const res = await axios.get(`/api/dailycheck/${userId}/?date=${date}`)
    console.log(res.data)
    dispatch(gotDailyCheckProps(res.data))
  } catch (error) {
    console.error(error)
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_DAILY_CHECK_PROPS:
      return {...action.props}
    default:
      return state
  }
}
