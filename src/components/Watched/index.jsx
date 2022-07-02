import React from "react";
import { Container, Wrapper, Star } from "./style";

const WatchVideo = () => {
	return (
		<Container>
			<a href="#">
				<Wrapper>
					<Star />
				</Wrapper>
			</a>
			<h1 className="sub-title">Watch Video</h1>
		</Container>
	);
};

export default WatchVideo;
