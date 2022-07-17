import styled from "styled-components";
// import { NavLink } from "react-router-dom";
import { ReactComponent as navlogo } from "../../assets/icon/navlogo.svg";
import { ReactComponent as navlogo2 } from "../../assets/icon/navlogo.svg";
import { ReactComponent as navMenu } from "../../assets/icon/navMenu.svg";
import { ReactComponent as xmenu } from "../../assets/icon/xmenu.svg";

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
	background-color: var(--secondaryColor);
	-webkit-touch-callout: none; //IOS safari
	-webkit-user-select: none; //safari
	-khtml-user-select: none; //Konqueror HTML
	-moz-user-select: none; //firefox old version
	-ms-user-select: none; // internet explorer/ Edge
	user-select: none;

`;

const Wrapper = styled.div`
	width: 100%;
	max-width: 1440px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 40px;
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 24px;
	width: 100%;
	color: #ffffff;
	@media (max-width: 980px) {
		padding: 0 20px;
	}
	button {
		padding: 15px 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		display: inline-block;
		font-weight: 600;
		border-radius: 2px;
		font-size: 14px;
		background-color: var(--primaryColor);
		border: none;
		transition-duration: 0.5s;
		&:hover {
			background-color: #212529;
		}
		@media (max-width: 750px){
			padding: 10px 10px;
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

LinkSection.Body = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	transition: all 0.4s ease 0s;
	&:hover{
		color: red;
	}
	@media (max-width: 980px) {
		position: fixed;
		top: 0;
		flex-direction: column;
		padding: 80px 0px;
		overflow: auto;
		opacity: 0;
		visibility: hidden;
		background-color: var(--primaryColor);
		left: 0;
		width: 100vw;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		&.open {
			opacity: 1;
			visibility: visible;
		}
	}
	/* .sc-jSMfEi{
		background-color: red;
	}	 */
`;

const Navlink = styled.a`
	text-decoration: none;
	display: inline-block;
	color: white;
`;

const Navlogo = styled(navlogo)`
	cursor: pointer;
	text-align: center;
	@media (max-width: 980px) {
		display: none;
	}
`;
const Navlogo2 = styled(navlogo2)`
	cursor: pointer;
	text-align: center;
	display: none;
	@media (max-width: 980px) {
		display: flex;
	}
`;
const NavMenu = styled(navMenu)`
	display: none;
	cursor: pointer;
	position: relative;
	z-index: 100;
	@media (max-width: 980px) {
		display: flex;
	}
`;
const Xmenu = styled(xmenu)`
	display: none;
	position: relative;
	z-index: 100;
	cursor: pointer;
	@media (max-width: 980px) {
		display: flex;
	}
`;

export { Container, Header, Navlink, Wrapper, LinkSection, Navlogo, Navlogo2, NavMenu, Xmenu };
