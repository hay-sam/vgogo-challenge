import {createStore} from 'redux'
import data from './data'

const initialState = {
  selected : data.Items[0],
  events : data.Items,
  location: ""  //Part 2 addition
}

export const selectEvent = (event) => ({
  type: "EVENT_SELECTED",
  event
})

// For Part 2
export const selectLocation = (location) => ({
  type: "LOCATION_SELECTED",
  location
})

const reducer = (state = initialState, action) => {
    switch (action.type){
      case "EVENT_SELECTED":
        return {...state, selected: action.event}
      case "LOCATION_SELECTED":
        return {...state, location: action.location}
      default:
         return state
    }
}

export default createStore(reducer)
