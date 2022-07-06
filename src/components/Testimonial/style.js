
import styled from "styled-components";
import AliceCarousel from 'react-alice-carousel';
import { ReactComponent as star } from "../../assets/icon/star.svg";


const Container = styled.div`
    width: 100%;
    height: fit-content;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    @media screen and (max-width:1365px){
        height: 1300px;
    }
    @media screen and (max-width:690px){
        height: 1300px;
    }
    @media(max-width:670px){
        height: 800px;
    }
    @media(max-width:670px){
        height: 800px;
    }
    @media(max-width:570px){
        height: 650px;
    }
`
const Wrapper = styled.div`
    display: flex;    
    height: 700px;
    margin-left: 60px; 
    margin-top:50px;
    /* width: 1440px; */
    @media screen and (max-width:1365px){
        flex-direction: column;
        margin-left: 0;  

    }

`
const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
Description.Title = styled.div`
    .small-description{
        color: var(--primaryColor);
        /* @media(max-width:800px){
            margin:0 0 0 10%
        } */
       
    }
    .hr{
        width: 200px;
        height: 5px;
        background-color: var(--primaryColor);
        border-radius: 3px;
    }
    .title{
        @media(max-width:800px){
            font-size:25px;
        }
        @media(max-width:670px){
            font-size:20px;
        }
        @media(max-width:570px){
            font-size: 16px;
        }
    }
    .description{
        margin-top: 30px;
        width: 600px;     
        @media(max-width:670px){
            font-size:18px;
            width: 450px;
        }
        @media(max-width:570px){
            font-size: 15px;
            width: 300px;
        }
    }
`

Description.Card = styled.div`
    @media(max-width:670px){
        display: none;
    }
`

const WrapCar = styled.div`
  margin: 50px 0px;
  width: 600px;
  position: relative;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
    .alice-carousel{
        width: 100%;
    }
    .alice-carousel__dots-item{
        display: none;
    }
    .alice-carousel__dots-item.__active{
        display: none;
    }
`
const Carousel = styled(AliceCarousel)`
    display: flex;
    user-select: none;
`;

const Card = styled.div`
padding: 20px;
  width: 370px;
  height: 382px;
  position: relative;
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
`

const Title = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
`
Title.Img = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    
`

Title.Des = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    
    .small-description{
        position: relative;
        top: 15px;        
    }
    .sub-title{
        color:var(--primaryColor) ;
    }
`

const Des = styled.div`
    margin-top: 30px;
    .description{
        width: 500px;
    }
`

const Icon = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    gap: 10px;
    .descriptions{
        color:var(--primaryColor) ;
        font-size: 20px;
        font-weight: 700px;
    }
`

const Star = styled(star)`
    width: 20px;
    height: 20px;
`

const Teacher = styled.div`
    text-align: center;
    img{
        margin-top: 85px;
        width: 600px;
        margin-top: 0;
        @media screen and (max-width:690px){
            width: 500px;
        }
        @media(max-width:570px){
            width: 300px;
        }
    }
`




export {Container,Wrapper,Teacher,Description,WrapCar,Card,Des,Title,Carousel,Star,Icon}