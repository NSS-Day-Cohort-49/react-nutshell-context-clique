import React from "react"
import { Route } from "react-router-dom"
import { ArticleProvider } from "./articles/ArticleProvider"
import { FriendsDetails } from "./friends/FriendsDetails"
import { FriendList } from "./friends/FriendsList"
import { FriendProvider } from "./friends/FriendsProvider"
import { FriendsForm } from "./friends/FriendsForm"
import { UserProvider } from "./users/UsersProvider"
export const ApplicationViews = () => {
  return (
    <>
      <ArticleProvider>
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
    </ArticleProvider>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>

      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>

      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
