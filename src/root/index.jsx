import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
// import { navbar } from "../utils/navbar";
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
            {/* <Skill/> */}
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

/* <Routes>
                <Route path="/" element={<Navigate to={'/home'}/>}/>
                <Route element={<Navbar/>}>
                    {
                        navbar.map(({id,element,path})=>{
                            return(
                                <Route key={id} path={path} element={element}/>
                            )
                        })
                    }
                </Route>
            </Routes> */



            {/* {navbar.map((item) => {
				return item.element;
			})} */}
