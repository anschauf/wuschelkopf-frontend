import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import {myColors} from "../../resources/styling-constants";

export interface ISidebarContainerProps{
    isOpen: boolean
}
export const SidebarContainer = styled.aside<ISidebarContainerProps>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  &:hover {
    color: ${myColors.primary};
    transition: 0.2s ease-in-out;
  }
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`

export const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${myColors.white};
  cursor: pointer;
  
  &:hover {
    color: ${myColors.primary};
    transition: 0.2s ease-in-out;
  }
`
export const SideSocialWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 240px;
`


export interface ISocialIconLink {
    color?: string
}
export const SocialIconLink = styled.a<ISocialIconLink>`
  color: ${({color = myColors.white}) => `${color}}`};
  fill: ${({color = myColors.white}) => `${color}}`};
  font-size: 42px;

  &:hover {
    color: ${myColors.primary};
    fill: ${myColors.primary};
    transition: 0.2s ease-in-out;
  }
`

export const ButtonImgIcon = styled.img`
  height: 43px;

  &:hover {
    color: ${myColors.primary};
    transition: 0.2s ease-in-out;
  }
`


export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const SidebarRoute = styled(NavLink)`
  border-radius: 50px;
  background: ${myColors.primary};
  white-space: nowrap;
  padding: 16px 64px;
  color: ${myColors.white};
  font-size: 16px;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover{
    transition: all 0.2s ease-in-out;
    background: ${myColors.white};
    color: ${myColors.primary}
  }
`
