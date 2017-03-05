import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    return (
      <div>
        {/* Blank Space */}
        <div className="blank-space"/>

        {/* Message to the viewer */}
        <section id="message">
            <span>
              If you would like to take your project to the next level, I would love to hear from you!
            </span>
            <span>
              Drop me a line at <a>jwbentle@gmail.com</a>
            </span>
            <div className="container">
                <div className="row">
                    <i className="fa fa-github" aria-hidden="true"></i>
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                    <i className="fa fa-file-text" aria-hidden="true"></i>
                </div>
            </div>
        </section>
      </div>
    )
  }
}
