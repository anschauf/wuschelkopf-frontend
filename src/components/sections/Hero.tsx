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
            <p>This is the Hero</p>
        </HeroContainer>
    )
}

export const HeroContainer = styled.div`
  background: ${myColors.middle_grey};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1000px;
`