
import styled from "styled-components";
import AliceCarousel from 'react-alice-carousel';
import { ReactComponent as star } from "../../assets/icon/star.svg";


const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 790px;
    margin-left: 95px;
    width: 100%;
    height: 100px;
    @media screen and (max-width:1366px){
        margin-left: 0px;
        margin-bottom: 600px;
    }
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 700px;
    width: 1440px;
    @media screen and (max-width:1366px){
    max-width: 1200px;
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
    }
    .hr{
        width: 200px;
        height: 5px;
        background-color: var(--primaryColor);
        border-radius: 3px;
    }
    .description{
        margin-top: 30px;
        width: 600px;
    }
`

Description.Card = styled.div``

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
    /* justify-content: center; */
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
        @media screen and (max-width:1366px){
            top: 8px;
        }
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
    margin-right: 80px;
    img{
        margin-top: 85px;
    @media screen and (max-width:1366px){
        width: 600px;
        margin-top: 0px;
        margin-bottom: 150px;
    }
    @media screen and (max-width:1366px){
        width: 600px;
        margin-top: 0px;
        margin-bottom: 150px;
    }
    }
`




export {Container,Wrapper,Teacher,Description,WrapCar,Card,Des,Title,Carousel,Star,Icon}