import styled from "styled-components";
import { ReactComponent as phone } from "../../assets/icon/phone.svg";
import { ReactComponent as email } from "../../assets/icon/email.svg";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    width: 100%;
    height: 600px;
    background-color: var(--primaryColor);
`

const Wrapper = styled.div`
    position: relative;
    width:800px;
    height: 600px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.div`
    width: 100%;
    height: 600px;
    background-color:rgba(255, 255, 255, 0.598);
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 80px;
    .title{
    text-align: center;
    background: none;
    width: 600px;
    @media (max-width:675px){
        width: 300px;
        font-size: 30px;
    }
    &:hover{
        color:var(--primaryColor) ;
        cursor: pointer;
    }
    }
    .ruler{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        background-color: #ffffff;
        border: 8px solid var(--primaryColor);
        border-radius: 50%;
        .icon{
            width: 50px;
            height: 50px;
        }
    }
    .small-description{
        @media (max-width:675px){
            font-size: 12px;
        }
    }
`

Title.email = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    /* @media (max-width:424px) {
        flex-direction: column;  
    } */
    .hr{
        @media (max-width:424px) {
            display: none;
        }
    }
    a{
        margin-left: -25px;
        text-decoration: none;
        &:hover{
            color: var(--primaryColor);
        }
    }
    .hr{
        width: 2px;
        height: 30px;
        background-color: var(--primaryColor);
    }
   

`
const Icon = styled.img``

Icon.Phone = styled (phone)`
    width: 30px;
    height: 30px;
    @media (max-width:675px){
        width: 20px;
        height: 20px;
    }
`
Icon.Email = styled (email)`
    width: 30px;
    height: 30px;
    @media (max-width:675px){
        width: 20px;
        height: 20px;
    }
`
const Img = styled.img`
    top: 0;
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 600px;
`

export {Container,Wrapper,Title,Icon,Img}