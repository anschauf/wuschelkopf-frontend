import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {myColors, pageSizes, spacing} from "../resources/styling-constants";
import {teamRoute} from "../GlobalConstants";
import {SectionTitle} from "./HeaderElements";

import IMG_NFT_CALENDAR from "../images/collab/nft-calendar-transparent.png"
import IMG_NFT_DROPLIST from "../images/collab/nft_droplist.png"

interface IMediaEntry {
    image: string,
    label: string,
    link: string
}

function MediEntry(props: IMediaEntry) {
    const {image, label, link } = props;

    return (
        <LinkWrapper href={link}>
            <MediaContainer>
                <MediaImage src={image}/>
                <MediaLabel>{label}</MediaLabel>
            </MediaContainer>
        </LinkWrapper>
    )
}

export interface ICollabBanners {

}

export default function CollabBanners(props: ICollabBanners) {

    return (
        <Container>
            <SectionTitle>As seen on</SectionTitle>
            <EntryWrapper>
                <MediEntry image={IMG_NFT_CALENDAR} label={'NFTCalendar.io'} link={'https://nftcalendar.io/'}/>
                <MediEntry image={IMG_NFT_DROPLIST} label={'NFTDroplist.co.uk'} link={'https://www.nftdroplist.co.uk/'}/>
            </EntryWrapper>
        </Container>
    )
}


const Container = styled.div`
  margin-top: ${spacing.quatriple};
  width: 100%;
  justify-content: center;
  text-align: center;
`

const EntryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  background-color: ${myColors.background_orange};
  box-shadow: 2px 10px 35px 1px rgba(31, 31, 31, 0.3);
  border-radius: 20px;
  
  padding: ${spacing.double};
  margin-left: auto;
  margin-right: auto;
  
  
  max-width: ${pageSizes.lg};
  @media screen and (max-width: ${pageSizes.lg}) {
    margin: ${spacing.double};
  }

  @media screen and (max-width: ${pageSizes.sm}) {
    flex-direction: column;
    justify-content: center;
  }
`

const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const LinkWrapper = styled.a`
  text-decoration: none;
  &:active {
    color: ${myColors.secondary};
  }
`

const MediaImage = styled.img`
  width: 200px;
;`

const MediaLabel = styled.span`
`