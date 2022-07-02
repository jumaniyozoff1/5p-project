import React, { useRef } from "react";
import {
	Carousel,
	Container,
	Wrapper,
	Card,
	Imgs,
	Border,
	BorderName,
} from "./style";
import "react-alice-carousel/lib/alice-carousel.css";
import Team1 from "../../assets/img/team1.jpg";
import Team2 from "../../assets/img/team2.jpg";
import Team3 from "../../assets/img/team3.jpg";
import Team4 from "../../assets/img/team4.jpg";

const Team = () => {
	const ref = useRef("click");
	const handleDragStart = (e) => e.preventDefault();
	const width = {
		0: {
			items: 1,
		},
		1024: {
			items: 3,
		},
	};
	const items = [
		<Card onDragStart={handleDragStart} role="presentation">
			<Border>
				<BorderName>
					<h1 className="small-description">House</h1>
					<p className="description">House</p>
				</BorderName>
			</Border>
			<Imgs src={Team1} />
		</Card>,
		<Card onDragStart={handleDragStart} role="presentation">
			<Border>
				<BorderName>
					<h1 className="small-description">Apartm</h1>
					<p className="description">Apartm</p>
				</BorderName>
			</Border>
			<Imgs src={Team2} />
		</Card>,
		<Card onDragStart={handleDragStart} role="presentation">
			<Border>
				<BorderName>
					<h1 className="small-description">Office</h1>
					<p className="description">Office</p>
				</BorderName>
			</Border>
			<Imgs src={Team4} />
		</Card>,
		<Card onDragStart={handleDragStart} role="presentation">
			<Border>
				<BorderName>
					<h1 className="small-description">Villa</h1>
					<p className="description">Villa</p>
				</BorderName>
			</Border>
			<Imgs src={Team1} />
		</Card>,
		<Card onDragStart={handleDragStart} role="presentation">
			<Border>
				<BorderName>
					<h1 className="small-description">House</h1>
					<p className="description">House</p>
				</BorderName>
			</Border>
			<Imgs src={Team3} />
		</Card>,
	];
	return (
		<Container className="team">
			<p className="small-description text-centr color">
				OUR TEAM MEMBER
			</p>
			<h1 className="title text-centr">
				Meet Our Company Best Team Member.
			</h1>
			<div className="border"></div>
			<Wrapper>
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
			</Wrapper>
		</Container>
	);
};

export default Team;
