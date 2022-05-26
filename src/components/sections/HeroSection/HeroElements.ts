import styled from "styled-components";
import {pageSizes, spacing, myColors, fontSizes} from "../../../resources/styling-constants";

export const HeroContainer = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  
  
  @media screen and (max-width: ${pageSizes.sm}) {
    flex-direction: column;
    flex: 1;
  }
`




export const MonitorRightCointainer = styled.div`
  border: blue solid 5px;
  position: absolute;
  width: 600px;
  height: 600px;
  top: 300px;
  right: 6%;
  z-index: 10;
    @media screen and (max-width: ${pageSizes.sm}) {
      display: none;
    }
`

export const HeroMale = styled.img`
  position: relative;
  //top: 180px;
  //left: 50px;
  //right: -17px;
  height: 800px;
  z-index: 10;

  @media screen and (max-width: ${pageSizes.xl}) {
    top: 380px;
    right: -20px;
    height: 600px;
  }

  @media screen and (max-width: ${pageSizes.lg}) {
    top: 240px;
    left: -40px;
    height: 450px;
  }

  @media screen and (max-width: ${pageSizes.sm}) {
    top: 30px;
    left: -40px;
    height: 320px;
  }
`

// animation: ${({ speed, rightDirection }) => `scroll-${rightDirection ? 'right' : 'left'} ${speed}s linear infinite`};
export const FrogEyeRight = styled.img`
  //animation: eye-move-right-xl 7s linear infinite;
  animation: none;
  position: absolute;
  //top: 528px;
  //left: 1289px;
  height: 1.5%;
  z-index: 12;

  @media screen and (max-width: ${pageSizes.xl}) {
    //animation: eye-move-right-lg 7s linear infinite;
    animation: none;
    top: 434px;
    right: 100px;
    height: 1.2%;
  }

  @media screen and (max-width: ${pageSizes.lg}) {
    animation: eye-move-right-sm 7s linear infinite;
    top: 430px;
    left: 57px;
    height: 0.9%;
  }

  @media screen and (max-width: ${pageSizes.sm}) {
    //animation: none;
    animation: eye-move-right-xs 9s linear infinite;
    position: relative;
    top: 165px;
    left: 28px;
    height: 3%;
  }
  
  @keyframes eye-move-right-xl
  {
    0% {
      top: 528px;
      left: 1289px;
    }

    13% {
      top: 528px;
      left: 1294px;
    }

    25% {
      top: 519px;
      left: 1294px;
    }

    37% {
      top: 522px;
      left: 1295px;
    }

    50% {
      top: 522px;
      left: 1295px;
    }

    63% {
      top: 519px;
      left: 1294px;
    }

    75% {
      top: 528px;
      left: 1289px;
    }

    88% {
      top: 519px;
      left: 1294px;
    }

    100% {
      top: 528px;
      left: 1289px;
    }
  }

  @keyframes eye-move-right-lg{
    0% {
      top: 432px;
      left: 87px;
    }

    13% {
      top: 440px;
      left: 87px;
    }

    25% {
      top: 436px;
      left: 83px;
    }

    37% {
      top: 434px;
      left: 82px;
    }

    50% {
      top: 434px;
      left: 84px;
    }

    63% {
      top: 440px;
      left: 87px;
    }

    75% {
      top: 440px;
      left: 87px;
    }

    88% {
      top: 440px;
      left: 87px;
    }

    100% {
      top: 432px;
      left: 87px;
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

  @keyframes eye-move-right-xs {
    0% {
      top: 165px;
      left: 28px;
    }

    13% {
      top: 167px;
      left: 26px;
    }

    25% {
      top: 165px;
      left: 28px;
    }

    37% {
      top: 167px;
      left: 26px;
    }

    50% {
      top: 169px;
      left: 29px;
    }

    63% {
      top: 169px;
      left: 29px;
    }

    75% {
      top: 165px;
      left: 26px;
    }

    88% {
      top: 167px;
      left: 28px;
    }

    100% {
      top: 165px;
      left: 28px;
    }
  }
`

export const FrogEyeLeft = styled.img`
  //animation: none;
  animation: eye-move-left-xl 4s linear infinite;
  position: absolute;
  top: 519px;
  left: 1323px;
  height: 1.5%;

  @media screen and (max-width: ${pageSizes.xl}) {
    animation: eye-move-left-lg 4s linear infinite;
    top: 436px;
    left: 113px;
    height: 1.2%;
  }

  @media screen and (max-width: ${pageSizes.lg}) {
    animation: eye-move-left-sm 4s linear infinite;
    top: 435px;
    left: 73px;
    height: 0.9%;
  }

  @media screen and (max-width: ${pageSizes.sm}) {
    animation: eye-move-left-xs 8s linear infinite;
    position: relative;
    top: 167px;
    left: 35px;
    height: 3%;
  }
  
  @keyframes eye-move-left-xl
  {
    0% {
      top: 517px;
      left: 1319px;
    }

    13% {
      top: 529px;
      left: 1319px;
    }

    25% {
      top: 517px;
      left: 1319px;
    }

    37% {
      top: 525px;
      left: 1313px;
    }

    50% {
      top: 517px;
      left: 1319px;
    }

    63% {
      top: 518px;
      left: 1313px;
    }

    75% {
      top: 517px;
      left: 1315px;
    }

    88% {
      top: 519px;
      left: 1323px;
    }

    100% {
      top: 517px;
      left: 1319px;
    }
  }

  @keyframes eye-move-left-lg {
    0% {
      top: 432px;
      left: 108px;
    }

    13% {
      top: 436px;
      left: 108px;
    }

    25% {
      top: 436px;
      left: 108px;
    }

    37% {
      top: 436px;
      left: 103px;
    }

    50% {
      top: 436px;
      left: 103px;
    }

    63% {
      top: 436px;
      left: 113px;
    }

    75% {
      top: 436px;
      left: 108px;
    }

    88% {
      top: 436px;
      left: 108px;
    }

    100% {
      top: 432px;
      left: 108px;
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

  @keyframes eye-move-left-xs {
    0% {
      top: 165px;
      left: 33px;
    }

    13% {
      top: 167px;
      left: 35px;
    }

    25% {
      top: 169px;
      left: 33px;
    }

    37% {
      top: 167px;
      left: 35px;
    }

    50% {
      top: 165px;
      left: 33px;
    }

    63% {
      top: 169px;
      left: 33px;
    }

    75% {
      top: 167px;
      left: 35px;
    }

    88% {
      top: 167px;
      left: 35px;
    }

    100% {
      top: 165px;
      left: 33px;
    }
  }
`

export const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  z-index: 1;
  @media screen and (max-width: ${pageSizes.sm}) {
    height: 260px;
  }
`

export const HeroTitle = styled.h1`
    color: ${myColors.primary};
    padding: ${spacing.double};
    font-size: ${fontSizes.title_xl};
    font-family: 'Permanent Marker',cursive;
    font-weight: bolder;

      @media screen and (max-width: ${pageSizes.xl}) {
        font-size: ${fontSizes.title_lg};
      }

      @media screen and (max-width: ${pageSizes.sm}) {
        font-size: ${fontSizes.title_sm};
      }
`



export const MonitorLeftContainer = styled.div`
  position: absolute;
  top: 300px;
  left:100px;
  width: 600px;
  height: 750px;
  z-index: 10;
  
  @media screen and (max-width: ${pageSizes.sm}) {
    display: none;
  }
`

export const HeroFemale = styled.img`
  position: relative;
  //top: 140px;
  left: -60px;
  height: 720px;

  @media screen and (max-width: ${pageSizes.xl}) {
    top: 380px;
    left: 60%;
    height: 540px;
  }

  @media screen and (max-width: ${pageSizes.lg}) {
    top: 420px;
    left: 55%;
    height: 380px;
  }

  @media screen and (max-width: ${pageSizes.sm}) {
    height: 310px;
    top: 60px;
    left: -60px;
  }
`

export const WindWheel = styled.img`
  position: absolute;
  top: 200px;
  left: 25px;
  height: 170px;

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
    top: 140px;
    left: -30px;
    height: 70px;
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

export const MobileImageWrapper = styled.div`
    {
      display: none;
      margin-top: 280px;
      margin-bottom: 50px;

      @media screen and (max-width: ${pageSizes.sm}) {
        display: flex;
        width: 100%;
      }
    }
`

export const MobileLeftContainer = styled.div`
    position: relative;
    width: 50%;
    display: flex;
`

export const MobileRightContainer = styled.div`
    position: relative;
    display: flex;
    width: 50%;
`

export const MintingCount = styled.p`
    padding: ${spacing.default};
`

export const ColorSpan = styled.span`
    color: ${myColors.danger};
`