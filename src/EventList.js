import React from 'react'
import {connect} from 'react-redux'
import EventListItem from './EventListItem'

const EventList = (props) => {
  const {events} = props
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
  events : state.events
})
export default connect(mapState)(EventList)
