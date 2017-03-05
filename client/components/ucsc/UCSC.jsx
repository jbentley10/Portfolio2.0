import React, { Component } from 'react';

// Load Images
const PrototypeTutorial = require('../../assets/images/explore/cocooned/prototype-tutorial.jpg');
const Warp4 = require('../../assets/images/explore/warp/4.png');
const Cocooned1 = require('../../assets/images/explore/cocooned/1.png');

export default class UCSC extends Component {
  render() {
    return (
      // Slide menu inspiration from
      // Starter Page
      <div>
        {/* Blank Space */}
        <div className="blank-space"/>

        {/* UCSC */}
        <section id="ucsc">
            <div className="container">
                <div className="row">
                    <div className="col-xs-3">
                        <img src={PrototypeTutorial} />
                    </div>
                    <div className="col-xs-6">
                        <h3>My journey began with game development</h3>
                        <span>University of California, Santa Cruz  |  2010-2014</span>
                    </div>
                    <div className="col-xs-3">
                        <img src={Warp4} />
                    </div>
                    <img src={Cocooned1} />
                </div>
            </div>
        </section>
      </div>
    )
  }
}
