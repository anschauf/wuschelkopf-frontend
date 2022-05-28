import React from 'react';
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './styles.css';
import styled from "styled-components";
import CardUnit, {ICardUnit} from "./CardUnit";

export interface ICardSlider {
    cardContents: ICardUnit[]
}

export default function CardSlider(props: ICardSlider) {
    const {cardContents} = props;

    return (
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1800: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    cardContents.map( c => {return (
                            <SwiperSlide>
                                <CardUnit {...c} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
    )
}