import styled from "styled-components";
import {myColors} from "../../../resources/styling-constants";


interface IHeroContainer {
    img: any
}
export const HeroContainer = styled.div<IHeroContainer>`
  background-image:  url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`

export const HeroMale = styled.img`
    position: absolute;
    top: 270px;
    left: -20px;
    height: 800px;
`

// animation: ${({ speed, rightDirection }) => `scroll-${rightDirection ? 'right' : 'left'} ${speed}s linear infinite`};
export const FrogEyeRight = styled.img`
  animation: eye-move-left 3s linear infinite;
  position: absolute;
  top: 612px;
  left: 144px;
  height: 1.5%;
  @keyframes eye-move-left
  {
    0% {
      top: 605px;
      left: 148px;
    }
    
    13% {
      top: 609px;
      left: 154px;
    }

    25% {
      top: 612px;
      left: 144px;

    }
    
    37% {
      top: 615px;
      left: 152px;
    }
    
    50% {
      top: 618px;
      left: 148px;
    }

    63% {
      top: 615px;
      left: 146px;
    }

    75% {
      top: 612px;
      left: 157px;
    }

    88% {
      top: 608px;
      left: 146px;
    }
    
    100% {
      top: 605px;
      left: 148px;
    }
  }
`

export const FrogEyeLeft = styled.img`
  animation: eye-move-right 4s linear infinite;
  position: absolute;
  top: 618px;
  left: 178px;
  height: 1.5%;
  @keyframes eye-move-right
  {
    0% {
      top: 618px;
      left: 178px;
    }
    
    13% {
      top: 615px;
      left: 176px;
    }

    25% {
      top: 612px;
      left: 174px;
    }
    
    37% {
      top: 615px;
      left: 180px;

    }
    
    50% {
      top: 605px;
      left: 178px;
    }

    63% {
      top: 609px;
      left: 182px;
    }

    75% {
      top: 612px;
      left: 184px;
    }

    88% {
      top: 608px;
      left: 176px;
    }
    
    100% {
      top: 618px;
      left: 178px;
    }
  }
`