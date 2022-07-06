
import styled from "styled-components";
import { ReactComponent as navlogo } from "../../assets/icon/navlogo.svg";

const Container = styled.div`
  width: 100%;
  background-color: var(--secondaryColor);
  .line {
    margin-left: 380px;
    width: 1300px;
    background: #fff;
    
  }
  
`;

const BacImg = styled.img`
  width: 100%;
  height: 500px;
  position: absolute;
  filter: brightness(20%);
  z-index: -99;
  object-fit: cover;
  @media(max-width:1365px){
    height:fit-content;
  }
  
`;

const Wrapper = styled.div`
  width: 100%;
  color: white !important;
  padding: 100px 50px;
  display: flex;
  justify-content: center;
  gap: 30px;
  @media (max-width:1305px){
    flex-direction: column;
  }
  .one{
    display: flex;
    gap: 40px;
    @media (max-width:1305px){
      justify-content: center;
    }
    @media (max-width:650px){
      flex-direction: column;
      justify-content: center;
    }
  }
  .two{
    display: flex;
    align-items: stretch;
    @media (max-width:1305px){
      justify-content: center;
    }
    @media (max-width:650px){
      flex-direction: column;
      justify-content: center;
      gap: 20px;
    }
  }
  .his{
    display: flex;
    .title{
      font-size: 20px;
      margin-bottom: 40px;
      @media(max-width:600px){
        font-size:16px;
      }
    }
  }
  .description{
    @media(max-width:600px){
      font-size:15px;
    }
  }
  .logo{
    /* margin-top: -30px; */
  }
  .title{
    font-size: 24px;
    @media (max-width:600px){
      font-size: 18px;
    }
  }
`;

const Item = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  margin-bottom: 20px;
  width: 300px;
  font-size: 20px;
  color: #fff;
  .s{
    margin-right: 10px;
  }
  @media(max-width:1000px){
    line-height:10px;
  }
  @media(max-width:600px){
    font-size:15px;
  }
`

const SmallLogo = styled.img`
  width: 80px;
  height: 80px;
`;

const Navlogo = styled(navlogo)`
  cursor: pointer;
`;

export { Container, BacImg, Wrapper, Navlogo, Item, SmallLogo };
