import styled from 'styled-components';
import { Carousel } from 'antd';
import {ReactComponent as Leftarrow} from '../../assets/icon/Left.svg'
import {ReactComponent as Rightarrow} from '../../assets/icon/Right.svg'
import {ReactComponent as Sun} from '../../assets/icon/sun.svg'
import {ReactComponent as Arrow} from '../../assets/icon/arrow.svg'
import {ReactComponent as Wifi} from '../../assets/icon/wifi.svg'
import {ReactComponent as Diagramma} from '../../assets/icon/diagramma.svg'


const Wrapper = styled.div`
    position: relative;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    .slick-dots{
        position: absolute;
        bottom: 50px;
    }
    
`
const TitleWrap =styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width:1000px){
        margin-top: 25px;
    }
`
const Title =styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 25px;
    z-index: 999;
    @media (max-width:1366px){
        display: flex;
        align-items: center;
        justify-content: center;
        top: 25px;
    }
    @media (max-width:1060px){
        gap: 10px;
    }
    @media (max-width:660px){
        top: 60px;
    }
    h1{
        font-size: 60px;
        width: 630px;
        color: white;
        text-align: center;
       
        @media(max-width:980px){
            font-size: 45px;

        }
        @media(max-width:660px){
            width: 400px;
            font-size: 35px;
            
        }
        @media(max-width:440px){
            width: 350px;
            font-size: 30px;
            
        }
        @media(max-width:630px){
           
        }
        
    }
    h2{
        color: white;
        width: 600px;
        @media(max-width:980px){
            font-size: 22px;
            text-align: center;

        }
        @media(max-width:660px){
            width: 400px;
            font-size: 18px;
            
        }
        @media(max-width:440px){
            width: fit-content;
            font-size: 15px;
            
        }
    }
    span{
        width: fit-content;
        color: white;
        font-weight: 650;
        font-size: 24px;
        border-bottom: 1px solid white;
        @media(max-width:980px){
            font-size: 20px;
            text-align: center;

        }
    }   
`
const Container = styled(Carousel)``

const Icons = styled.div`
    position: absolute;
    top: 25%;
    z-index: 999;
    padding: 0 30px;
    width:100%;
`
Icons.Sun =styled(Sun)`
    user-select: none;
    cursor: pointer;
    width: 48px;
    height:48px;
    fill:var(--primaryColor);
    transition: all 0.5s;
    :hover{
        fill: black;
    }
`
Icons.Arrow =styled(Arrow)`
    width: 14px;
    height:14px;
    margin-top: 4px;
    fill:var(--primaryColor);
    :hover{
        fill: black;
    }
`
Icons.Wifi =styled(Wifi)`
    user-select: none;
    cursor: pointer;
    width: 48px;
    height:48px;
    fill:var(--primaryColor);
    transition: all 0.5s;
    :hover{
        fill: black;
    }
`
Icons.Diagramma =styled(Diagramma)`
    user-select: none;
    cursor: pointer;
    width: 48px;
    height:48px;
    fill:var(--primaryColor);
    transition: all 0.5s;
    :hover{
        fill: black;
    }
`

Icons.Left =styled(Leftarrow)`
    position: absolute;
    width: 45px;
    height: 45px;
    padding: 12px;
    color: white;
    background-color: white;
    opacity: 0.5;
    border-radius: 50%;
    z-index: 999;
    cursor: pointer;
    user-select: none;
    :hover{
        opacity: 0.77;
    }
    & path {
        fill: #0d263b;
    }
    @media (max-width:972px){
        display: none;  
    }
    
`

Icons.Right =styled(Rightarrow)`
    position: absolute;
    width: 45px;
    height: 45px;
    padding: 12px;
    color: white;
    background-color: white;
    opacity: 0.5;
    border-radius: 50%;
    z-index: 999;
    left:94.7%;
    cursor: pointer;
    user-select: none;
    :hover{
        opacity: 0.77;
    }
    & path {
        fill: #0d263b;
    }
    @media (max-width:972px){
        display: none;  
    }
`

const Card =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 310px;
    height: 250px;
    border-top: 4px solid var(--primaryColor);
    background-color: white;
    -webkit-box-shadow: 0px 0px 48px 2px rgba(129, 144, 156, 0.2);
    -moz-box-shadow: 0px 0px 48px 2px rgba(129, 144, 156, 0.2);
    box-shadow: 0px 0px 48px 2px rgba(129, 144, 156, 0.2);
    span{
        display: flex;
        align-items: center;
        gap: 5px;
        :hover{
            fill: black;
        }
    }
    @media(max-width:1366px){
        margin: 25px;
    } 
    @media(max-width:555px){
        width: 280px;
        height: 220px;
            
    }
`
Card.Item=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 50px;
    a{
        text-decoration: none;
        font-size: 18px;
        font-weight: 600;
        color: var(--primaryColor);
    }
`
const Img = styled.img`
    filter: brightness(30%);
    @media(max-width:1600px){
        width:100vw;
    }
    @media(max-width:1370px){
        height:600px;
        width:100vw !important;
    }
    @media(max-width:980px){
        height:500px;
        width:100%;
    }

`

const CardSection=styled.div`
    position: relative;
    z-index: 999;
    bottom: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 200px;
    @media(max-width:1366px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media(max-width:1366px){
        flex-wrap: wrap;
    }
    @media (max-width:600px){
        padding: 0 50px;
    }

`

Card.Item=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 50px;
    a{
        text-decoration: none;
        font-size: 18px;
        font-weight: 600;
        color: var(--primaryColor);
        :hover{
            color: black;
        }
    }
    @media(max-width:980px){
        padding: 200px 0px;
    }

`




export{Wrapper,Container,Img,Icons,CardSection,Card,Title,TitleWrap}

