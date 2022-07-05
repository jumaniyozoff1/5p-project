
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Block = styled.div`
  position: relative;
  .sub-title {
    font-weight: 800;
    cursor: pointer;
    transition: all 0.5s linear;
    :hover{color: var(--primaryColor);}
  }
  .description {
    width: 600px;
  }
  .line1 {
    position: absolute;
    top: 329px;
    left: 41%;
    height: 220px;
    width: 1px;
    background-color: #6f6f6f;
  }
`;

Wrapper.Item = styled.div`
  width: 300px;
`;
Wrapper.Item.II = styled.div`
  display: flex;
`;

const ImgBlock = styled.div`
  margin-left: 20px;
  .img {
    position: absolute;
    z-index: -9;
  }
`;
export { Container, Wrapper, Block, ImgBlock };
