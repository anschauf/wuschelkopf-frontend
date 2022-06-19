import React from 'react';
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {SmallTitle, SubTitle} from "../HeaderElements";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './styles.css';
import styled from "styled-components";
import CardUnit, {ICardUnit} from "./CardUnit";
import {spacing} from "../../resources/styling-constants";

export interface ICardSlider {
    title: string
    cardContents: ICardUnit[]
    widthMode?: 'full' | 'half'
}


export default function CardSlider(props: ICardSlider) {
    const {title, cardContents, widthMode = 'full' } = props;

    const twoSlideBreak = widthMode == 'full' ? 786 : 1500;
    const threeSlideBreak = widthMode == 'full' ? 1200 : 2400;
    const fourSlideBreak = widthMode == 'full' ? 1800 : 3600;

    const containerWidth = widthMode == 'full' ? '94%' : '47%'
    return (
        <Container pickedWidth={containerWidth}>
            <SmallTitle>{title}</SmallTitle>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    breakpoints={{
                        [`${twoSlideBreak}`]: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        [`${threeSlideBreak}`]: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        [`${fourSlideBreak}`]: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        }
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        cardContents.map( c => {return (
                                <SwiperSlide key={c.title}>
                                    <CardUnit {...c} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
        </Container>
    )
}

interface IWidth {
    pickedWidth?: string
}


const Container = styled.div<IWidth>`
  width: ${({pickedWidth = '100%'}) => pickedWidth};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${spacing.default};
`
