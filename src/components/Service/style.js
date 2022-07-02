import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";

const Card = styled.div`
  width: 370px;
  height: 382px;
  position: relative;
  left: 55px;
  .card_text {
    margin-top: 20px;
    color: white;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
  }
`;
const Imgs = styled.img`
  transition-duration: 0.5s;
`;

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .title {
    width: 600px;
    line-height: 50px;
  }
  .color {
    margin-bottom: 20px;
    color: var(--primaryColor);
  }
  .border {
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
  position: relative;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  .alice-carousel {
    width: 100%;
  }
  .alice-carousel__dots-item {
    background: #ff491758;
    border-radius: 0%;
    width: 10px;
    height: 10px;
    &:hover {
      background: var(--primaryColor);
    }
  }
  .alice-carousel__dots-item.__active {
    background: var(--primaryColor);
    border-radius: 0%;
  }
`;
const Carousel = styled(AliceCarousel)`
  display: flex;
  width: 100%;
  user-select: none;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin-top: -7px;
  height: 211px;
  `;

const Text = styled.div`
  width: 1px;
  padding: 30px;
  height: 211px;
  color: black;
  border-left: 3px solid var(--primaryColor);
  p {
    width: 300px;
  }
  transition: all 1s;

  :hover {
    width: 350px;
    border: none;
    background-color: var(--secondaryColor);
    p {
      color: white;
    }
  }
`;

const Border = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--secondaryColor);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  position: absolute;
  top: 360px;
`;

export { Container, Carousel, Wrapper, Card, Imgs, Texts, Text, Border };
