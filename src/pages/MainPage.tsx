import React from 'react';
import Hero from "../components/sections/Hero";
import styled from "styled-components";
import ImageSlider from "../components/sections/ImageSlider";

function MainPage() {

    return (
        <MainPageContainer>
            <Hero />
            <ImageSlider />
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