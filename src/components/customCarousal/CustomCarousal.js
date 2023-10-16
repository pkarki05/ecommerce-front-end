import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CustomCarousal() {
  return (
    <div className="caraousal">
      <Carousel>
        <Carousel.Item>
          <img
            className="carousal"
            src="https://goodfoodshow.com.au/brisbane/wp-content/uploads/sites/5/2023/06/element_49_a3ab70edf1d5ad36b0e8f8d94b618085-10-Banner.png"
          />{" "}
          <Carousel.Caption>
            <div className=" d-grid carousal-caption">
              <h3>The Virtual Liquor Cabinet</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousal"
            src="https://www.edgemill.com.au/wp-content/uploads/2022/01/Hero-Banner-1800x600px-2022.jpg"
          />{" "}
          <Carousel.Caption>
            <div className=" d-grid carousal-caption">
              <h3>ToastTime Liquors</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousal"
            src="https://myliquoronline.com.au/wp-content/uploads/2020/12/Banner-3-1600x800.png"
          />{" "}
          <Carousel.Caption>
            <div className=" d-grid carousal-caption">
              <h3>Pour & Explore</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CustomCarousal;
