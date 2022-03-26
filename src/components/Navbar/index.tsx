import React, {useState, useEffect} from 'react';
import {FaBars, FaUser} from 'react-icons/fa';
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from "./NavBarElements";

export interface INavBar {
    toggleIsOpen: () => void
}

export default function NavBar(props: INavBar) {
    const { toggleIsOpen } = props
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to={"/"} children={"Taverna"} />
                    <MobileIcon onClick={toggleIsOpen}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to={"/Test"}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={"goals"}>Goals</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={"rarity"}>FAQ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={"team"}>Team</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={"faq"}>FAQ</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    )
}