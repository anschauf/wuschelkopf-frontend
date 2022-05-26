import styled from "styled-components";
import {pageSizes} from "../../../resources/styling-constants";

export const HeroDiv = styled.div`
    display: flex;
    flex-direction: column;
    //border: red solid 4px;
    width: 100%;
    height: 300px;
    flex: 1;
    align-items: center;
    justify-content: center;
  
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
    height: 10px;
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
    height: 10px;
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