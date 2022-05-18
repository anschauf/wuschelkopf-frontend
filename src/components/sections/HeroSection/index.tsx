import React, {useEffect, useState} from 'react';
import {LeftContainer, FrogEyeLeft, FrogEyeRight, HeroContainer, HeroMale, HeroFemale, WindWheel, TitleContainer, RightCointainer} from './HeroElements';
import hero_male from '../../../images/hero/hero_male.png'
import hero_female from '../../../images/hero/hero_female.png'
import crown from '../../../images/hero/crown.png'
import frog_eye from '../../../images/hero/frog_eye.png'
import wind_wheel from '../../../images/hero/windwheel.png'

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
        <HeroContainer>
            <LeftContainer>
                <HeroMale src={hero_male} />
                <FrogEyeRight src={frog_eye} />
                <FrogEyeLeft src={frog_eye} />
            </LeftContainer>

            <TitleContainer>
                <p>This is the Hero</p>
            </TitleContainer>

            <RightCointainer>
                <HeroFemale src={hero_female} />
                <WindWheel src={wind_wheel} />
            </RightCointainer>

        </HeroContainer>
    )
}

