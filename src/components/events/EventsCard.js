import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { EventContext } from "./EventsProvider"
import "./Event.css"

export const EventCard = ({ event }) => {
    const { deleteEvent } = useContext(EventContext)

    const history = useHistory()

    const handleDelete = () => {
        deleteEvent(event.id)
            .then(() => {
                history.push("/events")
            })
    }

    return (
        <section className="event">
            <h3 className="event__name">{event.eventName}</h3>
            <h2 className="event__location">Event Location: {event.locationName}</h2>
            <h2 className="event__time">Event Date: {event.dateTime}</h2>
            <h3 className="userEvent__name">Event By: {event.user?.name}</h3>
            <button className="event__weather">Show Weather</button>
            <button onClick={() => {
                history.push(`/events/edit/${event.id}`)
            }}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </section>
    )
}