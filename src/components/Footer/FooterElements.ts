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

  @media screen and (max-width: ${pageSizes.md}) {
    flex-direction: column;
  }
`

export const FooterLogoLinkWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-bottom: ${spacing.default};
`

export const FooterLogo = styled(LinkScroll)`
  cursor: pointer;
`

export const Logo = styled.img`
    height: 100%;
    width: ${footerSize};
`

export const FooterContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: ${spacing.default};
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${pageSizes.md}) {
    width: 100%;
  }
`

export const RightsText = styled.div`
  width: 100%;
  text-align: end;
  @media screen and (max-width: ${pageSizes.md}) {
    text-align: center;
  }
`

export const SocialIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`