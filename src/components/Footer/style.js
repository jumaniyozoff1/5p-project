import styled from "styled-components";

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
  padding: 60px 50px 0 150px;
  color: white !important;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

export { Container, BacImg, Wrapper };
