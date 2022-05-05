import React from 'react';
import {FaBars} from 'react-icons/fa';
import {MobileIcon, Nav, NavBarContainer, NavItem, NavLinks, NavLogo, NavMenu} from "./NavBarElements";
import {faqRoute, goalsRoute, homeRoute, rarityRoute, teamRoute} from "../../GlobalConstants";

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
                            <NavLinks to={homeRoute}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={goalsRoute}>Goals</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={rarityRoute}>Rarity</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={teamRoute}>Team</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={faqRoute}>FAQ</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    )
}