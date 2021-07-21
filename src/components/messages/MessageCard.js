import React, { useContext, useEffect, useState } from "react";
import { MessageContext } from "./MessageProvider";
import "./Message.css";
import { useHistory} from "react-router-dom";
import { Link } from "react-router-dom";





export const MessageCard = ({ message }) => {

    const { deleteMessage, updateMessage, getMessages } = useContext(MessageContext)
    
    const [uneditedMessage, setUneditedMessage] = useState({
        messageState: false
    })

    const history = useHistory();


    useEffect(() => {
        getMessages();
    }, []);





    const handleDelete = () => {
      deleteMessage(message.id)
      .then(() => {
        history.push("/messages")
      })
      alert("Message has been deleted!")

    };

    

   const handleEdit = () => {
       setUneditedMessage(true)
   }



   const [updatedMessage, setUpdatedMessage] = useState({
       id: message.id,
       userId: parseInt(sessionStorage.getItem("nutshell_user")),
       body: "",
       isPublic: true
   });




   const handleControlledInputChange = (event) => {
       // When changing a state object or array, always create a copy, make changes and then set state.
       const newMessage = {...updatedMessage}
       // Message is an object with properties. Set the property to the new value using object bracket notation.
       newMessage[event.target.id] = event.target.value
       // Update state
       setUpdatedMessage(newMessage);
   };

   const saveEditMessage = () => {
       console.log("Updated Message", updatedMessage)
       updateMessage(updatedMessage);
       setUneditedMessage(false);
       alert("Message has been edited!")
   }
   

   let messageInput;
   if (uneditedMessage === true) {
       messageInput = 
       <div className="update__message">
           <textarea id="body" className="message__body" defaultValue={message.body} onChange={(event) => {handleControlledInputChange(event)}}>
           </textarea>
           <button className="update__button" onClick={() => {saveEditMessage()}}>Save</button>
       </div>
   } else {
       messageInput = <p className="message__body">{message.body}</p>
    };
   
   


    
    
    return (

        <div className="msg__wrapper">
            <section className="message">
                <div className="msg__buttons">
                    <button className="edit__msg" onClick={() => {handleEdit()}}>Edit</button>
                    <button className="delete__msg" onClick={() => {handleDelete()}}>Delete</button>
                </div>
                <div className="message__div">
                    {/* <Link to={"/friends/create"}> { message.user.name }</Link> */}
                    <Link to={"/friends/create"}> { message.user.name }</Link>
                </div>
                {messageInput}
            </section>
        </div>
    )
};
