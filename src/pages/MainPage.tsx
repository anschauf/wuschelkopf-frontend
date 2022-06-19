import React from 'react';
import HeroSection from "../components/sections/HeroSection";
import styled from "styled-components";
import SlideSection from "../components/sections/SlideSection";
import RaritiesSection from "../components/sections/RaritiesSection";
import heroBackground from '../images/hero/background_green_brown_wuschel.png'
import backgroundOrange from '../images/background_orange.png'
import backgroundGreenCentered from '../images/background_green_centered.png'
import TeamSection from "../components/sections/TeamSection";
import FaqSection from "../components/sections/FaqSection";


function MainPage() {

    return (
        <MainPageContainer>
            <BackgroundWrapper img={heroBackground}>
                <HeroSection />
                <SlideSection />

            </BackgroundWrapper>

            <BackgroundWrapper img={backgroundOrange}>
                <RaritiesSection />
            </BackgroundWrapper>
            <BackgroundWrapper img={backgroundGreenCentered}>
                <TeamSection />
                <FaqSection />
            </BackgroundWrapper>
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
  position: relative;
  overflow: hidden;
`

export default MainPage;