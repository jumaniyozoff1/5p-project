import React, { useState } from "react";
import { Container, Header, LinkSection, Navlink, Navlogo, Navlogo2, NavMenu, Wrapper, Xmenu } from "./style";
import { navbar } from "../../utils/navbar";
// import Button from "../../Generic/Button";
import { useNavigate, Outlet } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	const [menuOpen, setmenuOpen] = useState(false);

	const openMenu = () => {
		document.body.style.overflow = menuOpen ? "hidden" : "auto";
		setmenuOpen((p) => !p);
	};
	const closeMenu = () => {
		document.body.style.overflow = "auto";
		setmenuOpen(false);
	};

	const goTo = (e, path) => {
		e.preventDefault();
		closeMenu();
		if (document.querySelector(path)) {
			document.documentElement.scrollTo({
				top: document.querySelector(path).getBoundingClientRect().top + window.scrollY -100,
				behavior: "smooth",
			});
		}
	};
	return (
		<Container>
			<Header>
				<Wrapper>
					{!menuOpen ? <NavMenu onClick={openMenu} /> : <Xmenu onClick={openMenu} />}
					<Navlogo onClick={() => navigate("/home")}></Navlogo>
					<LinkSection>
						<Navlogo2 onClick={() => navigate("/home")} />
						<LinkSection.Body className={`${menuOpen ? "open" : ""}`}>
							{navbar.map(({ id, title, path }) => {
								return (
									<div> 
										<Navlink onClick={(e) => goTo(e, path)} key={id}>
											{title}
										</Navlink>
									</div>
								);
							})}
						</LinkSection.Body>
					</LinkSection>
					<h3>logo</h3>
				</Wrapper>
			</Header>
		</Container>
	);
};

export default Navbar;

