import React from "react"
import { Navbar, Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Header = ({
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route,
}) => {
   return (
    <div>
        <Navbar>
            <Nav>
                <NavItem>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/about">
                        About 
                    </NavLink>
                </NavItem>

                {!logged_in && (
                <NavItem>
                    <a href={new_user_route}>
                        Sign Up 
                    </a>
                </NavItem>
                 )}

                {!logged_in && (
                <NavItem>
                    <a href={sign_in_route}>
                        Login 
                    </a>
                </NavItem>
                )}
               
                {logged_in && (
                <NavItem>
                    <a href={sign_out_route}>
                        Log Out 
                    </a>
                </NavItem>
                )}

            </Nav>
        </Navbar>
    </div>
   ) 
}

export default Header;