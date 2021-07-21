import React from "react"
import { Route } from "react-router-dom"
import { MessageProvider } from "./messages/MessageProvider";
import { FriendProvider } from "./friends/FriendsProvider"
import { ArticleProvider } from "./articles/ArticleProvider";
import { UserProvider } from "./users/UsersProvider"
import { ArticleList } from "./articles/ArticleList";
import { MessageList } from "./messages/MessageList";
import { FriendList } from "./friends/FriendsList"
import { FriendsDetails } from "./friends/FriendsDetails"
import { ArticleForm } from "./articles/ArticleForm";
import { FriendsForm } from "./friends/FriendsForm";

export const ApplicationViews = () => {
  return (
    <>
      <ArticleProvider>
        <FriendProvider>
          <MessageProvider>
            <Route exact path="/">
              {/* Render the component for news articles */}
              <ArticleList />
            </Route>
          </MessageProvider>

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