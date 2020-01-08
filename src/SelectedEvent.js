import React from 'react'
import {connect} from 'react-redux'

const SelectedEvent = (props) => {
  const {event} = props
  return (
    <div className="app-section">
      <div id="selected">
        <div id="event-title">
          <div id="event-artist">{event.EventName}</div>
          <div id="event-venue">
            Live at the {event.VenueName}
          </div>
          <div className="event-location">
          {event.VenueCity}, {event.VenueCountry}
        </div>
        </div>
        <div id="event-date">
          {event.Day+ " "}
          {event.Month} {event.CalendarViewModel.DayOfMonth},{" "+event.CalendarViewModel.Year} @ {event.Time}
        </div>
        <div id="event-info">
        {(event.AvailableTickets > 0)?
          <div className="green">
           {event.AvailableTickets} Tickets Available from {event.MinPrice}
          </div>
          :
          <div className="red">
            Sold Out
          </div>
        }
        </div>
      </div>
     {/* <div className="event-item-info">
        <div className="event-item-title">
          {event.EventName} at {event.VenueName}
        </div>
        <div className="event-item-location">
          {event.VenueCity},{event.VenueCountry}
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
      </div> */}
    </div>
  )
}
const mapState = (state) => ({
  event : state.selected
})
export default connect(mapState)(SelectedEvent)
