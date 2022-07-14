import styled from "styled-components";
import Popup from 'reactjs-popup';

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  .popup-content{
    position: absolute;
    z-index: 999;
    pointer-events: auto;
    top: 5437.77px;
    left: 0px;

  }
 
`

const Wrapper = styled.div`
  padding:0 130px;
  border-radius: 3px;
  z-index: 1;
  width: 1200px;
  height: 500px;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 0px 18px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 18px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 18px 0px rgba(34, 60, 80, 0.2);
  @media screen and (max-width:900px){
    height: fit-content;
    flex-direction: column;
    gap: 20px;
  }
`

const Register = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  input{
    border: 1px solid #ddd;
    background-color: white;
    width: 400px;
    height: 50px; 
    font-size: 17px;
    padding-left: 20px;
    border-radius: 5px;
    outline: none;
    @media screen and (max-width:500px){
      width:250px;
      height: 40px;
      font-size: 15px;
    }
  }
  textarea{
    border: 1px solid #ddd;
    background-color: white;
    width: 600px;
    font-size: 17px;
    padding-top: 20px;
    padding-left: 20px;
    outline: none;
    border-radius: 5px;
    height: 150px;
  }
`

const Img = styled.img`
  width: 400px;
  height: 400px;
  @media screen and (max-width:500px){
      width:250px;
      height: 250px;
      font-size: 15px;
    }
`
const Button =styled.button`
  height: 30px;
  background-color: var(--primaryColor);
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-weight: 600;
  opacity: 1;
  &:disabled{
    /* background-color: var(--secondaryColor); */
    opacity: 0.4;

  }
  &:active{
  }
`
const Alert =styled(Popup)`
  /* border: 1px solid red;
  width: 500px;
  height: 500px; */
  /* element.style {
    position: absolute;
    z-index: 999;
    pointer-events: auto;
    top: 6520.39px;
    left: 320px;
  } */
`
const Xabar =styled.div`
  font-size: 18px;
  color: var(--primaryColor);
  /* border: 1px solid red; */
`


export  {Container,Wrapper,Register,Img,Button,Xabar,Alert}