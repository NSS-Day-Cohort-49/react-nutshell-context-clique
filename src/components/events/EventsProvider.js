import React, { useState, createContext } from "react"

export const EventContext = createContext()
export const EventProvider = (props) => {
    const [events, setEvents] = useState([]) 

    const getEvents = () => {
        return fetch("http://localhost:8088/events")
        .then(res => res.json())
        .then(setEvents)
    }

    const addEvent = event => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
        .then(getEvents)
    }

    const deleteEvent = event => {
        return fetch(`http://localhost:8088/events/${event.id}`), {
            method: "DELETE"
        }
        .then(getEvents)
    }

    const getEventById = id => {
        return fetch(`http://localhost:8088/events/${id}`)
    }

    return (
        <EventContext.Provider value={{
            events, getEvents, addEvent, deleteEvent, getEventById
        }}>
            {props.children}
        </EventContext.Provider>
    )
}