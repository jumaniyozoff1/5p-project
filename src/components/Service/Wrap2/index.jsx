import React from "react";
import Img from "../../../assets/img/will.png";
import { Block, Container, ImgBlock, Wrapper } from "./style";
import Iimg from "../../../assets/img/choose-thumb.png";

const Warp2 = () => {
  return (
    <Container>
      <Wrapper>
        <Block>
          <div className="sub-title">WHY CHOOSE US</div>
          <div className="title">
            Will Make Your Why Choose Us Look Amazing!
          </div>
          <div className="border"></div>
          <br />
          <br />
          <div className="description dec">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected this
            humour, or randomised words which don't look believable.
          </div>
          <br />
          <br />
          <Wrapper.Item.II>
            <Wrapper.Item>
              <div className="sub-title title-two">32+ Year Of</div>
              <div className="description des2">Business Experience</div>
            </Wrapper.Item>
            <Wrapper.Item>
              <div className="sub-title title-two">Live-support</div>
              <div className="description des2">24 hours fitnes</div>
            </Wrapper.Item>
          </Wrapper.Item.II>
          <br />
          <br />
          <Wrapper.Item.II>
            <Wrapper.Item>
              <div className="sub-title title-two">Company Data</div>
              <div className="description des2">Privately Owned</div>
            </Wrapper.Item>
            <Wrapper.Item>
              <div className="sub-title title-two">Business History</div>
              <div className="description des2">Company Magarment</div>
            </Wrapper.Item>
          </Wrapper.Item.II>
          <div className="line"></div>
        </Block>
        <ImgBlock>
          <img src={Iimg} className="img-one" />
          <img src={Img} alt="" />
        </ImgBlock>
      </Wrapper>
    </Container>
  );
};

export default Warp2;