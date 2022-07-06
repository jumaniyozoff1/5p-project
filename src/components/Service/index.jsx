import React, { useRef } from "react";
import {
  Container,
  Wrapper,
  Card,
  Imgs,
  Texts,
  Text,
  Border,
} from "./style";
// import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "react-elastic-carousel";
import Team1 from "../../assets/img/analiysis.jpg";
import Team2 from "../../assets/img/business.jpg";
import Team3 from "../../assets/img/digital.jpg";
import Warp2 from "./Wrap2";

const Service = () => {
  const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 850, itemsToShow: 2 },
		{ width: 1180, itemsToShow: 3 },
	];
  const ref = useRef("click");
  const handleDragStart = (e) => e.preventDefault();
  const width = {
    0: {
      items: 1,
    },
    750:{
      items: 1,
    },
    1024: {
      items: 3,
    },
  };
  const items = [
    <Card onDragStart={handleDragStart} role="presentation">
      <Imgs src={Team1} />
      <Texts>
        <Text>
          <p className="sub-title">Analysis Business</p>
          <p className="description">
            There is ut duis vel quis dignissim null hendrerit. ltrices
          </p>
        </Text>
      </Texts>
    </Card>,
    <Card onDragStart={handleDragStart} role="presentation">
      <Imgs src={Team2} />
      <Texts>
        <Text>
          <p className="sub-title">Analysis Business</p>
          <p className="description">
            There is ut duis vel quis dignissim null hendrerit. ltrices
          </p>
        </Text>
      </Texts>
    </Card>,
    <Card onDragStart={handleDragStart} role="presentation">
      <Imgs src={Team3} />
      <Texts>
        <Text>
          <p className="sub-title">Analysis Business</p>
          <p className="description">
            There is ut duis vel quis dignissim null hendrerit. ltrices
          </p>
        </Text>
      </Texts>
    </Card>,
    <Card onDragStart={handleDragStart} role="presentation">
      <Imgs src={Team3} />
      <Texts>
        <Text>
          <p className="sub-title">Analysis Business</p>
          <p className="description">
            There is ut duis vel quis dignissim null hendrerit. ltrices
          </p>
        </Text>
      </Texts>
    </Card>,
    <Card onDragStart={handleDragStart} role="presentation">
      <Imgs src={Team3} />
      <Texts>
        <Text>
          <p className="sub-title">Analysis Business</p>
          <p className="description">
            There is ut duis vel quis dignissim null hendrerit. ltrices
          </p>
        </Text>
      </Texts>
    </Card>,
  ];
  return (
    <Container className="service">
      <p className="small-description text-centr color">OUR BEST SERVICE</p>
      <h1 className="title text-centr">
        The Best Business And It - Service Company!
      </h1>
      <div className="border"></div>
      <Wrapper>
        <Carousel 
            itemsToShow={4}
            itemsToScroll={1}
            breakPoints ={breakPoints}
            itemPadding={[0, 20]}
            enableMouseSwipe={true}   
            showArrows={false} 
            >
              <Card>
                <Imgs src={Team1} />
                <Texts>
                  <Text>
                    <p className="sub-title">Analysis Business</p>
                    <p className="description">
                      There is ut duis vel quis dignissim null hendrerit. ltrices
                    </p>
                  </Text>
                </Texts>
              </Card>
              <Card>
                <Imgs src={Team1} />
                <Texts>
                  <Text>
                    <p className="sub-title">Analysis Business</p>
                    <p className="description">
                      There is ut duis vel quis dignissim null hendrerit. ltrices
                    </p>
                  </Text>
                </Texts>
              </Card>
              <Card>
                <Imgs src={Team1} />
                <Texts>
                  <Text>
                    <p className="sub-title">Analysis Business</p>
                    <p className="description">
                      There is ut duis vel quis dignissim null hendrerit. ltrices
                    </p>
                  </Text>
                </Texts>
              </Card>
              <Card>
                <Imgs src={Team1} />
                <Texts>
                  <Text>
                    <p className="sub-title">Analysis Business</p>
                    <p className="description">
                      There is ut duis vel quis dignissim null hendrerit. ltrices
                    </p>
                  </Text>
                </Texts>
              </Card>
              <Card>
                <Imgs src={Team1} />
                <Texts>
                  <Text>
                    <p className="sub-title">Analysis Business</p>
                    <p className="description">
                      There is ut duis vel quis dignissim null hendrerit. ltrices
                    </p>
                  </Text>
                </Texts>
              </Card>
              <Card>
                <Imgs src={Team1} />
                <Texts>
                  <Text>
                    <p className="sub-title">Analysis Business</p>
                    <p className="description">
                      There is ut duis vel quis dignissim null hendrerit. ltrices
                    </p>
                  </Text>
                </Texts>
              </Card>
              <Card>
                <Imgs src={Team1} />
                <Texts>
                  <Text>
                    <p className="sub-title">Analysis Business</p>
                    <p className="description">
                      There is ut duis vel quis dignissim null hendrerit. ltrices
                    </p>
                  </Text>
                </Texts>
              </Card>
        </Carousel>
      </Wrapper>
      <Warp2/>
    </Container>
  );
};

export default Service;

        {/* <Carousel
          keyboardNavigation={true}
          disableButtonsControls={true}
          ref={ref}
          mouseTracking
          infinite={true}
          responsive={width}
          controlsStrategy="alternate"
          items={items}
        /> */}