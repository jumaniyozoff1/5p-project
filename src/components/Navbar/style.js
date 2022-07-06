import styled from "styled-components";
// import { NavLink } from "react-router-dom";
import { ReactComponent as navlogo } from "../../assets/icon/navlogo.svg";
import { ReactComponent as navlogo2 } from "../../assets/icon/navlogo.svg";
import { ReactComponent as navMenu } from "../../assets/icon/navMenu.svg";


const Container = styled.div`
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1000;
	
`;

const Header = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100px;
	/* position: fixed; */
	background-color: var(--secondaryColor);
	-webkit-touch-callout: none; //IOS safari
	-webkit-user-select: none; //safari
	-khtml-user-select: none; //Konqueror HTML
	-moz-user-select: none; //firefox old version
	-ms-user-select: none; // internet explorer/ Edge
	user-select: none;
	/* z-index:999; //Non-prefixed version, supported by chrome,firefox and opera */
`;

const Navlink = styled.a`
	text-decoration: none;
	color: white;
	@media (max-width: 980px){
		display: none;
	}
`;

const Wrapper = styled.div`
	width: 100%;
	max-width: 1440px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 24px;
	width: 100%;
	color: #ffffff;
	@media (max-width: 980px){
		padding: 0 20px;
		display: flex;
		justify-content: space-between;
	}
	button{
		height: 50px;
		width: 180px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-style: normal;
		font-weight: 600;
		border-radius: 2px;
		font-size: 14px;
		background-color: var(--primaryColor);
		border: none;
		transition-duration: 0.5s;
		&:hover{
			background-color: #212529;
		}
		@media (max-width: 980px){
			width: 100px;
			height: 40px;
		}

	}
`;

const LinkSection = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	.active {
		color: var(--primaryColor);
	}
`;

const Navlogo = styled(navlogo)`
	cursor: pointer;
	text-align: center;
	@media (max-width: 980px){
		display: none;
	}
`;
const Navlogo2 = styled(navlogo2)`
	cursor: pointer;
	text-align: center;
	display: none;
	@media (max-width: 980px){
		display: flex;
	}
`;
const NavMenu =styled(navMenu)`
	display: none;
	@media (max-width: 980px){
		display: flex;
	}
`

export { Container, Header, Navlink, Wrapper, LinkSection, Navlogo,Navlogo2,NavMenu };
