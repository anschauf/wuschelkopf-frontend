import React from 'react';
import HeroSection from "../components/sections/HeroSection";
import styled from "styled-components";
import SlideSection from "../components/sections/SlideSection";
import RoadmapSection from "../components/sections/RoadmapSection";
import wuschelBackground from '../images/hero/background_green_brown_wuschel.png'
import wuschelBackgroundTest from '../images/hero/background_green_brown_wuschel_test.png'


function MainPage() {

    return (
        <MainPageContainer>
            <BackgroundWrapper img={wuschelBackground}>
                <HeroSection />
                <SlideSection />
            </BackgroundWrapper>
            <RoadmapSection />

        </MainPageContainer>
    );
}

export const MainPageContainer = styled.div`
  //display: flex;
  justify-content: center;
  //align-items: stretch;
  align-content: center;
  //margin: 20px;
`

interface IBackgroundWrapper {
    img: any
}

export const BackgroundWrapper = styled.div<IBackgroundWrapper>`
  background-image:  url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  //height: 100vh;
  max-height: 1900px;
  position: relative;
  overflow: hidden;
`

export default MainPage;