import React, { useContext, useEffect, useState } from "react" 
import { EventContext } from "./EventsProvider"
import { useParams } from "react-router-dom"

export const EventsDetails = () => {
    const { eventId } = useParams(); 
    const [event, setEvent] = useState([])
    const { getEventById } = useContext(EventContext)

    useEffect(() => {
        getEventById(eventId)
        .then(response => {
            setEvent(response)
        })
    }, [])

    return (
        <section className="userEvent">
            <h3 className="userEvent__name">Events By: {eventId.userId}</h3>
        </section>
    )
}