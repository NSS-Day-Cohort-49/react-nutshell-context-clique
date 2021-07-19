import React from "react"
import { Link } from "react-router-dom"

export const EventCard = ({ event }) => (

    <section className="event">
        <h3 className="event__name">
            <Link to={`/events/detail/${event.id}`}>
                {event.eventName}
            </Link>
        </h3>
        <h2 className="event__location">Event Location: {event.locationName}</h2>
        <h2 className="event__time">Event Date: {event.dateTime}</h2>
        <button className="event__weather">Show Weather</button>
    </section>
)