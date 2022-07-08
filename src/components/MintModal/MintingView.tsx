import React, {useState, useEffect} from 'react';
import {BasicH3, TopLine} from "../BasicElements";
import IntegerInput from "../IntegerInput";
import {maxNumberOfMint} from "../../GlobalConstants";
import {MyButton} from "../ButtonElements";
import styled from "styled-components";

export interface IMintingView {
    mintClickHandler: () => void
    setNumberOfMint: (minting_numb: number) => void
}

export default function MintingView(props: IMintingView) {
    const {mintClickHandler, setNumberOfMint} = props;

    return (
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
    )
}

const BtnWrapper = styled.div`
    margin-top: 15px;
`
