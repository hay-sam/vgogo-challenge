import {createStore} from 'redux'
import data from './data'

const initialState = {
  selected : data.Items[0],
  events : data.Items
}

export const selectEvent = (event) => ({
  type: "EVENT_SELECTED",
  event
})

const reducer = (state = initialState, action) => {
    switch (action.type){
      case "EVENT_SELECTED":
        return {...state, selected: action.event}
      default:
         return state
    }
}

export default createStore(reducer)
