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
import {pageSizes} from "../resources/styling-constants";
import TextSection from "../components/sections/TextSection";


function MainPage() {

    return (
        <MainPageContainer>
            <BackgroundWrapper img={heroBackground}>
                <HeroSection />
                <TextSection
                    label={'Unleash the mob!'}
                    title={'Wuschelkopf'}
                    texts={[
                        'The Wuschelkopf (WK) is a collection of 10,00 unique NFTs minted on the Ethereum network.',
                        'Wuschelkopf is German and means literally ‘mob head’.',
                        'Since centuries they were hidden from us and only in some old, long forgotten tales the Wuschelkopfs are mentioned. Diverse as they are, they all share something in common: The not-even trying - but always awesome looking - mob-hair style.',
                        '.\n',
                        '    \n',
                        'As their ancient hide-out has vanished, they are now free to be found. Be quick and get your own Wuschelkopf'
                        ]}
                />
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
  background-position: center -40px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: ${pageSizes.xl}) {
    background-position: center;
  }
`

export default MainPage;