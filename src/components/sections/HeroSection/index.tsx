import React, {useEffect, useState} from 'react';
import hero_male from '../../../images/hero/hero_male.png'
import hero_female from '../../../images/hero/hero_female.png'
import frog_eye from '../../../images/hero/frog_eye.png'
import wind_wheel from '../../../images/hero/windwheel.png'
import {MyButton} from '../../ButtonElements';
import {
    ColorSpan,
    FigureWrapper,
    HeroTitle,
    MintingCount,
    HeroContainer,
    HeroFemale,
    HeroMale,
    LeftEye,
    RightEye,
    WindWheel,
    TitleWrapper
} from './HeroElements';

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
            <FigureWrapper>
                <HeroFemale src={hero_female}/>
                <WindWheel src={wind_wheel} />
            </FigureWrapper>
            <TitleWrapper>
                <HeroTitle>Wuschelkopf</HeroTitle>
                <MyButton fontBig={true} variant={'secondary'} big={true}  onClick={() => console.log("Hello")}>MINT WUSCHELKOPF NFTs</MyButton>
                <MintingCount><ColorSpan>8'412</ColorSpan> / 10'000 MINTED</MintingCount>
            </TitleWrapper>
            <FigureWrapper>
                <HeroMale src={hero_male}/>
                <LeftEye src={frog_eye} />
                <RightEye src={frog_eye} />
            </FigureWrapper>
        </HeroContainer>
    )
}

