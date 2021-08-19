import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import "./Friend.css" 
import { useContext } from "react"
import { MessageContext } from "../messages/MessageProvider"

export const FriendCard = ({ friend, message }) => {
    
    // const { messages, getMessages } = useContext(MessageContext)
    
    // const MSG = messages.filter(message => message.userId === friend.userId)
    // console.log(MSG)
    


    return (
        
    <section className="friend">
        <h3 className="friend__name" >
            <Link to={`/friends/detail/${friend.id}`}>
                Name: {friend.user.name}
            </Link>



        </h3>
        <h4>All Messages:{message}</h4>
    </section>
    )
}