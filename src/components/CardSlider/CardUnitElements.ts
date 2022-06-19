import styled from "styled-components";
import {myColors, spacing, fontSizes} from '../../resources/styling-constants'

export interface IColor {
    pickedColor?: string
}

export const Container = styled.div`
  // Center slide text vertically
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`

export const Content = styled.div`

`

export const Card = styled.div<IColor>`
  background: ${({pickedColor = myColors.light_purple}) => pickedColor};
  border-radius: 10%;
  margin:  ${spacing.double} 0;
  width: 320px;
  height: 500px;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

export const ImageWrapper = styled.div`
  height:   250px;
  width:   250px;
  //border-radius: 50%;
  
`

export const CardImage = styled.img<IColor>`
  height:   100%;
  width:   100%;
  object-fit: cover;
  border-radius: 10%;
  background-color: ${({pickedColor = myColors.primary}) => pickedColor};
`

export const HighlightLabel = styled.span<IColor>`
  margin-top: ${spacing.half};
    color: ${({pickedColor = myColors.lime}) => pickedColor};
`

export const CardTitleSpan = styled.span<IColor>`
  color: ${({pickedColor = myColors.primary}) => pickedColor};
  padding: 0;
  margin: 0;
  font-size: ${fontSizes.title_s};
  font-family: 'Permanent Marker', cursive;
`

export const DescriptionSpan = styled.span`
  padding: 0;
  margin: 0;
  text-align: center;
`