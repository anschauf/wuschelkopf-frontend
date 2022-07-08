import React, {useState} from 'react';
import hero_male from '../../../images/hero/hero_male.png'
import hero_female from '../../../images/hero/hero_female.png'
import frog_eye from '../../../images/hero/frog_eye.png'
import wind_wheel from '../../../images/hero/windwheel.png'
import {MyButton} from '../../ButtonElements';
import {
    ColorSpan,
    FigureWrapper,
    HeroContainer,
    HeroFemale,
    HeroMale,
    HeroTitle,
    LeftEye,
    MintingCount,
    RightEye,
    TitleWrapper,
    WindWheel
} from './HeroElements';
import MintModal from "../../MintModal";

export interface IHero {

}

export default function HeroSection(props: IHero) {
    const [showMintModal, setShowMintModal] = useState<boolean>(false)
    const [numberOfMint, setNumberOfMint] = useState<number>(1)

    const toggleShowModal = () => {
        if(showMintModal) setNumberOfMint(1)
        setShowMintModal(!showMintModal)
    }

    return (
            <HeroContainer>
                <FigureWrapper>
                    <HeroFemale src={hero_female}/>
                    <WindWheel src={wind_wheel} />
                </FigureWrapper>
                <TitleWrapper>
                    <MintModal showMintModal={showMintModal} setShowMintModal={setShowMintModal} />
                    <HeroTitle>Wuschelkopf</HeroTitle>
                    <MyButton fontBig={true} variant={'secondary'} big={true}  onClick={toggleShowModal}>MINT WUSCHELKOPF NFTs</MyButton>
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
