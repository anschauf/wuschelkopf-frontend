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
import styled from "styled-components";
import {fontSizes, myColors, pageSizes, spacing} from "../../../resources/styling-constants";
import {SocialIconLink} from "../../Navbar/NavBarElements";
import {BsDiscord} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";
import useDate from "react-use-date";
import {countDownDay, countDownMounth, discord_channel_url, twitter_channel_url} from "../../../GlobalConstants";

export interface IHero {

}

export default function HeroSection(props: IHero) {
    const [showMintModal, setShowMintModal] = useState<boolean>(false)
    const [numberOfMint, setNumberOfMint] = useState<number>(1)

    const today = useDate({ interval: 'hour' })

    const countdownDateString =`${countDownDay.toString().length > 1 ? '' : '0'}${countDownDay}.${countDownMounth.toString().length > 1 ? '' : '0'}${countDownMounth}.2022`

    const isCountdownDone = () => {
        // + 1 as zero-based
        if (today.getMonth() > countDownMounth + 1) {return true}
        else if(today.getMonth() == countDownMounth + 1) {
            if (today.getDate() >= countDownDay) {return true}
        }
        return false
    }
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
                    {isCountdownDone() ?
                        <>
                            <MyButton fontBig={true} variant={'secondary'} big={true}  onClick={toggleShowModal}>MINT WUSCHELKOPF NFTs</MyButton>
                            <MintingCount><ColorSpan>8'412</ColorSpan> / 10'000 MINTED</MintingCount>
                        </>
                        :
                        <ComingSoonWrapper>
                            <ComingSoonWriting>Wuschelkopf Minting drops at <span><DateSpan>{countdownDateString}</DateSpan> 00:00 CET</span></ComingSoonWriting>
                            <SubText>Until then, let's keep in touch to get the latest News!</SubText>
                            <SocialIconsWrapper>
                                <SocialIconLink href={discord_channel_url} target="_blank" arial-label="Discord" color={myColors.primary}>
                                    <BsDiscord />
                                </SocialIconLink>
                                <SocialIconLink href={twitter_channel_url} target="_blank" arial-label="Twitter" color={myColors.primary}>
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
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

const ComingSoonWriting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${fontSizes.title_xs};
  margin: ${spacing.default};

  @media screen and (max-width: ${pageSizes.sm}) {
    font-size: ${fontSizes.default_m};
  }
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