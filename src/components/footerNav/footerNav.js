import React from 'react'
import { NavLink } from 'react-router-dom'
import { PageTemplate } from './../pageTemplate/pageTemplate.js'

import './footerNav.css'

const selectedStyle = {
  backgroundColor: "white",
  color: "slategray"
}

export const FooterNav = () => {
  return (
    <div className="container" id="mobile-footer-nav">
      <div className="row">
        <div className="col">
          <NavLink className="nav-link" to="/about-me" activeStyle={selectedStyle}>我</NavLink>
        </div>
        <div className="col">
          <NavLink className="nav-link" to="/work-experiences" activeStyle={selectedStyle}>工作</NavLink>
        </div>
        <div className="col">
          <NavLink className="nav-link" to="/project-experiences" activeStyle={selectedStyle}>项目</NavLink>
        </div>
        <div className="col">
          <NavLink className="nav-link" to="/download-resume" activeStyle={selectedStyle}>简历</NavLink>
        </div>
      </div>
    </div>
  );
}
