import React from 'react';
import {
    ButtonImgIcon,
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarLink,
    SidebarMenu,
    SidebarWrapper,
    SideSocialWrap,
    SocialIconLink,
    SocialIcons
} from "./SidebarElements";
import {faqRoute, roadmapRoute, homeRoute, rarityRoute, teamRoute} from "../../GlobalConstants";
import {myColors} from "../../resources/styling-constants";
import {BsDiscord} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";
import OpenSeaIcon from "../../resources/OpenSeaIcon";


export interface ISidebar {
    isOpen: boolean,
    toggleIsOpen: () => void
}

export default function Sidebar(props: ISidebar) {
    const { isOpen, toggleIsOpen} = props;

    const sidebarClickHandler = () => {
        if(isOpen) toggleIsOpen()
    }

    return (
        <SidebarContainer isOpen={isOpen} onClick={sidebarClickHandler}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to={homeRoute} onClick={toggleIsOpen}>
                        Home
                    </SidebarLink>
                    <SidebarLink to={roadmapRoute} onClick={toggleIsOpen}>
                        Goals
                    </SidebarLink>
                    <SidebarLink to={rarityRoute} onClick={toggleIsOpen}>
                        Rarity
                    </SidebarLink>
                    <SidebarLink to={teamRoute} onClick={toggleIsOpen}>
                        Team
                    </SidebarLink>
                    <SidebarLink to={faqRoute} onClick={toggleIsOpen}>
                        FAQ
                    </SidebarLink>
                </SidebarMenu>
                <SideSocialWrap>
                    <SocialIcons>
                    <SocialIconLink href="/" target="_blank" arial-label="Discord" color={myColors.discord_blue}>
                        <BsDiscord />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" arial-label="OpenSea" color={myColors.openSea_blue}>
                        <OpenSeaIcon size={43} />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" arial-label="Twitter" color={myColors.twitter_blue}>
                        <AiFillTwitterCircle />
                    </SocialIconLink>
                    </SocialIcons>
                </SideSocialWrap>
                {/*<SideBtnWrap>*/}
                {/*    <SidebarRoute to={accountRouteName} onClick={toggleIsOpen}>*/}
                {/*        Sign In*/}
                {/*    </SidebarRoute>*/}
                {/*</SideBtnWrap>*/}
            </SidebarWrapper>
        </SidebarContainer>
    )
}