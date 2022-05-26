import React, {useEffect, useState} from 'react';
import {
    FrogEyeLeft,
    FrogEyeRight,
    HeroContainer,
    HeroFemale,
    HeroMale,
    MobileImageWrapper,
    MobileLeftContainer,
    MobileRightContainer,
    MonitorLeftContainer,
    MonitorRightCointainer,
    TitleContainer,
    HeroTitle,
    WindWheel,
    MintingCount,
    ColorSpan
} from './HeroElements';
import hero_male from '../../../images/hero/hero_male.png'
import hero_female from '../../../images/hero/hero_female.png'
import frog_eye from '../../../images/hero/frog_eye.png'
import wind_wheel from '../../../images/hero/windwheel.png'
import { MyButton } from '../../ButtonElements';

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
            <MobileImageWrapper>
                <MobileLeftContainer>
                    <HeroMale src={hero_male} />
                    <FrogEyeRight src={frog_eye} />
                    <FrogEyeLeft src={frog_eye} />
                </MobileLeftContainer>
                <MobileRightContainer>
                    <HeroFemale src={hero_female} />
                    <WindWheel src={wind_wheel} />
                </MobileRightContainer>
            </MobileImageWrapper>

            <MonitorLeftContainer>
                <HeroMale src={hero_male} />
                <FrogEyeRight src={frog_eye} />
                <FrogEyeLeft src={frog_eye} />
            </MonitorLeftContainer>

            <TitleContainer>
                <HeroTitle>Wuschelkopfs</HeroTitle>
                <MyButton big={true} onClick={() => console.log("Hello")}>MINT WUSCHELKOPF NFT's</MyButton>
                <MintingCount><ColorSpan>8'412</ColorSpan> / 10'000 MINTED</MintingCount>
            </TitleContainer>

            <MonitorRightCointainer>
                <HeroFemale src={hero_female} />
                <WindWheel src={wind_wheel} />
            </MonitorRightCointainer>



        </HeroContainer>
    )
}

