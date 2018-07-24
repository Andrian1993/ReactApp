import React, { Component } from 'react';
import { Row, Grid, Col } from 'react-bootstrap';
import '../css/Navbar.css';

class NavBar extends Component {
  render() {
    return (
        <div>
          <nav>
            <Grid>
              <Row className="show-grid">
                <Col xs={12} md={4}>
                  <a href="#">MODUSversus</a>
                </Col>
                <Col xs={6} md={8}>
                  <a href="#">HOME</a>
                  <a href="#">ABOUT</a>
                  <a href="#">SERVICES</a>
                  <a href="#">PORTFOLIO</a>
                  <a href="#">BLOG</a>
                  <a href="#">FEATURES</a>
                  <a href="#">CONTACTS</a>
                </Col>
              </Row>
            </Grid>
          </nav>
        </div>

    );
  }
}
export default NavBar;
