import React, { Component } from 'react';
const StyleGuide1 = require('../../assets/images/explore/style-guide/1.png');
const StyleGuide2 = require('../../assets/images/explore/style-guide/2.png');
const HallOfFame = require('../../assets/images/welcome/hall-of-fame.png');
const WelcomePacket = require('../../assets/images/explore/welcome-packet.png');

export default class iDTech extends Component {
  render() {
    return (
      // Slide menu inspiration from
      // Starter Page
      <div>
        {/* Blank Space */}
        <div className="blank-space"/>

          {/* iD Tech */}
          <section id="idtech">
              <div className="container">
                  <div className="row">
                      <div className="col-xs-3" />
                      <div className="col-xs-6">
                          <h3>
                              My first dive into professional web design
                              was at iD Tech
                          </h3>
                          <span>
                              Front End Developer   |   iD Tech   |   2014 - 2016
                          </span>
                      </div>
                      <div className="col-xs-3" />
                  </div>
                  <div className="row">
                      <div className="col-xs-3">
                          <img src={StyleGuide1} />
                      </div>
                      <div className="col-xs-6" />
                      <div className="col-xs-3">
                          <img src={HallOfFame} />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-xs-3">
                          <img src={StyleGuide1} />
                      </div>
                      <div className="col-xs-6" />
                      <div className="col-xs-3">
                          <img src={WelcomePacket} />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-xs-6">
                          <p>
                              In addition to converting designs into code, I worked closely with fellow designers to wireframe, user test, and implemented new products.
                          </p>
                      </div>
                      <div className="col-xs-6" />
                  </div>
                  <div className="row">
                      <strong className="project-link"><a>/Next</a></strong>
                      <strong className="project-link"><a>Style Guide</a></strong>
                      <strong className="project-link"><a>Careers Page</a></strong>
                  </div>
                  <div className="row">
                      <div className="col-xs-6" />
                      <div className="col-xs-6">
                          <img src={WelcomePacket} />
                      </div>
                  </div>
                  <div className="row">
                      <strong>
                          “He is able to take ideas and merge them with solid web
                          designing skills to provide creative solutions to problems
                          we faced within the company.”
                      </strong>
                  </div>
                  <div className="row">
                      <span>- Olga Kuczer</span><span> Senior Product UI / UX Designer, IBM </span>
                  </div>
              </div>
          </section>
        </div>
    )
  }
}
