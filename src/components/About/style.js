import styled from "styled-components";
import {ReactComponent as Arrow} from '../../assets/icon/arrow.svg'

const Container = styled.div`
    margin-top: 100px;
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    @media(max-width:1365px){
       display: flex;
       flex-direction: column;
    
    }

`
const LeftWrap =styled.div`
    /* position: relative; */
    /* left:20px; */
    /* gap: 10px; */
    /* border: 1px solid red; */
    /* position: absolute; */
    /* @media(max-width:1366px){
        margin-top: 500px;
            
    } */
`
const Icon =styled.div``
Icon.Arrow =styled(Arrow)`
    width: 14px;
    height:14px;
    margin-top: 7px;
    fill:var(--primaryColor);
    @media(max-width:770px){
        height: 10px;
        width: 10px;
    }
    
`
    


const RightWrap =styled.div`
    display: flex;
    flex-direction: column;
    h2{
        color: var(--primaryColor);
        font-weight: 700;
        @media(max-width:770px){
            font-size: 15px;
            /* padding-left: 50px; */

        }
        @media(max-width:540px){
            font-size: 12px;
        }
        
        
    }
    h1{
        color: black;
        width: 550px;
        font-size: 36px;
        font-weight: 700;
        @media(max-width:770px){
            font-size: 30px;
        }
        @media(max-width:770px){
            font-size: 25px;
        }
        @media(max-width:590px){
            width: 400px;
            font-size: 20px;

        }
        @media(max-width:540px){
            width: 300px;
            font-size: 15px;
        }
    }
    .description{
        margin-top: 15px;
        width: 600px;
        @media(max-width:770px){
            width: 500px;
        }
        @media(max-width:670px){
            font-size: 18px;
            width: 400px;
        }
        @media(max-width:540px){
            font-size: 15px;
            width: 350px;
        }
        
    }
    h3{
        @media(max-width:770px){
            font-size: 13px;
        }
    }
    .we{
        @media(max-width:770px){
            font-size: 13px;
        }
    }
`
const Border =styled.div`
    height: 4px;
    width: 200px;
    background-color: var(--primaryColor);
    border-radius: 5px;

`
const Img =styled.img`
    user-select: none;
    height: 680px;
    @media(max-width:770px){
        height: 600px;

    }
    @media(max-width:670px){
        height: 500px;

    }
    @media(max-width:540px){
        height:380px;

    }
    @media(max-width:450px){
        height:350px;

    }
`

const Items  =styled.div`
    width: 600px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    span{
        display: flex;
        gap: 5px;
    }
    @media(max-width:700px){
        width: 450px;
        flex-direction: column;
    }
    @media(max-width:540px){
        width: 300px;
    }
`
Items.Item=styled.span`
    display: flex;
    flex-direction: column;
    transition: all 1s;
    h3{
        color: black;
        cursor: pointer;
        font-weight: 750;
        :hover{
            color: var(--primaryColor);
        }
    }
    .description{
        width: 300px;
       
    }

`

export {
    Container,
    LeftWrap,
    RightWrap,
    Img,
    Border,
    Items,
    Icon,
}