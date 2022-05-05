import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {myColors} from "../../resources/styling-constants";
import {Link as LinkScroll} from 'react-scroll'


const navbarSize = '60px'

export const Nav = styled.nav`
  background: ${myColors.middle_grey};
  height: ${navbarSize};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index: 10;
  
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
  //position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow-y: hidden;
`

export const NavLogo = styled(NavLink)`
  color: ${myColors.old_white};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center; 
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
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
    color: ${myColors.old_white};
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
    color: ${myColors.old_white};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

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
  font-size: 30px;
`

export const ButtonImgIcon = styled.img`
  height: 31px  
`