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
import {myColors, pageSizes} from "../../../resources/styling-constants";
import {rarityRoute} from "../../../GlobalConstants";
import TextSection from "../TextSection";

export interface IRaritiesSection {

}

export default function RaritiesSection(props: IRaritiesSection) {



    return (
        <Container>
            <ContainerWrapper>
                <SectionTitle className={rarityRoute}>Rarities</SectionTitle>
                <TextSection
                    labelColor={myColors.primary}
                    label={'Mach dich rar, sei ein Star!'}
                    title={'Checkout the different rarities'}
                    // TODO include text
                    texts={[
                        'Find your cuddly avatar amoung all possible Wuschelkopfs. Each one is unique!'
                    ]}
                />
                <RowWrapper>
                    <CardSlider widthMode={'half'} title={'Skin'} cardContents={skinRarities}/>
                    <CardSlider widthMode={'half'} title={'Hair'} cardContents={hairRarities}/>
                </RowWrapper>
                <RowWrapper>
                    <CardSlider widthMode={'half'} title={'Hand-Item'} cardContents={handItemRarities}/>
                    <CardSlider widthMode={'half'} title={'Hair-Style'} cardContents={hairExtensionsRarities}/>
                </RowWrapper>
                <ColumnWrapper>
                    <CardSlider title={'Skin'} cardContents={skinRarities}/>
                    <CardSlider title={'Hair'} cardContents={hairRarities}/>
                    <CardSlider title={'Hand-Item'} cardContents={handItemRarities}/>
                    <CardSlider title={'Hair-Style'} cardContents={hairExtensionsRarities}/>
                </ColumnWrapper>
            </ContainerWrapper>
        </Container>
    )
}


const Container = styled.div`
  @media screen and (max-width: ${pageSizes.md}) {
    height: 3200px;
  }
  height: 1900px;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;


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

export const RowWrapper = styled.div`

  @media screen and (max-width: ${pageSizes.md}) {
    display: none;
  }
  display: flex;
  width: 100%;
  flex-direction: row;

`

export const ColumnWrapper = styled.div`
  @media screen and (max-width: ${pageSizes.md}) {
    display: flex;
  }
  display: none;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
