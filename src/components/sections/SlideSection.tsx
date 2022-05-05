import React from 'react';
import styled from "styled-components";
import ImageSlider from "../slider/ImageSlider";
import {imageSources_one, imageSources_three, imageSources_two} from "../slider/slide-image-sources";


export interface IImageSlider {

}

export default function SlideSection(props: IImageSlider) {

    const imageSize = 340

    return (
        <Container>
            <ContainerWrapper>
                <ImageSlider
                    imageInfos={imageSources_one}
                    imageSize={imageSize}
                    hasBorderShadow={false}
                    rightDirection={false}
                />
                <ImageSlider
                    imageInfos={imageSources_two}
                    imageSize={imageSize}
                    hasBorderShadow={false}
                    rightDirection={true}
                />
                <ImageSlider
                    imageInfos={imageSources_three}
                    imageSize={imageSize}
                    hasBorderShadow={false}
                    rightDirection={false}
                />
            </ContainerWrapper>
        </Container>
    )
}


const Container = styled.div`
  position: relative;
  overflow: hidden;
`

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  justify-content: center;
  align-items: center;
  position: relative;
`