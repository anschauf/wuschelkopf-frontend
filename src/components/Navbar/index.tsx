import React from 'react';
import {FaBars} from 'react-icons/fa';
import {BsDiscord} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {
    MobileIcon,
    Nav,
    NavBarContainer,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu,
    SocialIconLink,
    SocialIcons
} from "./NavBarElements";
import {faqRoute, roadmapRoute, homeRoute, rarityRoute, teamRoute} from "../../GlobalConstants";
import {myColors} from '../../resources/styling-constants'
import OpenSeaIcon from "../../resources/OpenSeaIcon";

export interface INavBar {
    toggleIsOpen: () => void
}

export default function NavBar(props: INavBar) {


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
                            <NavLinks to={roadmapRoute}>Roadmap</NavLinks>
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
                        <SocialIconLink href="/" target="_blank" arial-label="Discord" color={myColors.light_brown}>
                            <BsDiscord />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" arial-label="OpenSea" color={myColors.light_brown}>
                            <OpenSeaIcon size={36}/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" arial-label="Twitter" color={myColors.light_brown}>
                                <AiFillTwitterCircle />
                        </SocialIconLink>
                    </SocialIcons>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    )
}