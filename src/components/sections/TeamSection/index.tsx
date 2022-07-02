import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import styled from "styled-components";
import TeamMemberCard from "../../TeamMemberCard";
import {pageSizes, spacing} from "../../../resources/styling-constants";

import IMG_SIR_BONGO from '../../../images/team/sirbongo.png'
import IMG_CHI_J from '../../../images/team/chij.png'
import IMG_ANSCHAU from '../../../images/team/anschau.png'

import {SectionTitle} from "../../HeaderElements";
import {Navigation, Pagination} from "swiper";
import {teamRoute} from "../../../GlobalConstants";

export interface ITeamSection {

}

const members =
    [
        <TeamMemberCard
            img={IMG_SIR_BONGO}
            role={"Zenmaster"}
            name={"Sir Bongo"}
            description={"Creative creator of Wuschelkopfs. Mastermind of the concept and the art design"}
            color={'orange'}
            key={'SirBongo'}
        />,
        <TeamMemberCard
            img={IMG_CHI_J}
            role={"Gurudevi"}
            name={"Chi-J"}
            description={"Webdesign and Socia media star."}
            color={'purple'}
            key={'Two'}
        />,
        <TeamMemberCard
            img={IMG_ANSCHAU}
            role={"Sensei"}
            name={"An-Shaw"}
            description={"Automatic generation and Smart contract"}
            color={'orange'}
            key={'Three'}
        />,
    ]
export default function TeamSection(props: ITeamSection) {
    const {} = props;

    return (
        <Container>
            <SectionTitle className={teamRoute}>Team</SectionTitle>
            <ScreenRow>
                {members[0]}
                {members[1]}
                {members[2]}
            </ScreenRow>
            <ScreenRow>
                {members[3]}
                {members[4]}
            </ScreenRow>
            <SwiperWrapper>
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
                    className="myTeamSwiper"
                >
                    {
                        members.map(m => {return (
                          <SwiperSlide key={m.key}>
                              {m}
                          </SwiperSlide>
                        )
                        })
                    }

                </Swiper>
            </SwiperWrapper>
        </Container>

    )
}

const Container = styled.div`
  @media screen and (max-width: ${pageSizes.md}) {
    height: 900px;
  }
  height: 1200px;
  background-position: initial;
  background-repeat: no-repeat;
  background-size: auto;

  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ScreenRow = styled.div`
  @media screen and (max-width: ${pageSizes.md}) {
    display: none;
  }
  display: flex;
  width: 100%;
  align-items: normal;
  justify-content: space-evenly;
  margin-top: ${spacing.double};
  margin-bottom: ${spacing.double};
`

const SwiperWrapper = styled.div`
  display: none;
  width: 100%;
  @media screen and (max-width: ${pageSizes.md}) {
    display: flex;
  }
  //display: none;
`