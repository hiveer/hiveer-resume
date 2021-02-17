import React from 'react'
import { NavLink } from 'react-router-dom'

import './mainMenu.css'
import headportrait from './../assets/head_portrait.png'

const selectedStyle = {
  backgroundColor: "white",
  color: "slategray"
}

export const MainMenu = () => {
  return(
    <nav className="main-menu">
      <p>
        <img className="head-portrait" src={headportrait} />
      </p>

      <p className="main-menu-nav">
        <NavLink to="/">
        </NavLink>
      </p>

      <p className="main-menu-nav">
        <NavLink to="/about-me" className="btn btn-info" activeStyle={selectedStyle}>
          关于我
        </NavLink>
      </p>

      <p className="main-menu-nav">
        <NavLink to="/work-experiences" className="btn btn-info" activeStyle={selectedStyle}>
          工作经验
        </NavLink>
      </p>

      <p className="main-menu-nav">
        <NavLink to="/project-experiences" className="btn btn-info" activeStyle={selectedStyle}>
          项目经验
        </NavLink>
      </p>

      <p className="main-menu-nav">
        <NavLink to="/download-resume" className="btn btn-info" activeStyle={selectedStyle}>
          简历下载
        </NavLink>
      </p>
      <p className="disclaimer"> Powered by React Router </p>
    </nav>
  )
}
