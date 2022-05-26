import styled from 'styled-components'
import { myColors } from "../resources/styling-constants";

export interface IButton {
    variant?: 'primary' | 'secondary' | 'danger',
    big?: boolean,
    dark?: boolean,
    fontBig?: boolean,
    minWidth?: number
}

export const MyButton = styled("button")<IButton>`
  border-radius: 50px;
  background: ${({ variant = 'primary' }) => {
      switch (variant) {
        case 'secondary':
            return myColors.secondary
        case 'danger':
            return myColors.danger
        default:
            return myColors.primary
      }
}};
  white-space: nowrap;
  padding: ${({big = false}) => (big ? '24px 48px' : '12px 30px')};
  color: ${({dark = false}) => (dark ? myColors.middle_grey : myColors.white)};
  font-size: ${({fontBig = false}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  min-width: ${({minWidth}) => minWidth ? `${minWidth}px` : null};
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ variant = 'primary' }) => {
    return (variant === 'primary' ? myColors.white : myColors.black);
}};
    color: ${({ variant = 'primary' }) => {
    return (variant === 'primary' ? myColors.primary : myColors.white)
}};
`