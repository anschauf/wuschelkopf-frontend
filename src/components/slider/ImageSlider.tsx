import React from 'react';

import styled from "styled-components";
import {IImageInfo} from "./slide-image-sources";


export interface IImageSlider {
    imageInfos: IImageInfo[],
    imageSize?: number
    rightDirection?: boolean
    hasBorderShadow?: boolean,
    speed?: number,
    betweenPadding?: number
}

/**
 * Infinite Aoutplay Slider,
 * Created based on the following Tutorial:
 * https://www.youtube.com/watch?v=3Z780EOzIQs
 * @param props
 * @constructor
 */
export default function ImageSlider(props: IImageSlider) {
    const {imageInfos, imageSize = 400, rightDirection = false, hasBorderShadow = false, speed = 100, betweenPadding = 15} = props;



    // The images must be dublicate in order to work
    const doubledImageInfos = imageInfos.concat(imageInfos)

    const imgCount: number = doubledImageInfos.length

    return (
        <Slider imgSize={imageSize} hasBorderShadow={hasBorderShadow} rightDirection={rightDirection}>
            <SlideTrack imgSize={imageSize} imgCount={imgCount} speed={speed} rightDirection={rightDirection}>
                {
                    doubledImageInfos.map((dImgInfo, index) => {
                        return (
                            <Slide imgSize={imageSize} padding={betweenPadding} key={`${dImgInfo.alt}-${index}`}>
                                <SlideImage src={dImgInfo.image} alt={dImgInfo.alt} />
                            </Slide>
                        )
                    })
                }
            </SlideTrack>
        </Slider>
    )
}


const smallImgSize = 250

export interface ISlider {
    imgSize: number,
    hasBorderShadow: boolean,
    rightDirection: boolean
}
export const Slider = styled.div<ISlider>`
  height: ${({ imgSize }) => `${imgSize}px`};
  margin: auto;
  position: relative;
  width: 100%;
  display: grid;
  direction: ${({ rightDirection }) => rightDirection ? 'ltr' : 'rtl'};
  place-items: center;
  overflow: hidden;

  @media screen and (max-width: 992px) {
    height: ${smallImgSize}px;
  }
  
  &:before,&:after {
    background: 
            ${({ hasBorderShadow}) => hasBorderShadow ? 
                'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)' 
                : ''
            };
    content: '';
    height: 100%;
    position: absolute;
    width: 15%;
    z-index: 2;
  }
  
  &:before{
    left: 0;
    top: 0
  }
  
  &:after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }
`



export interface ISlideTrack {
    imgSize: number,
    imgCount: number,
    speed: number,
    rightDirection: boolean
}
const SlideTrack = styled.div<ISlideTrack>`
  @keyframes scroll-right {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: ${({ imgSize, imgCount }) =>
              `translateX(calc(-${imgSize}px * ${imgCount/2}))`};
    }
  }
  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: ${({ imgSize, imgCount }) =>
              `translateX(calc(${imgSize}px * ${imgCount/2}))`};
    }
  }

  @keyframes scroll-right-small {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: ${({ imgCount }) =>
              `translateX(calc(-${smallImgSize}px * ${imgCount/2}))`};
    }
  }

  @keyframes scroll-left-small {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: ${({ imgCount }) =>
              `translateX(calc(${smallImgSize}px * ${imgCount/2}))`};
    }
  }
  
  
  
  display: flex;
  width: ${({ imgSize, imgCount }) => `calc(${imgSize}px * ${imgCount})`};
  animation: ${({ speed, rightDirection }) => `scroll-${rightDirection ? 'right' : 'left'} ${speed}s linear infinite`};

  @media screen and (max-width: 992px) {
    width: ${({ imgCount }) => `calc(${smallImgSize}px * ${imgCount})`};
    animation: ${({ speed, rightDirection }) => `scroll-${rightDirection ? 'right' : 'left'}-small ${speed*3/4}s linear infinite`};
  }

`

export interface ISlide {
    imgSize: number;
    padding?: number;
}
const Slide = styled.div<ISlide>`
  height: ${({imgSize }) => `${imgSize}px`};
  width: ${({imgSize, padding = 15 }) => `calc(${imgSize}px + 2*${padding})`};
  display: flex;
  align-items: center;
  padding: ${({padding = 15 }) => `${padding}px`};

  @media screen and (max-width: 992px) {
    height: ${smallImgSize}px;
    width: ${({padding = 15 }) => `calc(${smallImgSize}px + 2*${padding/2})`};
  }
`

const SlideImage = styled.img`
  border-radius: 20px;
  width: 100%;
`