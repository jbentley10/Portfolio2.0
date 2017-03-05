import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header.jsx';
import AboutMe from './components/about-me/AboutMe.jsx';
import UCSC from './components/ucsc/UCSC.jsx';
import LeapFrog from './components/leapfrog/LeapFrog.jsx';
import iDTech from './components/idtech/iDTech.jsx';
import PersonalProjects from './components/personal-projects/PersonalProjects.jsx';
import Message from './components/message/Message.jsx';
import assets from './components/assets.jsx';

// Stylesheets
require('./stylesheets/app.scss');

ReactDOM.render(
  <div>
      <Header />
      <AboutMe />
      <UCSC />
      <LeapFrog />
      <iDTech />
      <PersonalProjects />
      <Message />
  </div>,
  document.getElementById('root')
);
