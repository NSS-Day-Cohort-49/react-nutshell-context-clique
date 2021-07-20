import React, { useEffect, useContext, useState } from "react";
import { MessageContext } from "./MessageProvider";
import { MessageCard } from "./MessageCard";
import "./Message.css";



export const MessageList = () => {

    const { messages, getMessages, addMessage } = useContext(MessageContext);

    useEffect(()=>{
        console.log("MessageList: useEffect - getMessages, Initial render before data");
        getMessages()
    }, []);


    const [message, setMessage] = useState({
        userId: 0,
        text: "",
        isPublic: false
    });

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newMessage = {...message }
        /* Message is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newMessage[event.target.id] = event.target.value 
        // update state
        setMessage(newMessage)
    };

    const saveNewMessage = () => {
       message.userId = parseInt(sessionStorage.getItem("nutshell_user"));
       addMessage(message);
       alert("Message sent!");

      
       let newMessage = {...message} 
       newMessage.text = '';
       setMessage(newMessage)
    };


    return (
        <>
            <h2 className="messageHeader">Public Messages</h2>

            <div className="messages">
                {console.log("MessageList - Render: messages", messages)}
                    {messages.map((message) => {
                        return <MessageCard key={message.id} message={message} />;
                    })
                }
            </div>
            <div className="field">
                <label className="label" htmlFor="messageContent">New Message:</label>
                <textarea id="body" type="text" name="messageContent" className="content" rows="1" cols="60"placeholder="Type Message..." onChange={(event) => {handleControlledInputChange(event)}}>
                </textarea>
                <img className="sendMsgBut" src="https://thumbs.dreamstime.com/b/comment-icon-gold-round-button-golden-coin-shiny-frame-luxury-concept-abstract-illustration-isolated-white-background-162449094.jpg" onClick={() => {saveNewMessage()}}/>
            </div>
        </>
      );
};