import React from "react";
import {
	Container,
	Header,
	LinkSection,
	Navlink,
	Navlogo,
	Wrapper,
} from "./style";
import { navbar } from "../../utils/navbar";
import Button from "../../Generic/Button";
import { useNavigate, Outlet } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();

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

	return (
		<Container>
			<Header>
				<Wrapper>
					<Navlogo onClick={() => navigate("/home")}></Navlogo>
					<LinkSection>
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
					<Button height={"50px"} width={"180px"} type={"primary"}>
						Discover More
					</Button>
				</Wrapper>
			</Header>
			<main>
				<Outlet />
			</main>
		</Container>
	);
};

export default Navbar;
