import React, { Component } from 'react';
const HeaderImage = require('../../assets/images/welcome/me-looking-2.jpg');

export default class Header extends Component {
  render() {
    return (
      // Slide menu inspiration from
      // Starter Page
      <div id="o-wrapper" className="o-wrapper">
          <div id="welcome">
              <div className="welcome-text">
                  <h1 className="animation-element type1">The Work of John W. Bentley<span className="blinking-cursor">|</span></h1>
              </div>

              <div className="sticky-nav" />
          </div>
      </div>
    )
  }
}
