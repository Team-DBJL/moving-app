import React from "react"
import { Navbar, Nav, NavItem, NavLink } from "reactstrap"

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
                    <NavLink href="/">
                        Home
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/about">
                        About 
                    </NavLink>
                </NavItem>

                {!logged_in && (
                <NavItem>
                    <NavLink href={new_user_route}>
                        Sign Up 
                    </NavLink>
                </NavItem>
                 )}

                {!logged_in && (
                <NavItem>
                    <NavLink href={sign_in_route}>
                        Login 
                    </NavLink>
                </NavItem>
                )}
               
                {logged_in && (
                <NavItem>
                    <NavLink href={sign_out_route}>
                        LogOut 
                    </NavLink>
                </NavItem>
                )}

            </Nav>
        </Navbar>
    </div>
   ) 
}

export default Header;