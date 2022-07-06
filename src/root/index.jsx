import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Service from "../components/Service";
import Skill from "../components/Skill";
import Testimonial from "../components/Testimonial";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";
import "react-alice-carousel/lib/alice-carousel.css";
const Root = () => {
	return (
		<div style={{ marginTop: 100 }}>
			<Navbar></Navbar>
            <Home/>
            <About/>
            <Service/>  
            {/* <Skill/>   */}
            <Testimonial/>  
            <Team/>
            <Contact/>
            <Blog/>
            <FooterTop/>
            <Footer/>
		</div>
	);
};
export default Root;



