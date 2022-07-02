import React from "react";
import { Container, LeftWrap, RightWrap, Img, Border, Items, Icon } from "./style";
import Expressions from "../../assets/img/expressions.png";
import Button from "../../Generic/Button";

const About = () => {
	return (
		<Container className="about">
			<LeftWrap>
				<Img src={Expressions} />
			</LeftWrap>
			<RightWrap>
				<h2>OUR ABOUT COMPANY</h2>
				<h1>The Largest Business Expert Company!</h1>
				<Border />
				<p className="description">
					There are many variations of passages of Lorem Ipsum
					available, but the majority have suffered alteration in some
					form, by injected this humour, or randomised words which
					don’t look believable.
				</p>
				<Items>
					<Items.Item>
						<span>
							<Icon.Arrow/>
							<h3>Routine and business plan</h3>
						</span>
						<p className="description">We provides you with </p>
					</Items.Item>
					<Items.Item>
						<span>
							<Icon.Arrow/>
							<h3>Routine 25 years working</h3>
						</span>
						<p className="description">We provides you with </p>
					</Items.Item>
				</Items>
				<Items>
					<Items.Item>
						<span>
							<Icon.Arrow/>
							<h3>Routine and business data</h3>
						</span>
						<p className="description">We provides you with </p>
					</Items.Item>
					<Items.Item>
						<span>
							<Icon.Arrow/>
							<h3>Routine and business team</h3>
						</span>
						<p className="description">We provides you with </p>
					</Items.Item>
				</Items>
				<div>
					<span></span>
					<Button type={"primary"} width={"180px"}>
						About More
					</Button>
				</div>
			</RightWrap>
		</Container>
	);
};

export default About;
