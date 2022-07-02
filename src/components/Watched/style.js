

import styled from "styled-components"
import { ReactComponent as star } from "../../assets/icon/star.svg"

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 400px;
    background-color: var(--primaryColor);
    .sub-title{
    color: white;
    }
`

const Wrapper = styled.div`
    background-color: white;
    width: 100px;
    height: 100px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--primaryColor);
    border-radius: 50%;
    animation: play 3s  alternate-reverse infinite;
    box-shadow: 0px 0px 10px 7px white;
    @keyframes play {
        50%{
            box-shadow: 0px 0px 50px 20px white;
            display: flex;
            align-items: center;
        }
    }
`


const Star = styled(star)`
    width: 60px;
    height: 60px;
`

export{
    Container,
    Wrapper,
    Star
}