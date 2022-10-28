import React from "react";
import { Container,Nav, Logo, Hamburger, MenuLink, Menu } from "./NavbarStyled";

const Navbar = () => {
    return(

        <Nav>
            <Logo href="" ><span>logikcode</span></Logo>
            <Hamburger>
                <span></span>
                <span></span>
                <span></span>
            </Hamburger>
            <Menu>
                <MenuLink>Our Work</MenuLink>
                <MenuLink>Career</MenuLink>
                <MenuLink>About</MenuLink>
                <MenuLink>Contact</MenuLink>
                
            </Menu>


        </Nav>
    );
}
export default Navbar;
