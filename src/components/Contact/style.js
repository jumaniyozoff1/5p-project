
import styled from "styled-components";
const Container = styled.div`
  /* max-width: 1440px; */
  position: relative;
  margin-top: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

const Wrapper = styled.div`
  border-radius: 3px;
  z-index: 1;
  max-width: 1350px;
  width: 100%;
  height: 700px;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid red; */
  background-color: #ffffff;
  -webkit-box-shadow: 0px 0px 18px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 18px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 18px 0px rgba(34, 60, 80, 0.2);
  @media screen and (max-width:1366px){
    max-width: 1200px;
    height: 600px;
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
    width: 600px;
    height: 50px;
    font-size: 17px;
    padding-left: 20px;
    border-radius: 5px;
    outline: none;
    @media screen and (max-width:1366px){
      width: 550px;
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
    @media screen and (max-width:1366px){
      width: 500px;
  }
`



export  {Container,Wrapper,Register,Img}