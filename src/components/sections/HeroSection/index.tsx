import React, {useState} from 'react';
import hero_male from '../../../images/hero/hero_male.png'
import hero_female from '../../../images/hero/hero_female.png'
import frog_eye from '../../../images/hero/frog_eye.png'
import wind_wheel from '../../../images/hero/windwheel.png'
import {MyButton} from '../../ButtonElements';
import {
    FigureWrapper,
    HeroContainer,
    HeroFemale,
    HeroMale,
    HeroTitle,
    LeftEye,
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
import {countDownDay, countDownMounth, discord_channel_url, twitter_channel_url} from "../../../GlobalConstants";
import {isMetaMaskInstalled} from "../../../services/ethereum-service";

export interface IHero {

}

export default function HeroSection(props: IHero) {
    const [showMintModal, setShowMintModal] = useState<boolean>(false)
    const [numberOfMint, setNumberOfMint] = useState<number>(1)

    const today = new Date()

    const countdownDateString =`${countDownDay.toString().length > 1 ? '' : '0'}${countDownDay}.${countDownMounth.toString().length > 1 ? '' : '0'}${countDownMounth}.2022`

    const isCountdownDone = () => {
        // + 1 as zero-based
        if (today.getMonth() + 1 > countDownMounth ) {return true}
        else if(today.getMonth() + 1 == countDownMounth) {
            if (today.getDate() >= countDownDay) {return true}
        }
        return false
    }

    const goToMetaMask = () => {
        // @ts-ignore
        window.open('https://metamask.io/download/','_blank').focus();
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

                        {
                            isMetaMaskInstalled() ?
                                <>
                                    <MyButton fontBig={true} variant={'secondary'} big={true}  onClick={toggleShowModal}>MINT WUSCHELKOPF NFTs</MyButton>
                                </>:
                                <>
                                    <MyButton fontBig={true} variant={'secondary'} big={true}  onClick={goToMetaMask}>Install MetaMask</MyButton>
                                    <SubText>To be able to mint, Metamask must be installed!</SubText>
                                </>
                        }
                    {/*Hotfix: Deactivate countdown check */}
                    {/*{isCountdownDone() ?*/}
                    {/*    <>*/}
                    {/*        {*/}
                    {/*            isMetaMaskInstalled() ?*/}
                    {/*                <>*/}
                    {/*                    <MyButton fontBig={true} variant={'secondary'} big={true}  onClick={toggleShowModal}>MINT WUSCHELKOPF NFTs</MyButton>*/}
                    {/*                </>:*/}
                    {/*                <>*/}
                    {/*                    <MyButton fontBig={true} variant={'secondary'} big={true}  onClick={goToMetaMask}>Install MetaMask</MyButton>*/}
                    {/*                    <SubText>To be able to mint, Metamask must be installed!</SubText>*/}
                    {/*                </>*/}
                    {/*        }*/}

                    {/*    </>*/}
                    {/*    :*/}
                    {/*    <ComingSoonWrapper>*/}
                    {/*        <ComingSoonWriting>Wuschelkopf Minting drops at <span><DateSpan>{countdownDateString}</DateSpan> 00:00 CET</span></ComingSoonWriting>*/}
                    {/*        <SubText>Until then, let's keep in touch to get the latest News!</SubText>*/}
                    {/*        <SocialIconsWrapper>*/}
                    {/*            <SocialIconLink href={discord_channel_url} target="_blank" arial-label="Discord" color={myColors.primary}>*/}
                    {/*                <BsDiscord />*/}
                    {/*            </SocialIconLink>*/}
                    {/*            <SocialIconLink href={twitter_channel_url} target="_blank" arial-label="Twitter" color={myColors.primary}>*/}
                    {/*                <AiFillTwitterCircle />*/}
                    {/*            </SocialIconLink>*/}
                    {/*        </SocialIconsWrapper>*/}
                    {/*    </ComingSoonWrapper>*/}
                    {/*}*/}


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
    margin: ${spacing.default};
`

const SocialIconsWrapper = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${spacing.half};
`