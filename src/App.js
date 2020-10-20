import React from 'react';
import { render } from 'react-dom'

import './App.css'

import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'


import { AboutMe } from './components/about_me.js'
import { WorkExperences } from './components/work_experences.js'
import { ProjectExperences } from './components/project_experences.js'
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
          <Route path="/work-experences" component={WorkExperences} />
          <Route path="/project-experences" component={ProjectExperences} />
          <Route path="/download-resume" component={DownloadResume} />
          <Route component={Whoops404} />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App;
