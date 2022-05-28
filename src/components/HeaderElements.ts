import styled from "styled-components";
import {fontSizes, myColors, pageSizes, spacing} from "../resources/styling-constants";

export const SectionTitle = styled.h1`
    color: ${myColors.primary};
    padding: ${spacing.double};
    font-size: ${fontSizes.title_xl};
    font-family: 'Permanent Marker',cursive;
    font-weight: bolder;

      @media screen and (max-width: ${pageSizes.xl}) {
        font-size: ${fontSizes.title_sm};
      }

      @media screen and (max-width: ${pageSizes.sm}) {
        font-size: ${fontSizes.title_sm};
      }
`