import React from 'react';
import styled from "styled-components";
import {SectionTitle, SubTitle} from "../../HeaderElements";

import CardSlider from "../../CardSlider";
// import required modules

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
    hairdecoRarities,
    hairExtensionsRarities,
    hairRarities,
    handItemRarities,
    skinRarities
} from "./rarities-content";

export interface IRaritiesSection {

}

export default function RaritiesSection(props: IRaritiesSection) {



    return (
        <Container>
            <ContainerWrapper>
                <SectionTitle>Rarities</SectionTitle>
                <SubTitle>Skin</SubTitle>
                <CardSlider cardContents={skinRarities}/>
                <SubTitle>Hair</SubTitle>
                <CardSlider cardContents={hairRarities}/>
                <SubTitle>Hand-Item</SubTitle>
                <CardSlider cardContents={handItemRarities}/>
                <SubTitle>Hair-Extension</SubTitle>
                <CardSlider cardContents={hairExtensionsRarities}/>
                {/*<SubTitle>Hair-Deco</SubTitle>*/}
                {/*<CardSlider cardContents={hairdecoRarities}/>*/}
            </ContainerWrapper>
        </Container>
    )
}


const Container = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 3200px;

  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const ContainerWrapper = styled.div`
  width: 100%;
  //height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`