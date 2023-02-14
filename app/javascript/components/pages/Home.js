import React from "react"
import { useNavigate } from "react-router-dom"
import { Button, NavLink } from "reactstrap"

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
            <NavLink href={new_user_route}><Button>Sign Up</Button></NavLink>
            <NavLink href={sign_in_route}><Button>Login</Button></NavLink>
        </>
    )
}

export default Home