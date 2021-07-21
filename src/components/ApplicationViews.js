import React from "react"
import { Route } from "react-router-dom"
import { ArticleProvider } from "./articles/ArticleProvider"
import { FriendProvider } from "./friends/FriendsProvider"
import { UserProvider } from "./users/UsersProvider"
import { ArticleList } from "./articles/ArticleList"
import { FriendList } from "./friends/FriendsList"
import { FriendsForm } from "./friends/FriendsForm"
import { FriendsDetails } from "./friends/FriendsDetails"
import { ArticleForm } from "./articles/ArticleForm"
import { ArticleDetails } from "./articles/ArticleDetails"


export const ApplicationViews = () => {
  return (
    <>
      <ArticleProvider>
        <FriendProvider>
          <Route exact path="/">
            {/* Render the component for news articles */}
            <ArticleList />
          </Route>


          <Route exact path="/articles/create">
            <ArticleForm />
          </Route>
        

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
