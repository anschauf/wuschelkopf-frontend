/**
 * Based on Youtube tutorial found here:
 * https://www.youtube.com/watch?v=d3aI1Dt0Z50
 */
import React, {useCallback, useEffect, useRef} from 'react';
import {animated, useSpring} from "react-spring";
import styled from 'styled-components'
import {myColors, pageSizes} from "../resources/styling-constants";
import {MdClose} from "react-icons/md";
import OgerImage from '../images/website_modal.png'

export interface IModal {
    showModal: boolean,
    toggleShowModal: () => void,
    centered?: boolean,
    children: JSX.Element
}

export default function Modal(props: IModal) {
    const {showModal, toggleShowModal, children, centered = true} = props;
    const modalRef = useRef();

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
            toggleShowModal()
        }
    }, [toggleShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    const fadeInAnimation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)`: `translateY(-100%)`
    })

    // close the modal, when click outside of the ModalWrapper
    // @ts-ignore
    const closeModal = e => {
        if(modalRef.current === e.target) {
            toggleShowModal()
        }
    }

    return (
        <>
            {showModal ?
                (
                    // @ts-ignore
                    <Background ref={modalRef} onClick={closeModal}>
                        <animated.div style={fadeInAnimation}>
                            <ModalWrapper centered={centered}>
                                {children}
                                <CloseModalButton
                                    aria-label='Close modal'
                                    onClick={toggleShowModal}
                                />
                            </ModalWrapper>
                        </animated.div>
                    </Background>
                )
                :
                null
            }

        </>
    )
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: none;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  bottom: 0;
`

interface IModalWrapper {
    centered: boolean
}
const ModalWrapper = styled.div<IModalWrapper>`
  width: 900px;
  height: 562px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${myColors.light_purple};
  background-image: url(${OgerImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  z-index: 1;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  color: ${myColors.white};
  border: ${myColors.primary} 5px solid;

  @media screen and (max-width: ${pageSizes.xl}) { {
    width: 600px;
    height: 375px;
  }
    
  @media screen and (max-width: ${pageSizes.md}) { {
    width: 400px;
    height: 250px;

  }
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`