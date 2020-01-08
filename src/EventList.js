import React from 'react'
import {connect} from 'react-redux'
import EventListItem from './EventListItem'
import {selectEvent} from './store'

const EventList = (props) => {
  let {events} = props

  // Filter Based on location for part 2
  if(props.location){
    events = events.filter(event => {
      return props.location === event.VenueCity+", "+event.VenueCountry
    })
  }
  props.selectEvent(events[0]) //Reset selected to first item in filtered list
  return (
    <div className="app-section">
      <div id="event-list">
        {events.map(event=>
          <EventListItem event={event} key={event.EventId} />
        )}
      </div>
    </div>
  )
}
const mapState = (state) => ({
  events : state.events,
  location: state.location
})
const mapDispatch = (dispatch) => ({
  selectEvent : (event) => dispatch(selectEvent(event))
})
export default connect(mapState, mapDispatch)(EventList)
