import React, {useState, useEffect} from 'react';
import {FaBars, FaUser} from 'react-icons/fa';
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from "./NavBarElements";

export interface INavBar {
    // toggleIsOpen: () => void
}

export default function NavBar(props: INavBar) {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to={"/"} children={"House of Heraldry"} />
{/*                    <MobileIcon onClick={toggleIsOpen}>
                        <FaBars />
                    </MobileIcon>*/}
                    <NavMenu>
                        <NavItem>
                            <NavLinks to={"/Test"}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={"/taverne"}>Taverne</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={"/faq"}>FAQ</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    )
}