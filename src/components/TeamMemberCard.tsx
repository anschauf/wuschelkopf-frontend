import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {IColor} from "./CardSlider/CardUnitElements";
import {myColors, spacing} from "../resources/styling-constants";

export interface ITeamMemberCard {
    img: any
    role: string,
    name: string,
    description: string,
    color: 'green'|'orange'|'purple'
}

function getRoleColor(version: string) {
    switch (version) {
        case 'orange':
            return myColors.secondary;
        case 'green':
            return myColors.lime;
        default:
            return myColors.primary;
    }
}

function getDescriptionColor(version: string) {
    switch (version) {
        case 'orange':
            return myColors.light_orange;
        case 'green':
            return myColors.light_lime;
        default:
            return myColors.light_purple;
    }
}


export default function TeamMemberCard(props: ITeamMemberCard) {
    const {img, role, name, description, color} = props;


    return (
        <SliderContainer>
            <CardWrapper>
                <CardImage src={img} />
                <RoleTitle pickedColor={getRoleColor(color)}>{role}</RoleTitle>
                <NameTitle>{name}</NameTitle>
                <DescriptionSection pickedColor={getDescriptionColor(color)}>{description}</DescriptionSection>
            </CardWrapper>
        </SliderContainer>
    )
}

const CardImage = styled.img`
  height: 250px;
  border-radius: 30px;
`

const RoleTitle = styled.h3<IColor>`
    color: ${({pickedColor = myColors.primary}) => pickedColor};
`
const NameTitle = styled.h1`
`
const DescriptionSection = styled.span<IColor>`
  color: ${({pickedColor = myColors.primary}) => pickedColor};
  text-align: center;
`


// Slider test
const SliderContainer = styled.div`
  // Center slide text vertically
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  flex-direction: column;
  margin-left: ${spacing.double};
  margin-right: ${spacing.double};
  height: 500px;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
`