import styled from "styled-components";

const Container = styled.div``;

const BacImg = styled.img`
  width: 1300px;
  height: 500px;
  position: absolute;
  filter: brightness(20%);
  z-index: -99;
  left: 380px;
`;

const Wrapper = styled.div`
  padding: 50px;
  color: white !important;
  margin-left: 380px;
  width: 1300px;
`;

export {
    Container,
    BacImg,
    Wrapper
}