import React from 'react';
import HeroSection from "../components/sections/HeroSection";
import styled from "styled-components";
import SlideSection from "../components/sections/SlideSection";
import RoadmapSection from "../components/sections/RoadmapSection";


function MainPage() {

    return (
        <MainPageContainer>
            <HeroSection />
            <SlideSection />
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

export default MainPage;