import React from 'react';
import { render } from 'react-dom'

import './App.css'


import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'


import { AboutMe } from './components/about_me.js'
import { WorkExperiences } from './components/work_experiences.js'
import { ProjectExperiences } from './components/project_experiences.js'
import { DownloadResume } from './components/download_resume.js'

import {
  Contact,
  Whoops404
} from './pages'

window.React = React

const App = () => {
  return(
    <HashRouter>
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
    </HashRouter>
  )
}

export default App;
