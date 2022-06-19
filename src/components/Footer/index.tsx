import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {FooterContainer, FooterLogoLinkWrapper, FooterWrap, FooterLogo, FooterContentWrapper} from "./FooterElements"
import {homeRoute} from "../../GlobalConstants";
import logo from '../../images/wuschelkopf-logo.png'
import {Logo} from "./FooterElements";

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
                    Terms of usage
                </FooterContentWrapper>
                <FooterContentWrapper>
                    Copyright © Wuschelkopf 2022, All Rights Reserved
                </FooterContentWrapper>
            </FooterWrap>
        </FooterContainer>
    )
}
