import React from "react"
import { Route } from "react-router-dom"
import { MessageProvider } from "./messages/MessageProvider";
import { MessageList } from "./messages/MessageList";
import { FriendsDetails } from "./friends/FriendsDetails"
import { FriendList } from "./friends/FriendsList"
import { FriendProvider } from "./friends/FriendsProvider"
import { UserProvider } from "./users/UsersProvider"

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

      <MessageProvider>   
          <Route path="/messages">
            {/* Render the component for the messages */}
            <MessageList />
          </Route>
      </MessageProvider>

      
    </>
  )
}