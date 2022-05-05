import React from 'react';
import {FaBars} from 'react-icons/fa';
import {BsDiscord} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {MobileIcon, Nav, NavBarContainer, NavItem, NavLinks, NavLogo, NavMenu, SocialIcons, SocialIconLink, ButtonImgIcon} from "./NavBarElements";
import {faqRoute, goalsRoute, homeRoute, rarityRoute, teamRoute} from "../../GlobalConstants";
import {myColors} from '../../resources/styling-constants'

export interface INavBar {
    toggleIsOpen: () => void
}

export default function NavBar(props: INavBar) {

    let circleClasses = "inline-block p-7 rounded-full w-20 mx-auto";

    const { toggleIsOpen } = props
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to={"/"} children={"Wuschelkopf"} />
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
                    <NavMenu>


                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" arial-label="Discord" color={myColors.discord_blue}>
                            <BsDiscord />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" arial-label="OpenSea">
                            <ButtonImgIcon src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.svg" />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" arial-label="Twitter" color={myColors.twitter_blue}>
                                <AiFillTwitterCircle />
                        </SocialIconLink>
                    </SocialIcons>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    )
}