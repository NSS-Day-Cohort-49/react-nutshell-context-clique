import React from "react"
import { Route } from "react-router-dom"
import { MessageProvider } from "./messages/MessageProvider";
import { MessageList } from "./messages/MessageList";
import { FriendsDetails } from "./friends/FriendsDetails"
import { FriendList } from "./friends/FriendsList"
import { FriendProvider } from "./friends/FriendsProvider"
import { FriendsForm } from "./friends/FriendsForm"
import { UserProvider } from "./users/UsersProvider"

export const ApplicationViews = () => {
  return (
    <>
      <Route>
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

      
    </>
  )
}