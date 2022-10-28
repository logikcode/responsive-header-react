import React, {useState}from "react";
import { Container,Nav, Logo, Hamburger, MenuLink, Menu } from "./NavbarStyled";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    return(

        <Nav>
            <Logo href="" ><span>logikcode</span></Logo>
            <Hamburger onClick={()=>{setIsOpen(!isOpen)}}>
            
                <span></span>
                <span></span>
                <span></span>
            </Hamburger>
            <Menu open={isOpen}>
                <MenuLink>Our Work</MenuLink>
                <MenuLink>Career</MenuLink>
                <MenuLink>About</MenuLink>
                <MenuLink>Contact</MenuLink>
                
            </Menu>


        </Nav>
    );
}
export default Navbar;
