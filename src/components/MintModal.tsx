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

export interface IMintModal {
    showMintModal: boolean,
    setShowMintModal: (state: boolean) => void
}

const REACT_APP_API_IPFS_IMAGE_URL = process.env.REACT_APP_IPFS_IMAGE_URL

export default function MintModal(props: IMintModal) {
    const {showMintModal, setShowMintModal} = props;
    const [numberOfMint, setNumberOfMint] = useState<number>(1)
    const [mintedTokenIds, setMintedTokenIds] = useState<string[]>([])

    // component state    
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const toggleShowModal = () => {
        if(showMintModal) setNumberOfMint(1)
        setShowMintModal(!showMintModal)
        setIsLoading(false)
    }

    const mintClickHandler = async () => {
        console.log("Mint now!")
        setIsLoading(true)

        const mintResult = await mintNFT(numberOfMint)
        if(mintResult) {

            console.log(mintResult)
            // @ts-ignore
            const mintedTokenIds = mintResult.events.Transfer.returnValues.tokenId
            setMintedTokenIds([mintedTokenIds])
            console.log("MintResult", mintResult)
        } else {
            console.log("Error with minting!")
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
                        <>
                            {mintedTokenIds.map(id => <img src={`${REACT_APP_API_IPFS_IMAGE_URL}/${id}.png`} alt={`Wuschelkopf NFT #${id}`}/>)}
                        </>
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
