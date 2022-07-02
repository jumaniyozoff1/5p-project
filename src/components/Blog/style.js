import styled  from "styled-components";
import AliceCarousel from 'react-alice-carousel';

import { ReactComponent as LeftArrow} from '../../assets/icon/Left.svg'
import { ReactComponent as RightArrow} from '../../assets/icon/Right.svg'


const Card = styled.div`
  max-width: 390px;
  width: fit-content;
  height: 580px;
  position: relative;
  left: 55px;
  -webkit-box-shadow: 0px 0px 12px 1px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 12px 1px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 12px 1px rgba(34, 60, 80, 0.2);
  .card_text{
  margin-top: 20px;
  color: white;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  text-align: center
  }
  @media screen and (max-width:1366px){
    max-width: 300px;
    width: 100%;
    height: 440px;
    left: 75px;
  }
`
const Imgs = styled.img`
transition-duration: 0.5s;
    &:hover{
        filter: brightness(40%);
    }
    @media screen and (max-width:1366px){
    max-width: 350px;
    width: 100%;
  }
`

const Container = styled.div`
    margin-top:  100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .title{
        width: 600px;
        line-height:50px;
    }
    .color{
        margin-bottom: 20px;
        color: var(--primaryColor);
    }
    .border{
        margin-top: 20px;
        width: 200px;
        height: 5px;
        background-color: var(--primaryColor);
        display: flex;
    }
`;
const Wrapper = styled.div`
  margin: 32px 0px;
  width: 1440px;
  position: relative;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
    .alice-carousel{
      width: 100%;
      @media screen and (max-width:1366px){
      max-width: 1340px;
      width: 100%;
      height: 500px;
    }
    }
    .alice-carousel__dots-item{
        background: #ff491758;
        border-radius: 0%;
        width: 10px;
        height: 10px;
        &:hover{
            background: var(--primaryColor);
        }
        @media screen and (max-width:1366px){
            width: 8px;
            height: 8px;
            margin-bottom:100px;
        }
    }
    .alice-carousel__dots-item.__active{
        background: var(--primaryColor);
        border-radius: 0%;
    }
    .alice-carousel__stage-item{
        margin-top: 10px;
        height: 600px;
    }
    @media screen and (max-width:1366px){
    max-width: 1340px;
    width: 100%;
  }
`

const Icon = styled.div``;

Icon.Left = styled(LeftArrow)`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 47%;
	left: -90px;
	transform: translate(100%, -50%);
	width: 45px;
	height: 45px;
	padding: 12px;
	color: white;
	background: white;
	padding: 12px;
	/* opacity: 0.5; */
	border-radius: 50%;
	z-index: 999;
	cursor: pointer;
    border: 1px solid #E6E9EC;
    -webkit-box-shadow: 0px 0px 11px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 11px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 11px 2px rgba(34, 60, 80, 0.2);
	:hover {
		/* opacity: 0.77; */
    background-color: var(--primaryColor);
    fill: #ffffff;
	}
	& path {
		fill: #0d263b;
	}
    @media screen and (max-width:1366px){
        left: -25px;
        top: 40%;
        width: 35px;
        height: 35px;
    }
`;
Icon.Right = styled(RightArrow)`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 46%;
	right: -100px;
	transform: translate(-100%, -40%);
	width: 45px;
	height: 45px;
	padding: 12px;
	color: white;
	background: white;
	padding: 12px;
	/* opacity: 0.5; */
	border-radius: 50%;
	z-index: 999;
	cursor: pointer;
    -webkit-box-shadow: 0px 0px 11px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 11px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 11px 2px rgba(34, 60, 80, 0.2);
        border: 1px solid #E6E9EC;
	:hover {
		/* opacity: 0.97; */
    background-color: var(--primaryColor);
    fill: #ffffff;
	}
	& path {
		fill: #0d263b;
	}
    @media screen and (max-width:1366px){
        right: -25px;
        top: 40.5%;
        width: 35px;
        height: 35px;
  }
`;


const Carousel = styled(AliceCarousel)`
    display: flex;
    width: 100%;
    user-select: none;
    .alice-carousel__stage-item{
		border: 1px solid red;
	}
`;

const Btn = styled.div`
    position: absolute;
    top: 0px;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.div`
    padding: 20px;
    .small-description{
        @media screen and (max-width:1366px){
            font-size: 15px;
        }
    }
    .description{
        font-size: 12px;
    }
`
Title.Description = styled.div`
margin-bottom: 20px;
    .description{
        margin-top: 10px;
    }
    .small-description{
        cursor: pointer;
        transition-duration: 1s;
        &:hover{
            color: var(--primaryColor);
        }
    }
`
Title.Footer = styled.div`
margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .active{
        color: black;
        cursor: pointer;
    }
`

export {Container,Carousel,Wrapper,Card,Imgs,Icon,Title,Btn}