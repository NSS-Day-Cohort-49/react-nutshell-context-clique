import React from "react"
import { Link } from "react-router-dom"

export const FriendCard = ({ friend, article }) => (

    <section className="friend">
        <h3 className="friend__name" >
            <Link to={`/friends/detail/${friend.user?.id}`}>
                {friend.user.name}
            </Link>
        </h3>
    </section>
)