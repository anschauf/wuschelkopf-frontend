import React from 'react';
import styled from "styled-components";

export interface ISpinner {
    color: string,
    size?: number
}

export default function Spinner(props: ISpinner) {
    return (
        <StyledSpinner {...props}/>
    )
}

const StyledSpinner = styled.div<ISpinner>`
    display: inline-block;
    width: 80px;
    height: 80px; 
    &:after {
        content: " ";
        display: block;
        width: ${({size = 64}) => `${size}px`};
        height: ${({size = 64}) => `${size}px`};
        margin: 8px;
        border-radius: 50%;
        border: ${({color}) => `6px solid ${color}`};
        border-color:${({color}) => `${color} transparent ${color} transparent`};
        animation: lds-dual-ring 1.2s linear infinite;
    }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`