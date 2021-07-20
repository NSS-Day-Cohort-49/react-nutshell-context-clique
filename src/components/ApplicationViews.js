import React from "react"
import { Route } from "react-router-dom"
import { MessageProvider } from "./messages/MessageProvider";
import { MessageList } from "./messages/MessageList";
export const ApplicationViews = () => {
  return (
    <>

        {/* Render the component for news articles */}

      <MessageProvider>   
          <Route path="/messages">
            {/* Render the component for the messages */}
            <MessageList />
          </Route>
      </MessageProvider>

      
    </>
  )
}