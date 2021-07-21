import React, { useContext, useEffect } from "react" 
import { EventContext } from "./EventsProvider"
import { EventCard } from "./EventsCard"
import { useHistory } from "react-router-dom"

export const EventList = () => {

    const { events, getEvents } = useContext(EventContext)
    const history = useHistory();

    useEffect(() => {
        console.log("EventList: useEffect - getEvents")
        getEvents()
    }, [])

    return (
        <>
            <button onClick={() => { history.push("/events/create") }}>
                Add Event
            </button> 

            <div className="events">
                {console.log("EventList: Render", events)}
                {
                    events.map(event => {
                        return <EventCard key={event.id}
                        event={event} />
                    })
                }
            </div>
        </>
    )
}