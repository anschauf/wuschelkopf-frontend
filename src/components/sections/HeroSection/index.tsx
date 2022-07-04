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
import {maxNumberOfMint} from '../../../GlobalConstants'
import Modal from "../../Modal";
import {BasicH3, TopLine} from '../../BasicElements';
import IntegerInput from "../../IntegerInput";
import styled from "styled-components";

export interface IHero {

}

export default function HeroSection(props: IHero) {
    const [showMintModal, setShowMintModal] = useState<boolean>(false)
    const [numberOfMint, setNumberOfMint] = useState<number>(1)

    const toggleShowModal = () => {
        if(showMintModal) setNumberOfMint(1)
        setShowMintModal(!showMintModal)
    }

    const mintClickHandler = async () => {
        console.log("Mint now!")
        // const mintResult = await mintNFT(numberOfMint)
        // if(mintResult) {
        //     console.log("MintResult", mintResult)
        //     navigate(`..${accountRouteName}`)
        // }
        // // TODO handle mint success and error
    }

    return (
            <HeroContainer>
                <FigureWrapper>
                    <HeroFemale src={hero_female}/>
                    <WindWheel src={wind_wheel} />
                </FigureWrapper>
                <TitleWrapper>
                    <Modal showModal={showMintModal} toggleShowModal={toggleShowModal}>
                        <>
                            <TopLine>Mint Wuschelkopf NFTs</TopLine>
                            <BasicH3 lightText={true}>How many NFTs?</BasicH3>
                            <IntegerInput min={1} max={maxNumberOfMint} onValueChange={setNumberOfMint}/>
                            <BtnWrapper>
                                <MyButton
                                    onClick={mintClickHandler}
                                    minWidth={160}>
                                    Mint
                                </MyButton>
                            </BtnWrapper>
                        </>
                    </Modal>
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

const BtnWrapper = styled.div`
    margin-top: 15px;
`

