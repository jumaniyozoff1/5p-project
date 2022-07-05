
import styled from "styled-components";
import { ReactComponent as navlogo } from "../../assets/icon/navlogo.svg";

const Container = styled.div`
  width: 100%;
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
`;

const Wrapper = styled.div`
  padding: 100px 150px 50px 50px;
  color: white !important;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  .his{
    display: flex;
    .title{
      font-size: 20px;
      margin-bottom: 40px;
    }
  }
  .logo{
    margin-top: -30px;
  }
  .title{
    font-size: 24px;
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
`

const SmallLogo = styled.img`
  width: 80px;
  height: 80px;
`;

const Navlogo = styled(navlogo)`
  cursor: pointer;
`;

export { Container, BacImg, Wrapper, Navlogo, Item, SmallLogo };
