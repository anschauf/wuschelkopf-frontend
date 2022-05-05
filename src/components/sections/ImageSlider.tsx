import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {myColors} from "../../resources/styling-constants";

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
            Hello from ImageSlider
        </ImageSliderContainer>
    )
}


export const ImageSliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`