import styled from "styled-components";
import {ReactComponent as Arrow} from '../../assets/icon/arrow.svg'

const Container = styled.div`
    margin-top: 100px;
    width: 100%;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    gap: 50px;

`
const LeftWrap =styled.div`
    position: relative;
    left:20px;
`
const Icon =styled.div``
Icon.Arrow =styled(Arrow)`
    width: 14px;
    height:14px;
    margin-top: 7px;
    fill:var(--primaryColor);
`
    


const RightWrap =styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    left:10px;
    h2{
        color: var(--primaryColor);
        font-weight: 700;
    }
    h1{
        color: black;
        width: 550px;
        font-size: 36px;
        font-weight: 700;
    }
    .description{
        margin-top: 15px;
        width: 600px;
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
`

const Items  =styled.div`
    width: 600px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    span{
        display: flex;
        gap: 5px;
        /* align-items: center; */

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