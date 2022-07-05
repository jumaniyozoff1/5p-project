import React from "react";
import Carousel from "react-elastic-carousel";

import {
	// Carousel,
	Container,
	Wrapper,
	Card,
	Imgs,
	// Icon,
	Title,
	Btn,
} from "./style";
import "react-alice-carousel/lib/alice-carousel.css";
import Business from "../../assets/img/business_c.jpg";
import Desingn from "../../assets/img/desingn.jpg";
import ItServis from "../../assets/img/itServis.jpg";
import Development from "../../assets/img/development.jpg";
import Button from "../../Generic/Button";

const Blog = () => {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 850, itemsToShow: 2 },
		{ width: 1180, itemsToShow: 3 },
	  ];

	return (
		<Container className="blog">
			<p className="small-description text-centr color">FROM OUR BLOG</p>
			<h1 className="title text-centr">See Latest News & Articles From Blog</h1>
			<Wrapper>
				<Carousel 
					itemsToShow={4}
					itemsToScroll={1}
					breakPoints ={breakPoints}
					itemPadding={[0, 20]}
					enableMouseSwipe={true}   
					// showArrows={false} 
					>
				<Card >
					<Btn>
						<Button width={"150px"} type={"primary"}>
							Development
						</Button>
					</Btn>
					<Imgs src={Desingn} />
					<Title>
						<Title.Description>
							<h1 className="small-description">
								Where people develop the own potential
							</h1>
							<p className="description">
								Lorem ipsum dolor, sit amet consectetur adipisicing
								elit.
							</p>
						</Title.Description>
						<hr />
						<Title.Footer>
							<p className="description active">Admin</p>
							<p className="description">06 Jun, 2022</p>
							<p className="description active">0 Comments</p>
						</Title.Footer>
					</Title>
				</Card>
				<Card >
					<Btn>
						<Button width={"150px"} type={"primary"}>
							Development
						</Button>
					</Btn>
					<Imgs src={Desingn} />
					<Title>
						<Title.Description>
							<h1 className="small-description">
								Where people develop the own potential
							</h1>
							<p className="description">
								Lorem ipsum dolor, sit amet consectetur adipisicing
								elit.
							</p>
						</Title.Description>
						<hr />
						<Title.Footer>
							<p className="description active">Admin</p>
							<p className="description">06 Jun, 2022</p>
							<p className="description active">0 Comments</p>
						</Title.Footer>
					</Title>
				</Card>
				<Card >
					<Btn>
						<Button width={"150px"} type={"primary"}>
							Development
						</Button>
					</Btn>
					<Imgs src={Desingn} />
					<Title>
						<Title.Description>
							<h1 className="small-description">
								Where people develop the own potential
							</h1>
							<p className="description">
								Lorem ipsum dolor, sit amet consectetur adipisicing
								elit.
							</p>
						</Title.Description>
						<hr />
						<Title.Footer>
							<p className="description active">Admin</p>
							<p className="description">06 Jun, 2022</p>
							<p className="description active">0 Comments</p>
						</Title.Footer>
					</Title>
				</Card>
				<Card >
					<Btn>
						<Button width={"150px"} type={"primary"}>
							Development
						</Button>
					</Btn>
					<Imgs src={Desingn} />
					<Title>
						<Title.Description>
							<h1 className="small-description">
								Where people develop the own potential
							</h1>
							<p className="description">
								Lorem ipsum dolor, sit amet consectetur adipisicing
								elit.
							</p>
						</Title.Description>
						<hr />
						<Title.Footer>
							<p className="description active">Admin</p>
							<p className="description">06 Jun, 2022</p>
							<p className="description active">0 Comments</p>
						</Title.Footer>
					</Title>
				</Card>
				<Card >
					<Btn>
						<Button width={"150px"} type={"primary"}>
							Development
						</Button>
					</Btn>
					<Imgs src={ItServis} />
					<Title>
						<Title.Description>
							<h1 className="small-description">
								Where people develop the own potential
							</h1>
							<p className="description">
								Lorem ipsum dolor, sit amet consectetur adipisicing
								elit.
							</p>
						</Title.Description>
						<hr />
						<Title.Footer>
							<p className="description active">Admin</p>
							<p className="description">06 Jun, 2022</p>
							<p className="description active">0 Comments</p>
						</Title.Footer>
					</Title>
				</Card>
				<Card >
					<Btn>
						<Button width={"150px"} type={"primary"}>
							Development
						</Button>
					</Btn>
					<Imgs src={Development} />
					<Title>
						<Title.Description>
							<h1 className="small-description">
								Where people develop the own potential
							</h1>
							<p className="description">
								Lorem ipsum dolor, sit amet consectetur adipisicing
								elit.
							</p>
						</Title.Description>
						<hr />
						<Title.Footer>
							<p className="description active">Admin</p>
							<p className="description">06 Jun, 2022</p>
							<p className="description active">0 Comments</p>
						</Title.Footer>
					</Title>
				</Card>
				<Card>
					<Btn>
						<Button className="btns" width={"150px"} type={"primary"}>
							Development
						</Button>
					</Btn>
					<Imgs src={Desingn} />
					<Title>
						<Title.Description>
							<h1 className="small-description">
								Where people develop the own potential
							</h1>
							<p className="description">
								Lorem ipsum dolor, sit amet consectetur adipisicing
								elit.
							</p>
						</Title.Description>
						<hr />
						<Title.Footer>
							<p className="description active">Admin</p>
							<p className="description">06 Jun, 2022</p>
							<p className="description active">0 Comments</p>
						</Title.Footer>
					</Title>
				</Card>			
				</Carousel>
			</Wrapper>
		</Container>
	);
};

export default Blog;
