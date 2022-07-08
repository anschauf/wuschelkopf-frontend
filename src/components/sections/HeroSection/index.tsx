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
import moment from "moment";
import styled from "styled-components";
import {myColors, spacing} from "../../../resources/styling-constants";
import {SocialIconLink} from "../../Navbar/NavBarElements";
import {BsDiscord} from "react-icons/bs";
import OpenSeaIcon from "../../../resources/OpenSeaIcon";
import {AiFillTwitterCircle} from "react-icons/ai";

export interface IHero {

}

const REACT_APP_MINT_DROP_DATE = process.env.REACT_APP_MINT_DROP_DATE

export default function HeroSection(props: IHero) {
    const [showMintModal, setShowMintModal] = useState<boolean>(false)
    const [numberOfMint, setNumberOfMint] = useState<number>(1)

    const today = moment()

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
                    {today.isAfter(REACT_APP_MINT_DROP_DATE) ?
                        <>
                            <MyButton fontBig={true} variant={'secondary'} big={true}  onClick={toggleShowModal}>MINT WUSCHELKOPF NFTs</MyButton>
                            <MintingCount><ColorSpan>8'412</ColorSpan> / 10'000 MINTED</MintingCount>
                        </>
                        :
                        <ComingSoonWrapper>
                            <ComingSoonWriting>Wuschelkopf Minting drops at <DateSpan>{REACT_APP_MINT_DROP_DATE}</DateSpan> 00:00 CET</ComingSoonWriting>
                            <SubText>Until then, keep in touch to get the latest News!</SubText>
                            <SocialIconsWrapper>
                                <SocialIconLink href="https://discord.gg/H7E2teR9Bh" target="_blank" arial-label="Discord" color={myColors.light_brown}>
                                    <BsDiscord />
                                </SocialIconLink>
                                <SocialIconLink href="https://twitter.com/WuschelkopfN" target="_blank" arial-label="Twitter" color={myColors.light_brown}>
                                    <AiFillTwitterCircle />
                                </SocialIconLink>
                            </SocialIconsWrapper>
                        </ComingSoonWrapper>
                    }


                </TitleWrapper>
                <FigureWrapper>
                    <HeroMale src={hero_male}/>
                    <LeftEye src={frog_eye} />
                    <RightEye src={frog_eye} />
                </FigureWrapper>
            </HeroContainer>
    )
}


const ComingSoonWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

const ComingSoonWriting = styled.h2`
  margin-bottom: ${spacing.default};
`

const DateSpan = styled.span`
    color: ${myColors.primary};
`

const SubText = styled.div`
`

const SocialIconsWrapper = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${spacing.half};
`