import styled from "styled-components";
import {myColors} from "../resources/styling-constants";

export const TopLine = styled.p`
  color: ${myColors.primary};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export interface IHeading {
    lightText: boolean
}
export const BasicH3 = styled.h3<IHeading>`
  margin-bottom: 16px;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 200;
  color: ${({ lightText }) => (lightText ? myColors.old_white : myColors.almost_black)};

  @media screen and (max-width: 480px) {
    font-size: 16px;
`