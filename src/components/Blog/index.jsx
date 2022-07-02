import React, { useRef } from "react";
import {
	Carousel,
	Container,
	Wrapper,
	Card,
	Imgs,
	Icon,
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
		<Card
			className="blog"
			onDragStart={handleDragStart}
			role="presentation"
		>
			<Btn>
				<Button width={"150px"} type={"primary"}>
					Development
				</Button>
			</Btn>
			<Imgs src={Business} />
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
		</Card>,
		<Card onDragStart={handleDragStart} role="presentation">
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
		</Card>,
		<Card onDragStart={handleDragStart} role="presentation">
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
		</Card>,
		<Card onDragStart={handleDragStart} role="presentation">
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
		</Card>,
		<Card onDragStart={handleDragStart} role="presentation">
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
		</Card>,
	];
	return (
		<Container>
			<p className="small-description text-centr color">FROM OUR BLOG</p>
			<h1 className="title text-centr">
				See Latest News & Articles From Blog
			</h1>
			<Wrapper>
				<Icon.Left onClick={() => ref.current.slidePrev()} />
				<Icon.Right onClick={() => ref.current.slideNext()} />
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

export default Blog;
