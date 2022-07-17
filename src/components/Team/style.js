
import styled  from "styled-components";
import AliceCarousel from 'react-alice-carousel';


const Card = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
  width: 370px;
  height: 382px;
  /* left: 55px; */
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
  /* @media screen and (max-width:1366px){
  position: relative;
    left: 70px;
} */
`
const Imgs = styled.img`
    transition-duration: 0.5s;
    width: 300px;
    /* &:hover{
        filter: brightness(40%);
    } */

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
        /* line-height:50px; */
        @media (max-width:675px){
            width: 310px;
            font-size: 25px;
        }
    }
    .color{
        margin-bottom: 20px;
        color: var(--primaryColor);
        @media (max-width:675px){
            font-size: 15px;
        }
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* text-align: center; */
  /* width: 1440px; */
  /* position: relative; */
  height: fit-content;
  button{
    @media (max-width:570px){
        display: none;
    }
  }
`
const Carousel = styled(AliceCarousel)`
    display: flex;
    width: 100%;
    user-select: none;
`;


const Border = styled.div`
    width:fit-content; 
    height:fit-content;
    opacity: 0;
    margin-top: 36px;
    background: none;
    position: absolute;
    display: flex;
    /* z-index: 1000; */
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
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;
    overflow: hidden;
    position: absolute;
    user-select: none;
    .small-description{
        width: 100%;
        margin-left: auto;
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