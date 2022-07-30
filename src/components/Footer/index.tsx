import React from 'react';
import {
    FooterContainer,
    FooterContentWrapper,
    FooterLogo,
    FooterLogoLinkWrapper,
    FooterWrap,
    Logo,
    SocialIconWrapper,
    RightsText
} from "./FooterElements"
import {opensea_collection_url, homeRoute, twitter_channel_url, discord_channel_url} from "../../GlobalConstants";
import logo from '../../images/wuschelkopf-logo.png'
import {SocialIconLink} from "../Navbar/NavBarElements";
import {myColors} from "../../resources/styling-constants";
import {BsDiscord} from "react-icons/bs";
import OpenSeaIcon from "../../resources/OpenSeaIcon";
import {AiFillTwitterCircle} from "react-icons/ai";

export interface IFooter {

}

export default function Footer(props: IFooter) {
    const {} = props;

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLogoLinkWrapper>
                    <FooterLogo
                        // activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500}
                        to={homeRoute} children={
                        <Logo src={logo} />
                    }/>
                </FooterLogoLinkWrapper>
                <FooterContentWrapper>
                    <SocialIconWrapper>
                        <SocialIconLink href={discord_channel_url} target="_blank" arial-label="Discord" color={myColors.primary}>
                            <BsDiscord />
                        </SocialIconLink>
                        <SocialIconLink href={opensea_collection_url} target="_blank" arial-label="OpenSea" color={myColors.primary}>
                            <OpenSeaIcon size={36}/>
                        </SocialIconLink>
                        <SocialIconLink href={twitter_channel_url} target="_blank" arial-label="Twitter" color={myColors.primary}>
                            <AiFillTwitterCircle />
                        </SocialIconLink>
                    </SocialIconWrapper>
                    {/*<a>Terms of usage</a>*/}
                </FooterContentWrapper>
                <FooterContentWrapper>
                    <RightsText>
                    Copyright © Wuschelkopf 2022, All Rights Reserved
                    </RightsText>
                </FooterContentWrapper>
            </FooterWrap>
        </FooterContainer>
    )
}
