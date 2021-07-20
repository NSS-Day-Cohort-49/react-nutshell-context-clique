import React from "react"
import { Route } from "react-router-dom"
import { MessageProvider } from "./messages/MessageProvider";
import { MessageList } from "./messages/MessageList";
import { FriendsDetails } from "./friends/FriendsDetails"
import { FriendList } from "./friends/FriendsList"
import { FriendProvider } from "./friends/FriendsProvider"
import { EventProvider } from "./events/EventsProvider"
import { EventList } from "./events/EventsList"
import { EventsDetails } from "./events/EventsDetail"
import { EventForm } from "./events/EventsForm"
import { FriendsForm } from "./friends/FriendsForm"
import { UserProvider } from "./users/UsersProvider"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>

      <FriendProvider>
        <Route exact path="/friends/detail/:friendId(\d+)">
          <FriendsDetails />
        </Route>

        <UserProvider>
        <Route exact path="/friends/create">
          <FriendsForm />
        </Route>
        </UserProvider>

        <Route exact path="/friends">
          <FriendList />
        </Route>

      </FriendProvider>

      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>

      <MessageProvider>   
          <Route path="/messages">
            {/* Render the component for the messages */}
            <MessageList />
          </Route>
      </MessageProvider>

    <EventProvider>
      <Route exact path="/events">
        <EventList />
      </Route>

      <Route exact path="/events/detail/:eventId(\d+)">
        <EventsDetails />
      </Route>

      <Route exact path="/events/edit/:eventId(\d+)">
        <EventForm />
      </Route>

      <Route exact path="/events/create">
        <EventForm />
      </Route>
    </EventProvider>
    </>
  )
}