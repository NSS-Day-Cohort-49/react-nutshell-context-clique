import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventsProvider";
import { useHistory } from 'react-router-dom';

export const EventForm = () => {
  const { addEvent } = useContext(EventContext)
  const [isLoading, setIsLoading] = useState(false);

  const [event, setEvent] = useState({
    eventName: "",
    dateTime: "",
    locationName: "",
    currentUserId: 0
  });

  const history = useHistory();

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (evt) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newEvent = { ...event }
    /* Animal is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newEvent[evt.target.id] = evt.target.value
    // update state
    setEvent(newEvent)
  }

  const handleClickAddEvent = (evt) => {
    evt.preventDefault() //Prevents the browser from submitting the form

    const userId = parseInt(sessionStorage.getItem("nutshell_user"))

      const newEvent = {
        eventName: event.eventName,
        locationName: event.locationName,
        dateTime: event.dateTime,
        userId: userId
      }
      addEvent(newEvent)
        .then(() => history.push("/events"))
    }

  return (
    <form className="eventForm">
      <h2 className="eventForm__title">New Event</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="eventName">Event Name:</label>
          <input type="text" id="eventName" required autoFocus className="form-control" placeholder="Event name" value={event.eventName} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="locationName">Event Location:</label>
          <input type="text" id="locationName" required autoFocus className="form-control" placeholder="Event location" value={event.locationName} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="dateTime">Event Date:</label>
          <input type="text" id="dateTime" required autoFocus className="form-control" placeholder="Event date" value={event.dateTime} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickAddEvent}>
        Add Event
          </button>
    </form>

    
  )
}