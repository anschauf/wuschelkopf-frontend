import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll'
import {myColors, pageSizes, spacing} from "../../resources/styling-constants";

const footerSize = '80px'

export const FooterContainer = styled.footer`
  border-top: ${myColors.primary} solid 3px;
  color: ${myColors.primary};
`

export const FooterWrap = styled.div`
    display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: ${pageSizes.xl};
  margin: 0 auto;
`

export const FooterLogoLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  
`

export const FooterLogo = styled(LinkScroll)`
  cursor: pointer;
`

export const Logo = styled.img`
    height: 100%;
    width: ${footerSize};
`

export const FooterContentWrapper = styled.div`
    

`