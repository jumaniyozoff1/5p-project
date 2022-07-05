import React from "react";
import Carousel from "react-elastic-carousel";

import {
	Container,
	Wrapper,
	Card,
	Imgs,
	Border,
	BorderName,
} from "./style";
import Team1 from "../../assets/img/team1.jpg";
import Team2 from "../../assets/img/team2.jpg";
import Team3 from "../../assets/img/team3.jpg";
import Team4 from "../../assets/img/team4.jpg";

const Team = () => {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 850, itemsToShow: 2 },
		{ width: 1180, itemsToShow: 3 },
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
					itemsToShow={4}
					itemsToScroll={1}
					breakPoints ={breakPoints}
					itemPadding={[0, 20]}
					enableMouseSwipe={true}   
					// showArrows={false} 
					>
				<Card>
					<Border>
						<BorderName>
							<h1 className="small-description">House</h1>
							<p className="description">House</p>
						</BorderName>
					</Border>
					<Imgs src={Team1} />
				</Card>
				<Card>
					<Border>
						<BorderName>
							<h1 className="small-description">House</h1>
							<p className="description">House</p>
						</BorderName>
					</Border>
					<Imgs src={Team1} />
				</Card>
				<Card>
					<Border>
						<BorderName>
							<h1 className="small-description">House</h1>
							<p className="description">House</p>
						</BorderName>
					</Border>
					<Imgs src={Team1} />
				</Card>
				<Card>
					<Border>
						<BorderName>
							<h1 className="small-description">House</h1>
							<p className="description">House</p>
						</BorderName>
					</Border>
					<Imgs src={Team1} />
				</Card>
				<Card>
					<Border>
						<BorderName>
							<h1 className="small-description">House</h1>
							<p className="description">House</p>
						</BorderName>
					</Border>
					<Imgs src={Team1} />
				</Card>
				<Card>
					<Border>
						<BorderName>
							<h1 className="small-description">House</h1>
							<p className="description">House</p>
						</BorderName>
					</Border>
					<Imgs src={Team1} />
				</Card>
				<Card>
					<Border>
						<BorderName>
							<h1 className="small-description">House</h1>
							<p className="description">House</p>
						</BorderName>
					</Border>
					<Imgs src={Team1} />
				</Card>
				<Card>
					<Border>
						<BorderName>
							<h1 className="small-description">House</h1>
							<p className="description">House</p>
						</BorderName>
					</Border>
					<Imgs src={Team1} />
				</Card>
			</Carousel>
			
			</Wrapper>
		</Container>
	);
};

export default Team;
