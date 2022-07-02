
import styled  from "styled-components";
import AliceCarousel from 'react-alice-carousel';


const Card = styled.div`
  width: 370px;
  height: 382px;
  position: relative;
  left: 55px;
  .card_text{
  margin-top: 20px;
  color: white;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  }
  @media screen and (max-width:1366px){
  position: relative;
        left: 70px;
}
`
const Imgs = styled.img`
transition-duration: 0.5s;
    &:hover{
        filter: brightness(40%);
    }
    @media screen and (max-width:1366px){
        width: 300px;
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
      height: 350px;
    }
    }
    @media screen and (max-width:1366px){
      max-width: 1340px;
      display: flex;
      align-items: center;
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
`
const Carousel = styled(AliceCarousel)`
    display: flex;
    width: 100%;
    user-select: none;
`;


const Border = styled.div`
    width:100%;
    height: 100%;
    /* height: 80px; */
    opacity: 0;
    background: none;
    position: absolute;
    display: flex;
    z-index: 1000;
    top: 0%;
    flex-direction: column;
    justify-content: center;
    transition-duration: 0.5s;
    user-select: none;
        .description{
            color: #000000;
            font-weight: 600;
        }
        &:hover{
            background: #ff491758;
            opacity: 1;
        }
        @media screen and (max-width:1366px){
        width: 300px;
        height: 310px;
    }
`

const BorderName = styled.div`
    top: 313px;
    width: 200px;
    padding-left: 10px;
    height: 70px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #ffffff;
    overflow: hidden;
    position: absolute;
    user-select: none;
    .small-description{
        transition-duration: 1s;
        cursor: pointer;
        &:hover{
            color: var(--primaryColor);
        }
        @media screen and (max-width:1366px){
            font-size: 15px;
        }
    }
    .description{
        @media screen and (max-width:1366px){
            font-size: 12px;
        }
    }
    @media screen and (max-width:1366px){
        top: 250px;
        width: 170px;
        height: 60px;
    }
`

export {Container,Carousel,Wrapper,Card,Imgs,Border,BorderName}