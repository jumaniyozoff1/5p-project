import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width:1365px){
    flex-direction: column;
  }
`;

const Block = styled.div`
  /* position: relative; */
  .sub-title {
    font-weight: 800;
    cursor: pointer;
    transition: all 0.5s linear;
    :hover{color: var(--primaryColor);}
    @media (max-width: 670px){
      font-weight: 600px;
      font-size: 15px;
    }
  }
  .title{
    @media (max-width: 670px){
      font-size: 20px;
      width: 300px;
    }
  }
  .title-two{
    @media (max-width: 670px){
      width: 100px;
    }
  }
  .description {
    width: 600px;
    @media (max-width: 670px){
      width: 500px;
      font-size: 14px;
    }
  }
  .dec{
    @media (max-width: 670px){
      width: 350px;
    }
  }
  .line1 {
    position: absolute;
    top: 329px;
    left: 41%;
    height: 220px;
    width: 1px;
    background-color: #6f6f6f;
  }
  .des2{
    @media (max-width: 670px){
      width: 150px;
    }
  }
`;

Wrapper.Item = styled.div`
  width: 300px;
  @media (max-width: 670px){
    width: fit-content;
  }
`;
Wrapper.Item.II = styled.div`
  display: flex;
`;

const ImgBlock = styled.div`
  margin-left: 20px;
  @media (max-width:1365px){
    /* margin-left: 0; */
    display: none;
  }


  .img-one {
    position: absolute;
    z-index: -9;
    @media (max-width:720px){
      height: 250px;
      width: 250px;
      border: 1px solid red;
    }
  }
`;
export { Container, Wrapper, Block, ImgBlock };
