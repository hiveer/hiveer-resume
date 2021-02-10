import React from 'react'
import { NavLink } from 'react-router-dom'
import { PageTemplate } from './../pageTemplate/pageTemplate.js'

import './footerNav.css'

export const FooterNav = () => {
  return (
    <div className="container" id="mobile-footer-nav">
      <div className="row">
        <div className="col">
          <NavLink className="nav-link" to="/about-me">我</NavLink>
        </div>
        <div className="col">
          <NavLink className="nav-link" to="/work-experiences">工作</NavLink>
        </div>
        <div className="col">
          <NavLink className="nav-link" to="/project-experiences">项目</NavLink>
        </div>
        <div className="col">
          <NavLink className="nav-link" to="/download-resume">简历</NavLink>
        </div>
      </div>
    </div>
  );
}
