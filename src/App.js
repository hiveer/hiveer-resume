import React from 'react';
import { render } from 'react-dom'

import './App.css'


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


import { AboutMe } from './components/aboutMe/aboutMe.js'
import { WorkExperiences } from './components/workExperiences/workExperiences.js'
import { ProjectExperiences } from './components/projectExperiences/projectExperiences.js'
import { DownloadResume } from './components/downloadResume/downloadResume.js'

import {
  Contact,
  Whoops404
} from './pages'

window.React = React

const App = () => {
  return(
    <Router>
      <div className="main">
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/work-experiences" component={WorkExperiences} />
          <Route path="/project-experiences" component={ProjectExperiences} />
          <Route path="/download-resume" component={DownloadResume} />
          <Route component={Whoops404} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
