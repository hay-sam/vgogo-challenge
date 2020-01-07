import React from 'react'
import {connect} from 'react-redux'

const SelectedEvent = (props) => {
  const {event} = props
  return (
    <div className="app-section">
      <div className="event-item-title">
        {event.EventName} at {event.VenueName}
      </div>
    </div>
  )
}
const mapState = (state) => ({
  event : state.selected
})
export default connect(mapState)(SelectedEvent)
