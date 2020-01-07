import React from 'react'
import {connect} from 'react-redux'
import {selectEvent} from './store'

const EventListItem = (props) => {
  const {event} = props
  return (
    <div className="event-list-item">
      Hi i'm an event
    </div>
  )
}

const mapDispatch = (dispatch) => ({
  selectEvent : (event) => dispatch(selectEvent(event))
})
export default connect(null,mapDispatch)(EventListItem)
