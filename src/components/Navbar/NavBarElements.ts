import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {myColors} from "../../resources/styling-constants";
import {Link as LinkScroll, animateScroll as scroll} from 'react-scroll'
import {pageSizes} from '../../resources/styling-constants'



const navbarSize = '120px'

export const Nav = styled.nav`
  background: transparent;
  height: ${navbarSize};
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  //position: sticky; // this follows the sliding
  position: absolute;
  top:0;
  z-index: 100;
  font-family: 'Permanent Marker',cursive;
  
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavBarContainer = styled.div`
  display: flex;
  height: ${navbarSize};
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  overflow-y: hidden;
`
export const     NavLogoLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const NavLogo = styled(NavLink)`
  color: ${myColors.primary};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.5rem;
  display: flex;
  align-items: center; 
  margin-left: 24px;
  font-weight: bold;
  font-family: 'Permanent Marker',cursive;
  text-decoration: none;

  @media screen and (max-width: ${pageSizes.md}) {
    font-size: 1rem;
  }
`

export const Logo = styled.img`
    height: 100%;
    width: ${navbarSize};
`

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${myColors.primary};
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: 40px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
    height: ${navbarSize};
`

export const NavLinks = styled(LinkScroll)`
    color: ${myColors.primary};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 0.7rem;
    height: 100%;
    cursor: pointer;
    font-family: 'Permanent Marker',cursive;
    font-size: 24px;

  @media screen and (max-width: ${pageSizes.lg}) {
    font-size: 16px;
  }

    &:active {
        border-bottom: 5px solid ${myColors.white};
    }
  
    &:hover{
      transition: all 0.2s ease-in-out;
      color: ${myColors.white};
    }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(NavLink)`
  border-radius: 50px;
  background: ${myColors.primary};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${myColors.white};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${myColors.white};
    color: ${myColors.black};
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 140px;
`


export interface ISocialIconLink {
    color?: string
}
export const SocialIconLink = styled.a<ISocialIconLink>`
  color: ${({color = myColors.white}) => `${color}}`};
  fill: ${({color = myColors.white}) => `${color}}`};
  font-size: 30px;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${myColors.white};
    fill: ${myColors.white};
  }
`

export const ButtonImgIcon = styled.img`
  height: 31px  
`