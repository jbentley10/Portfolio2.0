import React, { Component } from 'react';

export default class PersonalProjects extends Component {
  render() {
    return (
      // Slide menu inspiration from
      // Starter Page
      <div>
        {/* Blank Space */}
        <div className="blank-space"/>

        {/* Personal Projects */}
        <section id="personal-projects">
            <div className="container">
                <div className="row">
                    <div className="col-xs-3" />
                    <div className="col-xs-6">
                        <p>My own personal projects help me define what to focus on next.</p>
                    </div>
                    <div className="col-xs-3" />
                </div>
            </div>
        </section>
      </div>
    )
  }
}
