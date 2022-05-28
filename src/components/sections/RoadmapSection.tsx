import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {SectionTitle} from "../HeaderElements";

export interface IGoalsSection {

}

export default function RoadmapSection(props: IGoalsSection) {
    const {} = props;

    // component state    
    const [isLoading, setIsLoading] = useState<boolean>(true)

    // Hook, which gets called only once at component creation.
    useEffect(() => {

    }, [])

    // Hook, which gets called everytime the state of var 'isLoading' changes.
    useEffect(() => {

    }, [isLoading])

    return (
        <Container>
            <ContainerWrapper>
                <SectionTitle>Rarities</SectionTitle>
            </ContainerWrapper>
        </Container>
    )
}


const Container = styled.div`
`

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`

const Header = styled.h1`
    font-size: 30px;
`