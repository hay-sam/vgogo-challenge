import React from 'react'
import {connect} from 'react-redux'
import {selectLocation} from './store'

const Location = props => {
  const handleChange = (event) =>{
    props.selectLocation(event.target.value)
  }

  let locations = Object.keys(props.events.reduce((accum,event)=>{
    accum[event.VenueCity+", "+event.VenueCountry] = true
    return accum
  },{}))

  return(
    <div id="location-select">
      <div> Select a Location:</div>
      <select id="selector" defaultValue={props.location} onChange={handleChange}>
        <option value="null">
          All Locations
        </option>
        {locations.map(place => {
          return <option key={place} value={place}>{place}</option>
        })}
      </select>
    </div>
  )
}

const mapState = (state) =>({
  location : state.location,
  events : state.events
})
const mapDispatch = (dispatch) =>({
  selectLocation : (location) => dispatch(selectLocation(location))
})
export default connect(mapState, mapDispatch)(Location)
