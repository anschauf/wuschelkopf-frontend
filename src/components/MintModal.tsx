import React, {useState} from 'react';
import styled from "styled-components";
import Modal from "./Modal";
import {BasicH3, TopLine} from "./BasicElements";
import IntegerInput from "./IntegerInput";
import {maxNumberOfMint, mintingFee} from "../GlobalConstants";
import {MyButton} from "./ButtonElements";
import Spinner from "./Spinner";
import {myColors} from "../resources/styling-constants";
import {mintNFT} from "../services/ethereum-service";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation, Pagination} from "swiper";


export interface IMintModal {
    showMintModal: boolean,
    setShowMintModal: (state: boolean) => void
}

const REACT_APP_API_IPFS_IMAGE_URL = process.env.REACT_APP_IPFS_IMAGE_URL

export default function MintModal(props: IMintModal) {
    const {showMintModal, setShowMintModal} = props;
    const [numberOfMint, setNumberOfMint] = useState<number>(1)
    const [mintedTokenIds, setMintedTokenIds] = useState<string[]>([])
    const [mintedImagesLoaded, setMintedImagesLoaded] = useState<boolean[]>([])

    // component state    
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const toggleShowModal = () => {
        if(showMintModal) setNumberOfMint(1)
        setShowMintModal(!showMintModal)
        setIsLoading(false)
    }

    // @ts-ignore
    function extractTokenIds(mintResult) {
        if (numberOfMint == 1) {
            return [mintResult.events.Transfer.returnValues.tokenId]
        } else {
            // @ts-ignore
            return mintResult.events.Transfer.map(nft => nft.returnValues.tokenId)
        }
    }

    const mintClickHandler = async () => {
        console.log("Mint now!")
        setIsLoading(true)

        const mintResult = await mintNFT(numberOfMint)
        if(mintResult) {
            console.log(mintResult)
            const tokenIds = extractTokenIds(mintResult)

            setMintedTokenIds(tokenIds)
            setMintedImagesLoaded(Array(numberOfMint).fill(false))
        } else {
        }
        setIsLoading(false)
        // // TODO handle mint success and error
    }



    function updateLoadedState(index: number) {
        // deep copy the array
        var tempArray = JSON.parse(JSON.stringify(mintedImagesLoaded));
        tempArray[index] = true
        setMintedImagesLoaded(tempArray)
    }

    return (
        <Modal showModal={showMintModal} toggleShowModal={toggleShowModal}>

            { isLoading ?
                <LoadingWrapper>
                    <LoadingStateText>{mintedTokenIds.length > 0 ?  "Loading minted NFTs..." : "Minting NFTs...."}</LoadingStateText>
                    <Spinner color={myColors.primary} />
                </LoadingWrapper>
                :
                <>
                    { mintedTokenIds.length > 0 ?
                        <ImageSwiperWrapper>
                            <SwiperContaier>
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
                                        <SwiperSlide key={id}>
                                            {mintedImagesLoaded.every(e => e) ? null : <SpinnerWrapper><Spinner color={myColors.primary} /> </SpinnerWrapper>}
                                            <ModalImage displayImage={mintedImagesLoaded.every(entry => entry)} src={`${REACT_APP_API_IPFS_IMAGE_URL}/${id}.png`} alt={`Wuschelkopf NFT #${id}`} onLoad={() => updateLoadedState(index)}/>
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </SwiperContaier>
                        </ImageSwiperWrapper>

                        :
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
                    }

                </>

            }
        </Modal>
    )
}

const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const SwiperContaier = styled.div`
  width: 300px;
  display: flex;
`
const ImageSwiperWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const LoadingWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

const LoadingStateText = styled.span`
    color: ${myColors.primary};
`

const BtnWrapper = styled.div`
    margin-top: 15px;
`
