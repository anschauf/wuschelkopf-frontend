import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../HeaderElements";

import CardSlider from "../../CardSlider";
// import required modules

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {skinRarities} from "./roadmap-content";

export interface IGoalsSection {

}

export default function Index(props: IGoalsSection) {



    return (
        <Container>
            <ContainerWrapper>
                <SectionTitle>Rarities</SectionTitle>
                <CardSlider cardContents={skinRarities}/>
            </ContainerWrapper>
        </Container>
    )
}


const Container = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 1600px;

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