import React from 'react';
import Hero from "../components/sections/Hero";
import styled from "styled-components";
import SlideSection from "../components/sections/SlideSection";


function MainPage() {

    return (
        <MainPageContainer>
            <Hero />
            <SlideSection />

        </MainPageContainer>
    );
}

export const MainPageContainer = styled.div`
  //display: flex;
  //justify-content: center;
  //align-items: stretch;
  //align-content: center;
  //margin: 20px;
`

export default MainPage;