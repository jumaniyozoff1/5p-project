
import React from "react";
import { BacImg, Container, Wrapper, Navlogo, Item, SmallLogo } from "./style";
import Styled4 from "../../assets/img/slider4.jpg";
import { useNavigate } from "react-router-dom";
import Des from "../../assets/img/desingn.jpg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container>
      {/* <BacImg src={Styled4} /> */}
      <Wrapper>
        <div className="one">
          <div className="logo">
            <Navlogo onClick={() => navigate("/home")}></Navlogo>
            <div className="description color">
              Tuis at porttitor urna, eu cursus tortor. vestibulum magna metus,
              tempor ac, more toward learning about a id arcu topic
            </div>
          </div>
          <div>
            <h1 className="title color">
              Quick Links <br />
            </h1>
            <div>
              <Item>Home</Item>
              <Item>About</Item>
              <Item>Service</Item>
              <Item>Contact</Item>
              <Item>Team</Item>
            </div>
          </div>
        </div>
        <div className="two">
          <div>
            <h1 className="title color">
              Our Service <br />
            </h1>
            <Item>Analytic Solutions</Item>
            <Item>Partnership System</Item>
            <Item>Quality Control</Item>
            <Item>Business Innovation</Item>
            <Item>Product Control</Item>
          </div>
          <div>
            <h1 className="title color">
              Created <br />
            </h1>
            <Item>
              Created by ASTIX 
              {/* <div className="his">
                <SmallLogo src={Des} className="s" />{" "}
                <h1 className="title color">
                  Seminar for Best Marketing Strategy.
                </h1>
              </div>
              <div className="his">
                <SmallLogo src={Des} className="s" />{" "}
                <h1 className="title color">
                  Seminar for Best Marketing Strategy.
                </h1>
              </div> */}
            </Item>
          </div>
        </div>
      </Wrapper>
      <div className="line"></div>
    </Container>
  );
};

export default Footer;
