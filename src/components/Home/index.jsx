import React, { useRef } from "react";
import {
	Container,
	Wrapper,
	Img,
	Icons,
	CardSection,
	Card,
	Title,
	TitleWrap,
} from "./style";
import HomeOne from "../../assets/img/homeone.png";
import HomeTwo from "../../assets/img/hometwo.png";
import Button from "../../Generic/Button";

const Corusel = () => {
	const slider = useRef("click");
	return (
		<Wrapper className="home">
			<TitleWrap>
			<Title>
				<span>Welcome To Best It Solution Company</span>
				<h1 className="home-title">
					We Provide Best For It Solution For Business.
				</h1>
				<h2>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Harum porro est expedita dolorem suscipit eos, placeat
					provident{" "}
				</h2>
				{/* <Button width={"150px"} type={"primary"}>
					Descover More
				</Button> */}
				
			</Title>
			</TitleWrap>

			<Icons>
				<Icons.Left onClick={() => slider.current.prev()} />
				<Icons.Right onClick={() => slider.current.next()} />
			</Icons>
			{/* <h1 className='home-title'>We Provide Best For It Solution For Business</h1> */}
			<Container autoplay ref={slider}>
				<Img src={HomeOne} />
				<Img src={HomeTwo} />
			</Container>
			<CardSection>
				<Card>
					<Card.Item>
						<Icons.Sun/>
						<h2 className="sub-title">Professional Work</h2>
						<p className="description text-centr">
							While building out a new website you literally no
							idea of where to start.
						</p>
						{/* <span>
							<a href="#">Read More</a><Icons.Arrow/>
						</span> */}
					</Card.Item>
				</Card>
				<Card>
					<Card.Item>
						<Icons.Wifi/>
						<h2 className="sub-title">Professional Work</h2>
						<p className="description text-centr">
							While building out a new website you literally no
							idea of where to start.
						</p>
						{/* <span>
							<a href="#">Read More</a><Icons.Arrow/>
						</span> */}
					</Card.Item>
				</Card>
				<Card>
					<Card.Item>
						<Icons.Sun/>
						<h2 className="sub-title">Professional Work</h2>
						<p className="description text-centr">
							While building out a new website you literally no
							idea of where to start.
						</p>
						{/* <span>
							<a href="#">Read More</a><Icons.Arrow/>
						</span> */}
					</Card.Item>
				</Card>
			</CardSection>
		</Wrapper>
	);
};
export default Corusel;
