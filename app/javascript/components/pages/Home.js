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
            <h1>
                Home
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href={new_user_route}><Button>Sign Up</Button></a>
            <a href={sign_in_route}><Button>Login</Button></a>
        </>
    )
}

export default Home