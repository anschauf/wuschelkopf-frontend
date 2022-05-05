import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {myColors} from "../../resources/styling-constants";

export interface IHero {

}

export default function Hero(props: IHero) {
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
        <HeroContainer>
            <HeroWrapper>
                <p>This is the Hero</p>
            </HeroWrapper>

        </HeroContainer>
    )
}

export const HeroContainer = styled.div`
  background: ${myColors.middle_grey};
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`