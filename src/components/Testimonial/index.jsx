import React, { useRef } from "react";
import {
	Container,
	Wrapper,
	Teacher,
	Description,
	WrapCar,
	Card,
	Carousel,
	Title,
	Des,
	Star,
	Icon,
} from "./style";
import "react-alice-carousel/lib/alice-carousel.css";
import teacher from "../../assets/img/testi.png";
import test1 from "../../assets/img/test1.jpg";
import test2 from "../../assets/img/test2.jpg";
import test3 from "../../assets/img/test3.jpg";

const Testimonial = () => {
	const ref = useRef("click");
	const handleDragStart = (e) => e.preventDefault();
	const width = {
		0: {
			items: 1,
		},
		1024: {
			items: 1,
		},
	};
	// ======
	const items = [
		<Card onDragStart={handleDragStart} role="presentation">
			<Title>
				<Title.Img src={test1} />
				<Title.Des>
					<h1 className="small-description">Jack</h1>
					<p className="sub-title">Marketing</p>
				</Title.Des>
			</Title>
			<Des>
				<p className="description">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Officiis, velit labore eligendi soluta consequatur nesciunt
					ut, alias ratione sequi dignissimos aliquam repellendus
					cupiditate natus quisquam!
				</p>
				<Icon>
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
					<i className="descriptions">Execllent!!</i>
				</Icon>
			</Des>
		</Card>,
		<Card onDragStart={handleDragStart} role="presentation">
			<Title>
				<Title.Img src={test2} />
				<Title.Des>
					<h1 className="small-description">Jack</h1>
					<p className="sub-title">Marketing</p>
				</Title.Des>
			</Title>
			<Des>
				<p className="description">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Officiis, velit labore eligendi soluta consequatur nesciunt
					ut, alias ratione sequi dignissimos aliquam repellendus
					cupiditate natus quisquam!
				</p>
				<Icon>
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
					<i className="descriptions">Execllent!!</i>
				</Icon>
			</Des>
		</Card>,
		<Card onDragStart={handleDragStart} role="presentation">
			<Title>
				<Title.Img src={test3} />
				<Title.Des>
					<h1 className="small-description">Jack</h1>
					<p className="sub-title">Marketing</p>
				</Title.Des>
			</Title>
			<Des>
				<p className="description">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Officiis, velit labore eligendi soluta consequatur nesciunt
					ut, alias ratione sequi dignissimos aliquam repellendus
					cupiditate natus quisquam!
				</p>
				<Icon>
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
					<i className="descriptions">Execllent!!</i>
				</Icon>
			</Des>
		</Card>,
		<Card onDragStart={handleDragStart} role="presentation">
			<Title>
				<Title.Img src={test1} />
				<Title.Des>
					<h1 className="small-description">Jack</h1>
					<p className="sub-title">Marketing</p>
				</Title.Des>
			</Title>
			<Des>
				<p className="description">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Officiis, velit labore eligendi soluta consequatur nesciunt
					ut, alias ratione sequi dignissimos aliquam repellendus
					cupiditate natus quisquam!
				</p>
				<Icon>
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
					<i className="descriptions">Execllent!!</i>
				</Icon>
			</Des>
		</Card>,
		<Card onDragStart={handleDragStart} role="presentation">
			<Title>
				<Title.Img src={test2} />
				<Title.Des>
					<h1 className="small-description">Jack</h1>
					<p className="sub-title">Marketing</p>
				</Title.Des>
			</Title>
			<Des>
				<p className="description">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Officiis, velit labore eligendi soluta consequatur nesciunt
					ut, alias ratione sequi dignissimos aliquam repellendus
					cupiditate natus quisquam!
				</p>
				<Icon>
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
					<i className="descriptions">Execllent!!</i>
				</Icon>
			</Des>
		</Card>,
	];
	return (
		<Container className="testimonial">
			<Wrapper>
				<Description>
					<Description.Title>
						<p className="small-description">Our TESTimonial</p>
						<h1 className="title">
							What Our Coustomar Say <br /> Why Us Look
							Testimonial!
						</h1>
						<div className="hr"></div>
						<p className="description">
							There are many variations of passages of Lorem Ipsum
							available, but the majority have suffered alteration
							in some form, by injected thishumour, or randomised
							words which don’t look believable.
						</p>
					</Description.Title>
					<Description.Card>
						<WrapCar>
							<Carousel
								keyboardNavigation={true}
								disableButtonsControls={true}
								ref={ref}
								mouseTracking
								infinite={true}
								responsive={width}
								controlsStrategy="alternate"
								items={items}
							/>
						</WrapCar>
					</Description.Card>
				</Description>
				<Teacher>
					<img src={teacher} alt="" />
				</Teacher>
			</Wrapper>
		</Container>
	);
};

export default Testimonial;
