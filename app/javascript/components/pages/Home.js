import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "reactstrap"
import { NavLink } from "react-router-dom"


const Home = ({
    sign_in_route,
    new_user_route
}) => {
    return(
        <>
         <body background="https://media.istockphoto.com/id/578556350/photo/brown-paper-background.jpg?s=612x612&w=0&k=20&c=shGY1WoScBLeFqpV-NLmGJVjox9fuja7U6EdtvwQsk0=">
            <div className="motto homepage">think inside the box</div>
            <div className="company-name homepage">PackRat</div>
            <div className="company-info homepage">With Pack Rat, finding your stuff is easy. Create virtual boxes and list their contents. When it's time to find that item you need, just search your virtual boxes to find out where it is in the real world.</div>
                <div className="home-buttons-space">
                    <a href={new_user_route}><Button className="home-buttons">Sign Up</Button></a>
                    <a href={sign_in_route}><Button className="home-buttons">Login</Button></a>
                </div>
            </body>
        </>
    )
}

export default Home