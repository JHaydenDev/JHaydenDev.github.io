import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import styled from "styled-components";

const DoggoImg = styled.img`
  width: 50% !important;
  margin: auto;
`;

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        interval={null}
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <DoggoImg
            className="d-block w-100"
            src="https://cdn-images-1.medium.com/max/1600/0*P2kX3N1VZBz2X12X.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <DoggoImg
            className="d-block w-100"
            src="https://cdn-images-1.medium.com/max/1600/0*P2kX3N1VZBz2X12X.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <DoggoImg
            className="d-block w-100"
            src="https://cdn-images-1.medium.com/max/1600/0*P2kX3N1VZBz2X12X.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}



export default ControlledCarousel;
