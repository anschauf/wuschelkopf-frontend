import React from 'react';
import {FaBars} from 'react-icons/fa';
import {BsDiscord} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {
    MobileIcon,
    Nav,
    NavBarContainer,
    NavLogoLinkWrapper,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu,
    SocialIconLink,
    SocialIcons,
    Logo,

} from "./NavBarElements";
import {faqRoute, roadmapRoute, homeRoute, rarityRoute, teamRoute} from "../../GlobalConstants";
import {myColors} from '../../resources/styling-constants'
import OpenSeaIcon from "../../resources/OpenSeaIcon";
import logo from '../../images/wuschelkopf-logo.png'

export interface INavBar {
    toggleIsOpen: () => void
}

export default function NavBar(props: INavBar) {


    const { toggleIsOpen } = props
    return (
        <>
            <Nav>
                <NavBarContainer>

                    <NavLogoLinkWrapper>
                        <NavLogo to={"/"} children={
                            <Logo src={logo} />}
                        />
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
                    </NavLogoLinkWrapper>

                    <MobileIcon onClick={toggleIsOpen}>
                        <FaBars />
                    </MobileIcon>


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