import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Modal from "../Modal";
import {MyButton} from "../ButtonElements";
import Spinner from "../Spinner";
import {myColors} from "../../resources/styling-constants";
import {mintNFT} from "../../services/ethereum-service";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import MintedImageSwiper, {SubTitle} from "./MintedImageSwiper";
import MintingView from "./MintingView";
import {CloseIcon, Icon, SidebarContainer, SidebarWrapper} from '../Sidebar/SidebarElements';


export interface IMintModal {
    showMintModal: boolean,
    setShowMintModal: (state: boolean) => void
}




export default function MintModal(props: IMintModal) {
    const breakWidth = 992
    const [isDesktop, setDesktop] = useState(window.innerWidth > breakWidth);

    const updateMedia = () => {
        setDesktop(window.innerWidth > breakWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const {showMintModal, setShowMintModal} = props;
    const [numberOfMint, setNumberOfMint] = useState<number>(1)
    const [mintedTokenIds, setMintedTokenIds] = useState<string[]>([])
    const [hasMintingError, setHasMintingError] = useState<boolean>(false)


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


    function modalContent() {
        return(
            <>
                { isLoading ?
                    <LoadingWrapper>
                        <LoadingStateText>{mintedTokenIds.length > 0 ?  "Loading minted NFTs..." : "Minting NFTs....Check your Metamask"}</LoadingStateText>
                        <Spinner color={myColors.primary} />
                    </LoadingWrapper>
                    :
                    <>
                        {
                            hasMintingError ?
                                <>
                                    <SubTitle>An error occured during minting. Please try again!</SubTitle>
                                    <MyButton onClick={() => setShowMintModal(false)}>Ok</MyButton>
                                </>
                                :
                                <>
                                    { mintedTokenIds.length > 0 ?
                                        <MintedImageSwiper mintedTokenIds={mintedTokenIds}/>
                                        :
                                        <MintingView mintClickHandler={mintClickHandler} setNumberOfMint={setNumberOfMint} />
                                    }
                                </>
                        }

                    </>

                }
            </>
        )
    }

    const mintClickHandler = async () => {
        setIsLoading(true)
        try {
            const mintResult = await mintNFT(numberOfMint)
            if(mintResult) {
                const tokenIds = extractTokenIds(mintResult)

                setMintedTokenIds(tokenIds)
            } else {
                console.log("error")
                setHasMintingError(true)
            }
        } catch (e) {
            setHasMintingError(true)
            toggleShowModal()
        }
        setIsLoading(false)
    }



    return (
        <>
        {isDesktop ?
            <Modal showModal={showMintModal} toggleShowModal={toggleShowModal}>
            {modalContent()}
            </Modal>
            :
            <SidebarContainer isOpen={showMintModal} onClick={() => {}}>
            <Icon onClick={toggleShowModal}>
                <CloseIcon/>
            </Icon>
                <SidebarWrapper>
                    <SideMintContentWrapper>
                        {modalContent()}
                    </SideMintContentWrapper>
                </SidebarWrapper>
            </SidebarContainer> }
        </>
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

const SideMintContentWrapper = styled.div`
    display: flex;
  flex-direction: column;
    flex: 1;
    justify-content: center;
  align-items: center;
`