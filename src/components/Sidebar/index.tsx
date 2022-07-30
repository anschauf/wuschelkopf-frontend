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
import {
    faqRoute,
    roadmapRoute,
    homeRoute,
    rarityRoute,
    teamRoute,
    opensea_collection_url,
    discord_channel_url, twitter_channel_url
} from "../../GlobalConstants";
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
                    <SocialIconLink href={discord_channel_url} target="_blank" arial-label="Discord" color={myColors.light_lime} hoverColor={myColors.discord_blue}>
                        <BsDiscord />
                    </SocialIconLink>
                    <SocialIconLink href={opensea_collection_url} target="_blank" arial-label="OpenSea" color={myColors.openSea_blue} hoverColor={myColors.light_lime}>
                        <OpenSeaIcon size={43}/>
                    </SocialIconLink>
                    {/*<SocialIconLink href="/" target="_blank" arial-label="OpenSea" color={myColors.light_lime} hoverColor={myColors.openSea_blue}>*/}
                    {/*    <OpenSeaIcon size={43} />*/}
                    {/*</SocialIconLink>*/}
                    <SocialIconLink href={twitter_channel_url} target="_blank" arial-label="Twitter" color={myColors.light_lime} hoverColor={myColors.twitter_blue}>
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