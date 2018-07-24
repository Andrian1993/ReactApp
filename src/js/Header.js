import React, { Component } from 'react';
import {Row, Grid, Col, Carousel} from 'react-bootstrap';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={1500} height={500} alt="900x500" src={ require('../img/1.jpg') } />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1500} height={500} alt="900x500" src={ require('../img/2.jpg') }  />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1500} height={500} alt="900x500" src={ require('../img/3.jpg') }  />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default Header;
