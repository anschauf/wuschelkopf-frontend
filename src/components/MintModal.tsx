import React, {useState} from 'react';
import styled from "styled-components";
import Modal from "./Modal";
import {BasicH3, TopLine} from "./BasicElements";
import IntegerInput from "./IntegerInput";
import {maxNumberOfMint} from "../GlobalConstants";
import {MyButton} from "./ButtonElements";
import Spinner from "./Spinner";
import {myColors} from "../resources/styling-constants";

export interface IMintModal {
    showMintModal: boolean,
    setShowMintModal: (state: boolean) => void
}


export default function MintModal(props: IMintModal) {
    const {showMintModal, setShowMintModal} = props;
    const [numberOfMint, setNumberOfMint] = useState<number>(1)

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
        // const mintResult = await mintNFT(numberOfMint)
        // if(mintResult) {
        //     console.log("MintResult", mintResult)
        //     navigate(`..${accountRouteName}`)
        // }
        // // TODO handle mint success and error
    }

    return (
        <Modal showModal={showMintModal} toggleShowModal={toggleShowModal}>
            { isLoading ?
                <Spinner color={myColors.primary} />
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
        </Modal>
    )
}

const BtnWrapper = styled.div`
    margin-top: 15px;
`
