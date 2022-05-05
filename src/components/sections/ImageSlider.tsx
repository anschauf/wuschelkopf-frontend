import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {myColors} from "../../resources/styling-constants";

// images
import ImageThree from '../../resources/images/slider/test.png'

export interface IImageSlider {

}

export default function ImageSlider(props: IImageSlider) {
    const {} = props;

    // component state    
    const [isLoading, setIsLoading] = useState<boolean>(true)

    // Hook, which gets called only once at component creation.
    useEffect(() => {

    }, [])

    // Hook, which gets called everytime the state of var 'isLoading' changes.
    useEffect(() => {

    }, [isLoading])

    return (
        <ImageSliderContainer>
            <ImageSliderWrapper>
                <Carousel>
                    <CarouselWrapper>
                        <CarouselContentWrapper>
                            <CarouselContent>
                                <ImageThree />
                            </CarouselContent>
                        </CarouselContentWrapper>
                    </CarouselWrapper>
                </Carousel>
                Hello from ImageSlider
            </ImageSliderWrapper>
        </ImageSliderContainer>
    )
}


export const ImageSliderContainer = styled.div`
  position: relative;
  overflow: hidden;
`

const ImageSliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`

const Carousel = styled.div`
    width: 100%;
  display: flex;
  flex-direction: column;
`

const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`

const CarouselContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const CarouselContent = styled.div`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none;  /* hide scrollbar in IE and Edge */
  scrollbar-width: none;  /* hide scrollbar in Firefox */
  > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }
`