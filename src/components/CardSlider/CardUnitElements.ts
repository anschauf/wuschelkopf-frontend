import styled from "styled-components";
import {myColors, spacing, fontSizes} from '../../resources/styling-constants'


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

export const Card = styled.div`
  background: ${myColors.light_purple};
  border-radius: 10%;
  margin:  ${spacing.double} 0;
  width: 360px;
  height: 520px;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

export const ImageWrapper = styled.div`
  height:   280px;
  width:   280px;
  border-radius: 50%;
  
`

export const CardImage = styled.img`
  height:   100%;
  width:   100%;
  object-fit: cover;
  border-radius: 50%;
`

export const HighlightLabel = styled.span`
    color: ${myColors.danger};
`

export const CardTitleSpan = styled.span`
  color: ${myColors.primary};
  padding: 0;
  margin: 0;
  font-size: ${fontSizes.title_xs};
`

export const DescriptionSpan = styled.span`
  padding: 0;
  margin: 0;
  text-align: center;
  //color: ${myColors.very_light_grey};
`