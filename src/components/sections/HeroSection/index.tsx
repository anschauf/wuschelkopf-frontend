import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {myColors} from "../../../resources/styling-constants";
import {HeroContainer, HeroWrapper, HeroMale, FrogEyeRight, FrogEyeLeft} from './HeroElements';
import img from '../../../images/hero/landscape.png'
import alienLandscape from '../../../images/hero/1624.jpg'
import wuschelBackground from '../../../images/hero/background_green_brown_wuschel.png'
import hero_male from '../../../images/hero/hero_male.png'
import frog_eye from '../../../images/hero/frog_eye.png'

export interface IHero {

}

export default function HeroSection(props: IHero) {
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
        <HeroContainer img={wuschelBackground}>
            <HeroMale src={hero_male} />
            <FrogEyeRight src={frog_eye} />
            <FrogEyeLeft src={frog_eye} />
            <HeroWrapper>
                <p>This is the Hero</p>
            </HeroWrapper>

        </HeroContainer>
    )
}

