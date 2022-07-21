import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {fontSizes, myColors, pageSizes, spacing} from "../../resources/styling-constants";

export interface ITextSection {
    label: string,
    labelColor?: string,
    title: string,
    texts: string[] ,
}

export default function TextSection(props: ITextSection) {
    const {label, labelColor = myColors.lime, title, texts} = props

    return(
        <Container>
            <Label labelColor={labelColor}>{label}</Label>
            <Title>{title}</Title>
            <TextContainer>
                {
                    texts.map(text => {
                        if (text) {
                            return <span>{text}</span>
                        } else {
                            return <br />
                        }

                    })
                }
            </TextContainer>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

interface IColor{
    labelColor: string
}
const Label = styled.h4<IColor>`
    color: ${({labelColor}) => labelColor};
`

const Title = styled.h1`
    font-size: ${fontSizes.title_s};
`

const TextContainer = styled.div`
  width: 100%;
  max-width: ${pageSizes.sm};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: ${spacing.double};
  margin-bottom: ${spacing.quatriple};
  font-size: ${fontSizes.default_s};
  white-space: pre-line;
`