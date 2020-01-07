import React from 'react'
import {connect} from 'react-redux'
import {selectEvent} from './store'

const EventListItem = (props) => {
  const {event} = props
  return (
    <div className="event-list-item">
      <div className="event-date">
        im a date
      </div>
      <div className="event-item-info">
      <div className="event-item-title">
        {event.EventName} at {event.VenueName}
      </div>
      <div className="event-item-location">
        im a city/state
      </div>
      {(event.AvailableTickets > 0)?
        <div className="green">
          Tickets Available
        </div>
        :
        <div className="red">
          Sold Out
        </div>
      }
      </div>
    </div>
  )
}

const mapDispatch = (dispatch) => ({
  selectEvent : (event) => dispatch(selectEvent(event))
})
export default connect(null,mapDispatch)(EventListItem)
