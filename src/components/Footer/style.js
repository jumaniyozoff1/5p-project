import styled from "styled-components";
import { ReactComponent as navlogo } from "../../assets/icon/navlogo.svg";


const Container = styled.div`
  width: 100%;
  height: fit-content;
  color: white;
  background-color: var(--secondaryColor);

`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px;
  .ourservis{
    display: flex;
    align-items: center;
    gap: 20px;
  }
  @media (max-width: 910px){
    flex-direction: column;
  }

`

export {Container,Wrapper}