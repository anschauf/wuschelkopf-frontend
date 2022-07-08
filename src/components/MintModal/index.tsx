import React, {useState} from 'react';
import styled from "styled-components";
import Modal from "../Modal";
import {BasicH3, TopLine} from "../BasicElements";
import IntegerInput from "../IntegerInput";
import {maxNumberOfMint} from "../../GlobalConstants";
import {MyButton} from "../ButtonElements";
import Spinner from "../Spinner";
import {myColors} from "../../resources/styling-constants";
import {mintNFT} from "../../services/ethereum-service";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import MintedImageSwiper from "./MintedImageSwiper";
import MintingView from "./MintingView";


export interface IMintModal {
    showMintModal: boolean,
    setShowMintModal: (state: boolean) => void
}

export default function MintModal(props: IMintModal) {
    const {showMintModal, setShowMintModal} = props;
    const [numberOfMint, setNumberOfMint] = useState<number>(1)
    const [mintedTokenIds, setMintedTokenIds] = useState<string[]>(['03','04','05'])


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
        } else {
        }
        setIsLoading(false)
        // // TODO handle mint success and error
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
                        <MintedImageSwiper mintedTokenIds={mintedTokenIds}/>
                        :
                        <MintingView mintClickHandler={mintClickHandler} setNumberOfMint={setNumberOfMint} />
                    }
                </>

            }
        </Modal>
    )
}





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

