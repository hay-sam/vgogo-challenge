import React from 'react'
import {connect} from 'react-redux'
import {selectEvent} from './store'

const EventListItem = (props) => {
  const {event} = props
  return (
    <div className="event-list-item" onClick={()=> props.selectEvent(event)}>

      <div className="event-item-info">
        <div className="event-item-title">
          {event.EventName} at {event.VenueName}
        </div>
        <div className="event-item-location">
          {event.VenueCity}, {event.VenueCountry}
        </div>
        {(event.AvailableTickets > 0)?
          <div className="green">
            Tickets Available from {event.MinPrice}
          </div>
          :
          <div className="red">
            Sold Out
          </div>
        }
        </div>
        <div className="event-date">
          <div className="month">
            {event.Day}
          </div>
          <div className="day">
            {event.Month} {event.CalendarViewModel.DayOfMonth}
          </div>
          <div className="year">
            {event.CalendarViewModel.Year}
          </div>
      </div>
    </div>

  )
}
const mapDispatch = (dispatch) => ({
  selectEvent : (event) => dispatch(selectEvent(event))
})
export default connect(null,mapDispatch)(EventListItem)
