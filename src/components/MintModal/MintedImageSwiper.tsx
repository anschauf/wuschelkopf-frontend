import React, {useEffect, useState} from 'react';
import Spinner from "../Spinner";
import {fontSizes, myColors, spacing} from "../../resources/styling-constants";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {SocialIconLink} from "../Navbar/NavBarElements";
import OpenSeaIcon from "../../resources/OpenSeaIcon";
import {MyButton} from '../ButtonElements';

const REACT_APP_API_IPFS_IMAGE_URL = process.env.REACT_APP_IPFS_IMAGE_URL
const REACT_APP_OPENSEA_URL = process.env.REACT_APP_OPENSEA_URL

export interface IMintedImageSwiper {
    mintedTokenIds: string[]
}


export default function MintedImageSwiper(props: IMintedImageSwiper) {
    const {mintedTokenIds} = props;
    const [mintedImagesLoaded, setMintedImagesLoaded] = useState<boolean[]>([])

    // all images are loaded from IPFS
    const isLoaded = (mintedImagesLoaded.every(e => e))


    function updateLoadedState(index: number) {
        // deep copy the array
        var tempArray = JSON.parse(JSON.stringify(mintedImagesLoaded));
        tempArray[index] = true
        setMintedImagesLoaded(tempArray)
    }

    function completeIdWithLeadingZeroes(id: string) {
        let idLength = id.length
        let procedingZeroes = 4 - idLength
        return `${'0'.repeat(procedingZeroes)}${id}`
    }

    useEffect(() => {
        setMintedImagesLoaded(Array(mintedTokenIds.length).fill(false))
    }, [mintedTokenIds])
    return (
        <ImageSwiperWrapper>
            {isLoaded ?
                <>
                    <Title>Congratulations!</Title>
                    <SubTitle>Your brand new Wuschelkopf NFT{mintedTokenIds.length > 1 ? 's' : ''}:</SubTitle>
                </>
                :
                <SubTitle>Loading your newly minted NFT{mintedTokenIds.length > 1 ? 's' : ''}</SubTitle>
            }
                <SwiperContainer>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={2}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        centeredSlides={false}
                        centerInsufficientSlides={true}
                    >
                        {mintedTokenIds.map((id, index) =>
                            <>
                                <SwiperSlide key={id}>
                                        {isLoaded ? null : <SpinnerWrapper><Spinner color={myColors.primary} /> </SpinnerWrapper>}
                                        <ModalImage displayImage={mintedImagesLoaded.every(entry => entry)} src={`${REACT_APP_API_IPFS_IMAGE_URL}/${completeIdWithLeadingZeroes(id)}.png`} alt={`Wuschelkopf NFT #${id}`} onLoad={() => updateLoadedState(index)}/>
                                        { isLoaded ?
                                            <SocialLinkWrapper>
                                                <SocialIconLink href={`${REACT_APP_OPENSEA_URL}/${parseInt(id)}`} target="_blank" arial-label="OpenSea" color={myColors.white} hoverColor={myColors.primary}>
                                                <MyButton>
                                                    <IconWrapper>

                                                        <OpenSeaIcon size={36}/>

                                                    </IconWrapper>
                                                    Check on Opensea
                                                </MyButton>
                                                </SocialIconLink>
                                            </SocialLinkWrapper>
                                            : null
                                        }
                                </SwiperSlide>

                            </>
                        )}
                    </Swiper>
                </SwiperContainer>

        </ImageSwiperWrapper>
    )
}


export const Title = styled.h1`
  color: ${myColors.danger};
  font-size: ${fontSizes.title_s};
`

interface IModalImage {
    displayImage: boolean
}
const ModalImage = styled.img<IModalImage>`
    display: ${({displayImage }) => displayImage ? 'flex' : 'none'};
    border-radius: 15%;
    height: 300px;
    width: 300px;
`

const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 300px;
`

const SwiperContainer = styled.div`
  width: 300px;
  display: flex;
  margin-top: ${spacing.default};
  margin-bottom: ${spacing.default};
`


const ImageSwiperWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SubTitle = styled.h3`
  margin-bottom: ${spacing.default};
  color: ${myColors.primary};
`

const SocialLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: ${spacing.double};
  margin-bottom: ${spacing.default};
  justify-content: center;
  align-items: center;
`

const IconWrapper = styled.div`
    margin-top: 10px;
    margin-right: ${spacing.default};
`