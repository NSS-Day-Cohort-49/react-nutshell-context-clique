import React from "react"
import { Route } from "react-router-dom"
import { ArticleProvider } from "./articles/ArticleProvider"
import { FriendsDetails } from "./friends/FriendsDetails"
import { FriendList } from "./friends/FriendsList"
import { FriendProvider } from "./friends/FriendsProvider"
import { ArticleForm } from "./articles/ArticleForm"
import { ArticleList } from "./articles/ArticleList"

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
        </FriendProvider>
      </ArticleProvider>

        <FriendProvider>
          <Route exact path="/friends/detail/:friendId(\d+)">
            <FriendsDetails />
          </Route>

          <Route exact path="/friends">
            <FriendList />
          </Route>

        </FriendProvider>
      

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
