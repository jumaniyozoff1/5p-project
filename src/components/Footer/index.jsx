
import React from "react";
import {Container,Wrapper} from './style'
import Navlogo  from "../../assets/icon/navlogo.svg";


const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <img src={Navlogo} alt="" />
        </div>
        <div className="ourservis">
          <p className="sub-title color">OurServis:</p>
          <p className="description color">SMM</p>
          <p className="description color">Marketing</p>
          <p className="description color">Mantaj</p>
        </div>
        <div className="by">
          <p className="sub-title color">Create by ASTIX</p>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Footer;
