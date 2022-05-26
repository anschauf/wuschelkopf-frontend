import styled from "styled-components";
import {pageSizes} from "../../../resources/styling-constants";

export const NewHeroContainer = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 1100px;
  
  //max-height: 1100px;
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


export const FigureWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  
`
export const TitleWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

`

export const MobileFigureWrapper = styled.div`
  display: none;
  @media screen and (max-width: ${pageSizes.sm}) {
    position: absolute;
    top: 540px;
    
    display: flex;
    flex-direction: row;
    width: 100%;
    flex: 1;
    justify-content: space-around;
  }
 
`

export const NewHeroMale = styled.img`
    position: relative;
    top: 100px;
    height: 600px;

  @media screen and (max-width: ${pageSizes.xl}) {
    top: 150px;
    left: -50px;
    height: 500px;
  }

  @media screen and (max-width: ${pageSizes.lg}) {
    height: 310px;
    top: 230px;
    left: -150px;
  }

  @media screen and (max-width: ${pageSizes.sm}) {
    position: relative;
    top: 0px;
    left: 0;
    //right: 1%;
    height: 260px;
  }
`

export const NewLeftEye = styled.img`
  position: relative;
  top: -158px;
  left: -183px;
  height: 15px;

  @media screen and (max-width: ${pageSizes.xl}) {
    top: -65px;
    left: -202px;
    height: 12px;
  }

  @media screen and (max-width: ${pageSizes.lg}) {
    top: 97px;
    left: -244px;
    height: 7px;
  }

  @media screen and (max-width: ${pageSizes.sm}) {
    top: -112px;
    left: -92px;
    height: 6px;
  }
`

export const NewRightEye = styled.img`
  position: relative;
  top: -173px;
  left: -212px;
  height: 15px;

  @media screen and (max-width: ${pageSizes.xl}) {
    top: -78px;
    left: -227px;
    height: 12px;
  }

  @media screen and (max-width: ${pageSizes.lg}) {
    top: 89px;
    left: -259px;
    height: 7px;
  }

  @media screen and (max-width: ${pageSizes.sm}) {
    top: -118px;
    left: -79px;
    height: 6px;
  }
`



export const NewHeroFemale = styled.img`
    position: relative;
    left: 70px;
    top: 200px;
    height: 700px;

  @media screen and (max-width: ${pageSizes.xl}) {
    left: 100px;
    top: 130px;
    height: 500px;
  }

  @media screen and (max-width: ${pageSizes.lg}) {
    height: 340px;
    top: 250px;
    left: 150px;
  }

  @media screen and (max-width: ${pageSizes.sm}) {
    position: relative;
    top: 130px;
    left: 20px;
    height: 250px;
  }
`

export const NewWindWheel = styled.img`
    position: relative;
    height: 170px;
    top: -330px;
    left: -190px;
  
    animation: spinning 20s linear infinite;

  @media screen and (max-width: ${pageSizes.xl}) {
    top: -250px;
    left: -85px;
    height: 140px;
  }

  @media screen and (max-width: ${pageSizes.lg}) {
    top: -26px;
    left: 24px;
    height: 100px;
  }

  @media screen and (max-width: ${pageSizes.sm}) {
    top: -58px;
    left: -72px;
    height: 60px;
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

export const MobileFigure = styled.div`
`