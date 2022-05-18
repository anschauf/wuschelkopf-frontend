import styled from "styled-components";
import {myColors} from "../../../resources/styling-constants";
import {pageSizes} from "../../../resources/styling-constants";

export const HeroContainer = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  display: flex;
`

export const LeftContainer = styled.div`
  //background-color: red;
  position: relative;
`

export const HeroMale = styled.img`
  position: absolute;
  top: 120px;
  left: 50px;
  height: 800px;

  @media screen and (max-width: ${pageSizes.xl}) {
    top: 180px;
    left: 40px;
    height: 600px;
  }

  @media screen and (max-width: ${pageSizes.lg}) {
    top: 240px;
    left: -40px;
    height: 450px;
  }

  @media screen and (max-width: ${pageSizes.sm}) {
    height: 10px;
  }
`

// animation: ${({ speed, rightDirection }) => `scroll-${rightDirection ? 'right' : 'left'} ${speed}s linear infinite`};
export const FrogEyeRight = styled.img`
  animation: eye-move-right-xl 7s linear infinite;
  position: absolute;
  top: 468px; // 612
  left: 219px; // 144
  height: 1.5%;

  @media screen and (max-width: ${pageSizes.xl}) {
    animation: eye-move-right-lg 7s linear infinite;
    top: 434px;
    left: 164px;
    height: 1.2%;
  }

  @media screen and (max-width: ${pageSizes.lg}) {
    animation: eye-move-right-sm 7s linear infinite;
    top: 430px;
    left: 57px;
    height: 0.9%;
  }
  
  @keyframes eye-move-right-xl
  {
    0% {
      top: 457px;
      left:  219px;
    }

    13% {
      top: 468px;
      left: 214px;
    }

    25% {
      top: 462px;
      left: 225px;

    }

    37% {
      top: 462px;
      left: 222px;
    }

    50% {
      top: 462px;
      left: 214px;

    }

    63% {
      top: 459px;
      left: 222px;
    }

    75% {
      top: 468px;
      left: 214px;
    }

    88% {
      top: 468px;
      left: 219px;
    }

    100% {
      top: 457px;
      left: 218px;
    }
  }

  @keyframes eye-move-right-lg{
    0% {
      top: 432px;
      left: 167px;
    }

    13% {
      top: 440px;
      left: 167px;
    }

    25% {
      top: 436px;
      left: 163px;
    }

    37% {
      top: 434px;
      left: 172px;
    }

    50% {
      top: 434px;
      left: 164px;
    }

    63% {
      top: 440px;
      left: 167px;
    }

    75% {
      top: 440px;
      left: 167px;
    }

    88% {
      top: 440px;
      left: 167px;
    }

    100% {
      top: 432px;
      left: 167px;
    }
  }
  
  @keyframes eye-move-right-sm {
    0% {
      top: 430px;
      left: 55px;
    }

    13% {
      top: 436px;
      left: 55px;
    }

    25% {
      top: 436px;
      left: 55px;
    }

    37% {
      top: 433px;
      left: 58px;
    }

    50% {
      top: 430px;
      left: 57px;
    }

    63% {
      top: 430px;
      left: 57px;
    }

    75% {
      top: 430px;
      left: 57px;
    }

    88% {
      top: 436px;
      left: 55px;
    }

    100% {
      top: 430px;
      left: 55px;
    }
  }
`

export const FrogEyeLeft = styled.img`
  animation: eye-move-left-xl 4s linear infinite;
  position: absolute;
  top: 463px;
  left: 255px;
  height: 1.5%;

  @media screen and (max-width: ${pageSizes.xl}) {
    animation: eye-move-left-lg 4s linear infinite;
    top: 436px;
    left: 193px;
    height: 1.2%;
  }

  @media screen and (max-width: ${pageSizes.lg}) {
    animation: eye-move-left-sm 4s linear infinite;
    top: 435px;
    left: 73px;
    height: 0.9%;
  }
  
  @keyframes eye-move-left-xl
  {
    0% {
      top: 457px;
      left: 249px;
    }

    13% {
      top: 466px;
      left: 243px;
    }

    25% {
      top: 463px;
      left: 249px;
    }

    37% {
      top: 463px;
      left: 249px;
    }

    50% {
      top: 463px;
      left: 249px;
    }

    63% {
      top: 458px;
      left: 253px;
    }

    75% {
      top: 463px;
      left: 255px;
    }

    88% {
      top: 457px;
      left: 249px;
    }

    100% {
      top: 457px;
      left: 249px;;
    }
  }

  @keyframes eye-move-left-lg {
    0% {
      top: 432px;
      left: 188px;
    }

    13% {
      top: 436px;
      left: 188px;
    }

    25% {
      top: 436px;
      left: 188px;
    }

    37% {
      top: 436px;
      left: 183px;
    }

    50% {
      top: 436px;
      left: 183px;
    }

    63% {
      top: 436px;
      left: 193px;
    }

    75% {
      top: 436px;
      left: 188px;
    }

    88% {
      top: 436px;
      left: 188px;
    }

    100% {
      top: 432px;
      left: 188px;
    }
  }

  @keyframes eye-move-left-sm {
    0% {
      top: 430px;
      left: 72px;
    }

    13% {
      top: 432px;
      left: 75px;
    }

    25% {
      top: 432px;
      left: 69px;
    }

    37% {
      top: 432px;
      left: 69px;
    }

    50% {
      top: 436px;
      left: 72px;
    }

    63% {
      top: 432px;
      left: 75px;
    }

    75% {
      top: 436px;
      left: 72px;
    }

    88% {
      top: 435px;
      left: 73px;
    }

    100% {
      top: 430px;
      left: 72px;
    }
  }
`

export const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`

export const RightCointainer = styled.div`
`


export const HeroFemale = styled.img`
  position: absolute;
  top: 180px;
  left: 1000px;
  height: 760px;

  @media screen and (max-width: ${pageSizes.xl}) {
    top: 280px;
    left: 60%;
    height: 540px;
  }

  @media screen and (max-width: ${pageSizes.lg}) {
    top: 420px;
    left: 55%;
    height: 380px;
  }

  @media screen and (max-width: ${pageSizes.sm}) {
    height: 10px;
  }
`

export const WindWheel = styled.img`
  position: absolute;
  top: 380px;
  left: 1060px;
  height: 200px;

  animation: spinning 20s linear infinite;

  @media screen and (max-width: ${pageSizes.xl}) {
    top: 420px;
    left: 62.5%;
    height: 150px;
  }

  @media screen and (max-width: ${pageSizes.lg}) {
    top: 510px;
    left: 58%;
    height: 100px;
  }

  @media screen and (max-width: ${pageSizes.sm}) {
    height: 20px;
  }
  
  
  
  @keyframes spinning {
    0% {
      -webkit-transform: rotate3d(0, 0, 1, 360deg);
      transform: rotate3d(0, 0, 1, 360deg);
    }
    25% {
      -webkit-transform: rotate3d(0, 0, 1, 270deg);
      transform: rotate3d(0, 0, 1, 270deg);
    }
    50% {
      -webkit-transform: rotate3d(0, 0, 1, 180deg);
      transform: rotate3d(0, 0, 1, 180deg);
    }
    75% {
      -webkit-transform: rotate3d(0, 0, 1, 90deg);
      transform: rotate3d(0, 0, 1, 90deg);
    }
    100% {
      -webkit-transform: rotate3d(0, 0, 1, 0deg);
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }
`