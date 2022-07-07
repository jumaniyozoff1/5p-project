import React,{useState} from "react";
import {
	Container,
	Header,
	LinkSection,
	Navlink,
	Navlogo,
	Navlogo2,
	NavMenu,
	Wrapper,
	Xmenu,
} from "./style";
import { navbar } from "../../utils/navbar";
// import Button from "../../Generic/Button";
import { useNavigate, Outlet } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	const [menuOpen,setmenuOpen] =useState(true)

	const goTo = (e, path) => {
		e.preventDefault();
		document.documentElement.scrollTo({
			top:
				document.querySelector(path).getBoundingClientRect().top +
				window.scrollY -
				100,
			behavior: "smooth",
		});
	};
	const Submit =()=>{
		setmenuOpen((p)=> !p)
	}
	return (
		<Container>
			<Header>
				<Wrapper>	
					{menuOpen ? <NavMenu onClick={Submit}/> : <Xmenu onClick={Submit}/>}
					<Navlogo onClick={() => navigate("/home")}></Navlogo>
					<LinkSection >
						<Navlogo2 onClick={() => navigate("/home")}/>
						{navbar.map(({ id, title, path }) => {
							return (
								<Navlink
									onClick={(e) => goTo(e, path)}
									href=''
									key={id}
								>
									{title}
								</Navlink>
							);
						})}
					</LinkSection>
					<button >Discover More</button>
				</Wrapper>
			</Header>
			<main>
				<Outlet />
			</main>
		</Container>
	);
};

export default Navbar;
