import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventsProvider"
import { useParams, useHistory } from "react-router-dom"

export const EventsDetails = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState([])
    const { getEventById, deleteEvent } = useContext(EventContext)

    useEffect(() => {
        getEventById(eventId)
            .then(response => {
                setEvent(response)
            })
    }, [])

    const history = useHistory()

    const handleDelete = () => {
        deleteEvent(event.id)
            .then(() => {
                history.push("/events")
            })
    }

    return (
        <section className="userEvent">
            <h2 className="event__location">Event Location: {event.locationName}</h2>
            <h2 className="event__time">Event Date: {event.dateTime}</h2>
            <button className="event__weather">Show Weather</button>
            <h3 className="userEvent__name">Events By: {eventId.user?.name}</h3>
            <button onClick={() => {
                history.push(`/events/edit/${event.id}`)
            }}>Edit</button>
            <button onClick={handleDelete}>Delete Event</button>
        </section>
    )
}