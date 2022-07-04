import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {BiMinusCircle, BiPlusCircle} from "react-icons/bi";
import {myColors} from "../resources/styling-constants";

export interface IIntegerInput {
    min: number,
    max: number,
    start?: number,
    onValueChange: (value: number) => void
}

export default function IntegerInput(props: IIntegerInput) {
    const {min, max, start = min, onValueChange} = props;

    // set value to start if in range, otherwise set to min-value
    const [value, setValue] = useState<number>((start >= min && start <= max) ? start : min)

    const handleMinusClick = () => {
        if(value > min ) setValue(value -1)
    }

    const handlePlusClick = () => {
        if(value < max ) setValue(value + 1)
    }

    useEffect(() => {
        onValueChange(value)
    }, [value])



    return (
        <Container>
            <MinusButton
                onClick={handleMinusClick}
                disabled={(value <= min)} />
            {value}
            <PlusButton
                onClick={handlePlusClick}
                disabled={(value >= max)}/>
        </Container>
    )
}


const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  width: 80px;
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${myColors.ultra_light_purple};
`

interface IButton {
    disabled: boolean
}

const MinusButton = styled(BiMinusCircle)<IButton>`
  color: ${({ disabled }) => disabled ? myColors.light_purple : myColors.white};
  cursor: ${({ disabled }) => disabled ? null : 'pointer' };
  
  &:hover {
    color: ${({ disabled }) => disabled ? null : myColors.primary}
  }
`

const PlusButton = styled(BiPlusCircle)<IButton>`
  color: ${({ disabled }) => disabled ? myColors.light_purple : myColors.white};
  cursor: ${({ disabled }) => disabled ? null : 'pointer' };

  &:hover {
    color: ${({ disabled }) => disabled ? null : myColors.primary}
  }
`