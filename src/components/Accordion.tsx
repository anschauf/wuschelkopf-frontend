import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {IconContext} from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'

import {fontSizes, myColors, pageSizes, spacing} from "../resources/styling-constants";

export interface IAccordeonData {
    question: string,
    answer: string
}
export interface IAccordeon {
    questions: IAccordeonData[]
}

export default function Accordion(props: IAccordeon) {
    const {questions} = props;
    const [clicked, setClicked] = useState(-1)

    const toggle = (i: number) => {
        if(clicked === i) {
            // if clicked question is already active, then close it
            setClicked(-1)
        } else {
            setClicked(i)
        }
    }

    return (
        <Container>
            <IconContext.Provider value={{ color: myColors.primary, size: '36px'}}>
                <AccordionSection>
                    <AccordeonElementContainer>
                        {questions.map((q, index) => {
                            return (
                                <ElementWrapper key={`accordion-wrapper-${index}`}>
                                    <QuestionWrap onClick={() => toggle(index)} key={`accordion-${index}`}>
                                        <QuestionTitle>{q.question}</QuestionTitle>
                                        <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                    </QuestionWrap>
                                    {clicked === index ? (
                                        <Dropdown>
                                            <AnswerParagraph>{q.answer}</AnswerParagraph>
                                        </Dropdown>
                                    ): null}
                                </ElementWrapper>
                            )
                        })}
                    </AccordeonElementContainer>
                </AccordionSection>
            </IconContext.Provider>
        </Container>
    )
}


const Container = styled.div`
  justify-content: center;
`

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  margin: ${spacing.double};
`

const AccordeonElementContainer = styled.div`
  //top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(31, 31, 31, 0.3);
  border-radius: 20px;
  padding: ${spacing.default};
  @media screen and (max-width: ${pageSizes.lg}) {
    width: 100%;
  }
  width: ${pageSizes.lg};
  background-color: ${myColors.light_lime};
  
`

const ElementWrapper = styled.div`
`

const QuestionWrap = styled.div`
  display: flex;
  color: ${myColors.primary};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: ${myColors.primary} solid 2px;
  text-align: center;
  cursor: pointer;
`

const QuestionTitle = styled.h1`
  padding: ${spacing.default};
  font-size: ${fontSizes.default_m};
`

const AnswerParagraph = styled.div`
    padding: ${spacing.double};
  color: ${myColors.light_grey_darker};
`

const Dropdown = styled.p`
`
