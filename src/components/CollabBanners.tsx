import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {myColors, pageSizes, spacing} from "../resources/styling-constants";
import {teamRoute} from "../GlobalConstants";
import {SectionTitle} from "./HeaderElements";

export interface ICollabBanners {

}

export default function CollabBanners(props: ICollabBanners) {

    return (
        <Container>
            <SectionTitle>As seen on</SectionTitle>
            <EntryWrapper>
                Hello
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
  margin-left: auto;
  margin-right: auto;
  border-radius: 10%;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: ${pageSizes.lg};
  @media screen and (max-width: ${pageSizes.lg}) {
    margin: ${spacing.double};
  }
`