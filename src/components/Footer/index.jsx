import React from "react";
import { BacImg, Container, Wrapper } from "./style";
import Styled4 from "../../assets/img/slider4.jpg";

const Footer = () => {
  return (
    <Container>
      <BacImg src={Styled4} />
      <Wrapper>
        <div>
          <div className="title color">
            Logo <br />
            <br />
          </div>
          <div className="description color">
            Tuis at porttitor urna, eu cursus tortor. vestibulum magna metus,
            tempor ac, more toward learning about a id arcu topic
          </div>
        </div>
        <div>
          <div className="title color">
            Quick Links <br />
            <br />
          </div>
          <div className="sub-title we color">
            Home <br /> <br /> About <br /> <br /> Service <br /> <br /> Contact
            <br /> <br /> Team
          </div>
        </div>
        <div>
          <div className="title color">
            Our Service <br />
            <br />
          </div>
          <div className="sub-title we color">
            Analytic Solutions <br /> <br /> Partnership System <br /> <br />
            Quality Control <br /> <br /> Business Innovation
            <br /> <br /> Product Control
          </div>
        </div>
        <div>
        </div>
      </Wrapper>
        <div className="line"></div>
    </Container>
  );
};

export default Footer;
