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
import { HeroDiv, NewHeroMale, NewHeroFemale, NewWindWheel, NewLeftEye, NewRightEye } from './NewHeroElements';

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
            {/*<MobileImageWrapper>*/}
            {/*    <MobileLeftContainer>*/}
            {/*        <HeroMale src={hero_male} />*/}
            {/*        <FrogEyeRight src={frog_eye} />*/}
            {/*        <FrogEyeLeft src={frog_eye} />*/}
            {/*    </MobileLeftContainer>*/}
            {/*    <MobileRightContainer>*/}
            {/*        <HeroFemale src={hero_female} />*/}
            {/*        <WindWheel src={wind_wheel} />*/}
            {/*    </MobileRightContainer>*/}
            {/*</MobileImageWrapper>*/}


            {/*<MonitorLeftContainer>*/}
            {/*    <HeroFemale src={hero_female} />*/}
            {/*    <WindWheel src={wind_wheel} />*/}
            {/*</MonitorLeftContainer>*/}



            {/*<TitleContainer>*/}
            {/*    <HeroTitle>Wuschelkopf</HeroTitle>*/}
            {/*    <MyButton fontBig={true} variant={'secondary'} big={true}  onClick={() => console.log("Hello")}>MINT WUSCHELKOPF NFTs</MyButton>*/}
            {/*    <MintingCount><ColorSpan>8'412</ColorSpan> / 10'000 MINTED</MintingCount>*/}
            {/*</TitleContainer>*/}


            {/*<MonitorRightCointainer>*/}
            {/*    <HeroMale src={hero_male} />*/}
            {/*    <FrogEyeRight src={frog_eye} />*/}
            {/*    <FrogEyeLeft src={frog_eye} />*/}
            {/*</MonitorRightCointainer>*/}

            <HeroDiv>
                <NewHeroFemale src={hero_female}/>
                <NewWindWheel src={wind_wheel} />
            </HeroDiv>
            <HeroDiv>
                <HeroTitle>Wuschelkopf</HeroTitle>
                <MyButton fontBig={true} variant={'secondary'} big={true}  onClick={() => console.log("Hello")}>MINT WUSCHELKOPF NFTs</MyButton>
                <MintingCount><ColorSpan>8'412</ColorSpan> / 10'000 MINTED</MintingCount>
            </HeroDiv>
            <HeroDiv>
                <NewHeroMale src={hero_male}/>
                <NewLeftEye src={frog_eye} />
                <NewRightEye src={frog_eye} />
            </HeroDiv>

        </HeroContainer>
    )
}

