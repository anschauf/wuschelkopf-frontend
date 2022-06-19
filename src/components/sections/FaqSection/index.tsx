import React, {useState, useEffect} from 'react';
import Accordion from "../../Accordion";
import styled from "styled-components";
import {Data} from "./questions"

import {SectionTitle} from "../../HeaderElements";
export interface IFaqSection {

}

export default function FaqSection(props: IFaqSection) {
    const {} = props;

    return (
        <Container>
            <SectionTitle>FAQs</SectionTitle>
            <Accordion questions={Data}/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
`