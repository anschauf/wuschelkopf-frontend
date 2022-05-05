import React, {useState, useEffect} from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap} from "./SidebarElements";
import {faqRoute, goalsRoute, homeRoute, rarityRoute, teamRoute} from "../../GlobalConstants";


export interface ISidebar {
    isOpen: boolean,
    toggleIsOpen: () => void
}

export default function Sidebar(props: ISidebar) {
    const { isOpen, toggleIsOpen} = props;

    const sidebarClickHandler = () => {
        if(isOpen) toggleIsOpen()
    }

    return (
        <SidebarContainer isOpen={isOpen} onClick={sidebarClickHandler}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to={homeRoute} onClick={toggleIsOpen}>
                        Home
                    </SidebarLink>
                    <SidebarLink to={goalsRoute} onClick={toggleIsOpen}>
                        Goals
                    </SidebarLink>
                    <SidebarLink to={rarityRoute} onClick={toggleIsOpen}>
                        Rarity
                    </SidebarLink>
                    <SidebarLink to={teamRoute} onClick={toggleIsOpen}>
                        Team
                    </SidebarLink>
                    <SidebarLink to={faqRoute} onClick={toggleIsOpen}>
                        FAQ
                    </SidebarLink>
                </SidebarMenu>
                {/*<SideBtnWrap>*/}
                {/*    <SidebarRoute to={accountRouteName} onClick={toggleIsOpen}>*/}
                {/*        Sign In*/}
                {/*    </SidebarRoute>*/}
                {/*</SideBtnWrap>*/}
            </SidebarWrapper>
        </SidebarContainer>
    )
}